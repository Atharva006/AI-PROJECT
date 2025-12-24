import { NextResponse } from "next/server";

// Simple in-memory storage (Resets when server restarts)
// In a real app, you would use a database like MongoDB or PostgreSQL here.
let posts: any[] = [
  {
    id: 1,
    author: "Sarah Jenkins",
    role: "NLP Researcher",
    time: "2h ago",
    content: "Has anyone experimented with the new quantization techniques for Llama-3 models?",
    tags: ["#LLM", "#MachineLearning"],
    likes: 24,
    comments: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    image: null
  }
];

export async function GET() {
  return NextResponse.json(posts);
}

export async function POST(req: Request) {
  const body = await req.json();
  
  const newPost = {
    id: Date.now(),
    ...body,
    likes: 0,
    comments: 0,
  };
  
  // Add to beginning of array
  posts = [newPost, ...posts];
  return NextResponse.json(newPost);
}

export async function PUT(req: Request) {
  const body = await req.json();
  const { id, content, username } = body;

  const postIndex = posts.findIndex((p) => p.id === id);

  if (postIndex === -1) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  // Security Check: Simple Username Match
  if (posts[postIndex].author !== username) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  posts[postIndex].content = content;
  return NextResponse.json(posts[postIndex]);
}

export async function DELETE(req: Request) {
  const body = await req.json();
  const { id, username } = body;

  const post = posts.find((p) => p.id === id);

  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  if (post.author !== username) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  posts = posts.filter((p) => p.id !== id);
  return NextResponse.json({ success: true });
}