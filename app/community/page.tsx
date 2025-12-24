"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "@/app/components/Navbar";

export default function CommunityPage() {
  // --- State ---
  const [username, setUsername] = useState("");
  const [isJoined, setIsJoined] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Edit Mode State
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editValue, setEditValue] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [tempName, setTempName] = useState("");

  // --- 1. Fetch Posts (Polling for Live Chat) ---
  const fetchPosts = async () => {
    try {
      const res = await fetch("/api/community");
      const data = await res.json();
      setPosts(data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch posts", error);
    }
  };

  useEffect(() => {
    fetchPosts(); // Initial fetch
    const interval = setInterval(fetchPosts, 2000); // Poll every 2 seconds
    return () => clearInterval(interval);
  }, []);

  // --- Handlers ---
  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (tempName.trim()) {
      setUsername(tempName);
      setIsJoined(true);
    }
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handlePost = async () => {
    if (!inputValue.trim() && !selectedImage) return;

    const newPostData = {
      author: username,
      role: "Student", // You could make this dynamic later
      time: "Just now",
      content: inputValue,
      tags: [],
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`,
      image: selectedImage
    };

    // Optimistic Update (Show immediately)
    setPosts([ { id: Date.now(), ...newPostData, likes: 0, comments: 0 }, ...posts ]);
    setInputValue("");
    setSelectedImage(null);

    // Send to API
    await fetch("/api/community", {
      method: "POST",
      body: JSON.stringify(newPostData),
    });
    fetchPosts(); // Refresh to get exact server state
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Delete this post?")) return;
    
    await fetch("/api/community", {
      method: "DELETE",
      body: JSON.stringify({ id, username }),
    });
    fetchPosts();
  };

  const startEdit = (post: any) => {
    setEditingId(post.id);
    setEditValue(post.content);
  };

  const saveEdit = async (id: number) => {
    await fetch("/api/community", {
      method: "PUT",
      body: JSON.stringify({ id, content: editValue, username }),
    });
    setEditingId(null);
    fetchPosts();
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark font-display flex flex-col">
      <Navbar />

      {/* --- LOGIN OVERLAY --- */}
      {!isJoined && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-card-dark border border-border-dark p-8 rounded-2xl w-full max-w-md shadow-2xl">
            <h2 className="text-2xl font-bold text-white text-center mb-6">Join Chat</h2>
            <form onSubmit={handleJoin} className="space-y-4">
              <input
                type="text"
                placeholder="Enter Username"
                className="w-full bg-background-dark border border-border-dark rounded-lg px-4 py-3 text-white outline-none focus:border-primary"
                value={tempName}
                onChange={(e) => setTempName(e.target.value)}
                autoFocus
              />
              <button className="w-full bg-primary hover:bg-cyan-400 text-background-dark font-bold py-3 rounded-lg">
                Join
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="flex flex-1 w-full max-w-[1440px] mx-auto">
        <main className="flex-1 flex flex-col min-w-0 border-r border-border-dark bg-background-dark">
          
          {/* Composer */}
          <div className="p-4 sm:p-6 pb-2 border-b border-border-dark">
            <div className="flex gap-3">
               <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 shrink-0 hidden sm:block bg-gray-700" 
                 style={{ backgroundImage: `url('https://api.dicebear.com/7.x/avataaars/svg?seed=${username || 'guest'}')` }}></div>
              <div className="flex-1 flex flex-col gap-3 rounded-xl border border-border-dark bg-card-dark p-4">
                <textarea 
                  className="w-full bg-transparent border-none text-white focus:ring-0 resize-none h-16 text-base outline-none" 
                  placeholder={`Write something, ${username}...`}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                ></textarea>
                {selectedImage && <img src={selectedImage} className="h-20 w-fit rounded border border-border-dark" />}
                <div className="flex justify-between items-center pt-2">
                   <div className="flex gap-2">
                    <input type="file" ref={fileInputRef} onChange={handleImageSelect} className="hidden" accept="image/*" />
                    <button onClick={() => fileInputRef.current?.click()} className="text-primary hover:bg-background-dark p-2 rounded-full"><span className="material-symbols-outlined">image</span></button>
                   </div>
                   <button onClick={handlePost} className="bg-primary text-background-dark font-bold py-1.5 px-6 rounded-lg text-sm">Post</button>
                </div>
              </div>
            </div>
          </div>

          {/* Feed */}
          <div className="flex flex-col p-4 sm:p-6 gap-6">
            {loading ? <p className="text-text-muted text-center">Loading live chat...</p> : posts.map((post) => (
              <article key={post.id} className="flex flex-col rounded-xl border border-border-dark bg-card-dark p-5">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 border border-border-dark bg-gray-700" style={{ backgroundImage: `url('${post.avatar}')` }}></div>
                    <div>
                      <h3 className="text-white font-bold text-base">{post.author}</h3>
                      <p className="text-text-muted text-xs">{post.role} • {post.time}</p>
                    </div>
                  </div>
                  
                  {/* EDIT / DELETE BUTTONS (Only if username matches) */}
                  {post.author === username && (
                     <div className="flex gap-2">
                       <button onClick={() => startEdit(post)} className="text-text-muted hover:text-primary"><span className="material-symbols-outlined text-sm">edit</span></button>
                       <button onClick={() => handleDelete(post.id)} className="text-text-muted hover:text-red-500"><span className="material-symbols-outlined text-sm">delete</span></button>
                     </div>
                  )}
                </div>

                {/* Content Area (Normal vs Edit Mode) */}
                {editingId === post.id ? (
                  <div className="mt-4">
                    <textarea 
                      className="w-full bg-background-dark text-white p-2 rounded border border-border-dark"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                    />
                    <div className="flex gap-2 mt-2">
                      <button onClick={() => saveEdit(post.id)} className="bg-green-600 text-white px-3 py-1 rounded text-sm">Save</button>
                      <button onClick={() => setEditingId(null)} className="bg-gray-600 text-white px-3 py-1 rounded text-sm">Cancel</button>
                    </div>
                  </div>
                ) : (
                  <div className="mt-4 text-gray-200 text-sm leading-relaxed">
                    <p>{post.content}</p>
                    {post.image && <img src={post.image} className="mt-3 rounded-lg max-h-64 border border-border-dark" />}
                  </div>
                )}
              </article>
            ))}
          </div>

        </main>
      </div>
    </div>
  );
}