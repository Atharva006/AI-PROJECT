"use client";

import React, { useState } from "react";
import Link from "next/link";

// Types for our data
type Resource = { name: string; type: string; url: string };
type Step = { title: string; status: string; percentage: number; description: string; resources: Resource[] };
type RoadmapData = { matchPercentage: number; estimatedTime: string; insight: string; steps: Step[] };

export default function RoadmapPage() {
  const [targetRole, setTargetRole] = useState("Machine Learning Engineer");
  const [masteredSkills, setMasteredSkills] = useState<string[]>(["Python", "SQL", "Git"]);
  const [learningQueue, setLearningQueue] = useState<string[]>(["TensorFlow", "NLP"]);
  const [loading, setLoading] = useState(false);
  
  // Default/Initial Data (Placeholder until first API call)
  const [roadmapData, setRoadmapData] = useState<RoadmapData | null>(null);

  // Function to call the API
  const generateRoadmap = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/roadmap', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ targetRole, masteredSkills, learningQueue }),
      });
      
      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }

      const data = await res.json();
      setRoadmapData(data);
    } catch (error) {
      console.error("Failed to fetch roadmap", error);
      // Optional: Add a UI toast or alert here
    } finally {
      setLoading(false);
    }
  };

  // Handler for adding a skill (Simulated DnD drop)
  const addSkill = (skill: string, listType: 'mastered' | 'queue') => {
    if (listType === 'mastered') {
      if (!masteredSkills.includes(skill)) setMasteredSkills([...masteredSkills, skill]);
    } else {
      if (!learningQueue.includes(skill)) setLearningQueue([...learningQueue, skill]);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-body text-slate-900 dark:text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-[#224249] bg-[#101f22]/95 backdrop-blur">
        <div className="flex items-center justify-between px-6 py-3 lg:px-10">
           <Link href="/" className="flex items-center gap-4 text-white">
            <div className="flex items-center justify-center size-8 rounded-lg bg-primary/20 text-primary">
              <span className="material-symbols-outlined">explore</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-[#102023] dark:text-white">
              AI Career Compass
            </span>
           </Link>
           <nav className="hidden md:flex items-center gap-8">
            <Link className="text-sm font-medium text-[#475569] hover:text-primary dark:text-[#90c1cb] dark:hover:text-white transition-colors" href="/">Home</Link>
            <Link className="text-sm font-medium text-[#475569] hover:text-primary dark:text-[#90c1cb] dark:hover:text-white transition-colors" href="/roles/machine-learning-engineer">Machine-Learning-Engineer</Link>
            <Link className="text-sm font-medium text-[#475569] hover:text-primary dark:text-[#90c1cb] dark:hover:text-white transition-colors" href="#">Resume Analyzer</Link>
            <Link className="text-sm font-medium text-[#475569] hover:text-primary dark:text-[#90c1cb] dark:hover:text-white transition-colors" href="/roadmap">Skill's Roadmap</Link>
            <Link className="text-sm font-medium text-[#475569] hover:text-primary dark:text-[#90c1cb] dark:hover:text-white transition-colors" href="#">Community</Link>
            <Link className="text-sm font-medium text-[#475569] hover:text-primary dark:text-[#90c1cb] dark:hover:text-white transition-colors" href="#">About Us</Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8 md:px-10 lg:px-20 xl:px-40">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h1 className="text-white text-4xl font-bold font-display mb-2">Interactive Skill Roadmap</h1>
            <p className="text-[#90c1cb]">Manage your skills to generate a live, AI-powered career path.</p>
          </div>
          <button 
            onClick={generateRoadmap}
            disabled={loading}
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-[#101f22] hover:bg-opacity-90 transition-colors font-bold shadow-[0_0_15px_rgba(13,204,242,0.3)] disabled:opacity-50"
          >
            {loading ? (
              <span className="material-symbols-outlined animate-spin">refresh</span>
            ) : (
              <span className="material-symbols-outlined">auto_awesome</span>
            )}
            {loading ? "Generating Plan..." : "Generate AI Plan"}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT COLUMN: Skill Builder */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-surface-dark rounded-xl border border-[#224249] p-6 shadow-lg h-full flex flex-col">
              <h3 className="text-white text-xl font-bold font-display mb-4">Skill Builder</h3>
              
              {/* Simulation: Click to Add Skills */}
              <div className="mb-6">
                <p className="text-xs font-medium text-gray-400 mb-2 uppercase tracking-wider">Quick Add (Demo)</p>
                <div className="flex flex-wrap gap-2">
                  {["Rust", "Docker", "PyTorch", "AWS"].map(skill => (
                    <button 
                      key={skill}
                      onClick={() => addSkill(skill, 'queue')}
                      className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#101f22] border border-[#224249] text-gray-300 hover:border-primary hover:text-white transition-colors"
                    >
                      + {skill}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mastered Skills List */}
              <div className="mb-4 flex-1">
                <div className="h-full rounded-xl border-2 border-dashed border-green-500/30 bg-green-500/5 p-4 relative flex flex-col gap-2 drag-pattern">
                  <span className="text-green-400 text-sm font-bold flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-[18px]">check_circle</span> Mastered
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {masteredSkills.map(skill => (
                      <div key={skill} className="bg-green-500/20 text-green-100 px-3 py-1.5 rounded-lg text-xs font-medium border border-green-500/30">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Learning Queue List */}
              <div className="flex-1">
                <div className="h-full rounded-xl border-2 border-dashed border-primary/30 bg-primary/5 p-4 relative flex flex-col gap-2 drag-pattern">
                  <span className="text-primary text-sm font-bold flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-[18px]">trending_up</span> Queue
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {learningQueue.map(skill => (
                      <div key={skill} className="bg-primary/20 text-cyan-100 px-3 py-1.5 rounded-lg text-xs font-medium border border-primary/30">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Target Role */}
              <div className="mt-6">
                 <label className="text-xs font-medium text-gray-400 uppercase">Target Role</label>
                 <select 
                   value={targetRole}
                   onChange={(e) => setTargetRole(e.target.value)}
                   className="w-full mt-2 bg-[#101f22] border border-[#224249] text-white rounded-lg p-3 text-sm focus:outline-none focus:border-primary"
                 >
                    <option>Machine Learning Engineer</option>
                    <option>Data Scientist</option>
                    <option>AI Researcher</option>
                 </select>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Dynamic Roadmap Display */}
          <div className="lg:col-span-8">
            {!roadmapData ? (
              // Empty State
              <div className="flex flex-col items-center justify-center h-full border border-dashed border-[#224249] rounded-xl p-10 text-center">
                 <span className="material-symbols-outlined text-6xl text-[#224249] mb-4">account_tree</span>
                 <h3 className="text-xl font-bold text-white mb-2">No Roadmap Generated</h3>
                 <p className="text-gray-400 max-w-md">Add your skills on the left and click "Generate AI Plan" to see your personalized path.</p>
              </div>
            ) : (
              // API Data Display
              <>
                {/* Insight Box */}
                <div className="bg-gradient-to-r from-[#132e35] to-[#102023] border border-primary/30 rounded-xl p-6 mb-8 relative overflow-hidden shadow-lg">
                   <div className="relative z-10">
                      <div className="flex items-center justify-between mb-3">
                         <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary animate-pulse">auto_awesome</span>
                            <h3 className="text-primary font-bold text-lg">AI Analysis</h3>
                         </div>
                         <span className="text-xs font-bold text-green-400 bg-green-900/20 px-2 py-1 rounded border border-green-500/30">Live</span>
                      </div>
                      <p className="text-gray-200 text-sm leading-relaxed mb-4">{roadmapData.insight}</p>
                      <div className="flex gap-3">
                         <span className="px-2 py-1 rounded bg-black/30 border border-white/10 text-xs text-gray-400">Match: {roadmapData.matchPercentage}%</span>
                         <span className="px-2 py-1 rounded bg-black/30 border border-white/10 text-xs text-gray-400">Time: {roadmapData.estimatedTime}</span>
                      </div>
                   </div>
                </div>

                {/* Steps Mapping */}
                <div className="relative pl-4 md:pl-8 space-y-8">
                  <div className="absolute top-0 bottom-0 left-4 md:left-8 w-px bg-gradient-to-b from-primary via-[#224249] to-transparent -ml-px"></div>
                  
                  {roadmapData.steps.map((step, index) => (
                    <div key={index} className={`relative pl-8 md:pl-12 group ${step.status === 'future' ? 'opacity-80' : ''}`}>
                       <div className={`absolute left-4 md:left-8 -translate-x-1/2 mt-1.5 size-4 rounded-full z-10 
                          ${step.status === 'current' ? 'bg-[#101f22] border-2 border-primary ring-4 ring-primary/20' : 'bg-[#224249] border-2 border-gray-500'}`}
                       ></div>
                       
                       <div className="bg-surface-dark border border-[#224249] rounded-xl p-5 hover:border-primary/50 transition-colors">
                          <div className="flex justify-between items-start mb-2">
                             <div>
                                <span className="text-primary text-xs font-bold uppercase tracking-wider mb-1 block">{step.status} Focus</span>
                                <h3 className="text-white text-lg font-bold font-display">{step.title}</h3>
                             </div>
                             {step.status === 'current' && (
                                <span className="text-xs text-white bg-[#101f22] border border-primary/30 px-2 py-1 rounded">{step.percentage}% Complete</span>
                             )}
                          </div>
                          <p className="text-gray-400 text-sm mb-4">{step.description}</p>
                          
                          {/* Resources */}
                          {step.resources && step.resources.length > 0 && (
                             <div className="space-y-2">
                                {step.resources.map((res, i) => (
                                   <a key={i} href={res.url} target="_blank" className="flex items-center gap-3 bg-[#101f22] p-2 rounded-lg border border-[#224249] hover:border-primary/30 transition-colors group/item">
                                      <span className="material-symbols-outlined text-gray-500 text-sm group-hover/item:text-primary">link</span>
                                      <span className="text-sm text-gray-300 group-hover/item:text-white">{res.name}</span>
                                      <span className="text-xs text-gray-600 ml-auto border border-gray-700 px-1.5 rounded">{res.type}</span>
                                   </a>
                                ))}
                             </div>
                          )}
                       </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}