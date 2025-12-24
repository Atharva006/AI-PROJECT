"use client";

import { useState, ChangeEvent } from "react";

// Define the shape of our data
interface AnalysisResult {
  score: number;
  techStack: string[];
  improvements: { title: string; description: string }[];
  suggestedRoles: { role: string; match: string }[];
}

export default function ResumeAnalyzer() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleAnalyze = async () => {
    if (!file) return;

    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/resume", {
        method: "POST",
        body: formData,
      });
      
      if (!res.ok) throw new Error("Analysis failed");
      
      const data = await res.json();
      setResult(data);
    } catch (error) {
      console.error(error);
      alert("Something went wrong analyzing the resume.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f8f8] dark:bg-[#101f22] text-slate-900 dark:text-white font-sans">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-[#224249] bg-white/95 dark:bg-[#102023]/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="flex items-center gap-2 text-primary font-bold text-lg">
          <span className="material-symbols-outlined">explore</span>
          AI Career Guide
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-10 py-8 gap-8 flex flex-col">
        {/* Title */}
        <section>
          <h1 className="text-3xl md:text-5xl font-black mb-2">Optimize Your Profile</h1>
          <p className="text-slate-600 dark:text-[#90c1cb]">Get AI-powered insights for your resume.</p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* LEFT COLUMN: Upload Area */}
          <div className="lg:col-span-7 space-y-4">
            {/* Upload Zone */}
            <label className="border-2 border-dashed border-slate-300 dark:border-[#315f68] bg-slate-50 dark:bg-[#162a2f] rounded-xl p-10 flex flex-col items-center justify-center gap-6 cursor-pointer hover:border-primary transition-colors">
              <input 
                type="file" 
                accept=".pdf"
                onChange={handleFileChange}
                className="hidden"
              />
              
              <div className="text-center space-y-4">
                <div className="bg-[#1e363c] p-4 rounded-full inline-flex">
                  <span className="material-symbols-outlined text-4xl text-primary">cloud_upload</span>
                </div>
                <div>
                  <p className="text-xl font-bold">
                    {file ? file.name : "Upload Resume (PDF)"}
                  </p>
                  {!file && <p className="text-sm text-slate-500">Click to browse files</p>}
                </div>
              </div>
            </label>

            {/* Analyze Button - Separated from upload zone */}
            <button 
              onClick={handleAnalyze}
              disabled={!file || loading}
              className={`w-full flex items-center justify-center gap-2 rounded-lg h-12 px-8 font-bold transition-all ${
                loading 
                  ? "bg-slate-500 cursor-not-allowed" 
                  : file
                  ? "bg-primary text-[#102023] hover:shadow-[0_0_20px_rgba(13,204,242,0.5)] hover:-translate-y-0.5"
                  : "bg-slate-300 dark:bg-slate-700 cursor-not-allowed"
              }`}
            >
              {loading ? (
                <>
                  <span className="animate-spin material-symbols-outlined">progress_activity</span>
                  Processing...
                </>
              ) : (
                <>
                  <span>Analyze Resume</span>
                  <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
                </>
              )}
            </button>
          </div>

          {/* RIGHT COLUMN: Results Dashboard */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {result ? (
              <>
                {/* Score Card */}
                <div className="bg-white dark:bg-[#162a2f] rounded-xl p-6 border border-slate-200 dark:border-[#224249]">
                  <div className="flex justify-between items-end mb-4">
                    <div>
                      <h3 className="text-lg font-bold">AI Fit Score</h3>
                      <p className="text-sm text-slate-500 dark:text-[#90c1cb]">Market relevance</p>
                    </div>
                    <span className="text-4xl font-black text-primary">{result.score}%</span>
                  </div>
                  <div className="rounded-full h-3 w-full bg-slate-200 dark:bg-[#2a4850] overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: `${result.score}%` }}></div>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="bg-white dark:bg-[#162a2f] rounded-xl p-6 border border-slate-200 dark:border-[#224249]">
                  <h3 className="font-bold mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">code</span>
                    Detected Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {result.techStack.map((skill, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-slate-100 dark:bg-[#224249] text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Improvements */}
                <div className="bg-white dark:bg-[#162a2f] rounded-xl border border-slate-200 dark:border-[#224249] overflow-hidden">
                  <div className="p-4 border-b border-slate-200 dark:border-[#224249] bg-slate-50 dark:bg-[#1e363c]">
                    <h3 className="font-bold flex items-center gap-2">
                      <span className="material-symbols-outlined text-yellow-400">warning</span>
                      Areas for Improvement
                    </h3>
                  </div>
                  <div className="divide-y divide-slate-200 dark:divide-[#224249]">
                    {result.improvements.map((item, i) => (
                      <div key={i} className="p-4 hover:bg-slate-50 dark:hover:bg-[#1a2f34]">
                        <div className="flex items-start gap-3">
                          <div className="mt-1 size-2 rounded-full bg-yellow-400 shrink-0"></div>
                          <div>
                            <p className="text-sm font-semibold mb-1">{item.title}</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Suggested Roles */}
                {result.suggestedRoles && result.suggestedRoles.length > 0 && (
                  <div className="bg-white dark:bg-[#162a2f] rounded-xl p-6 border border-slate-200 dark:border-[#224249]">
                    <h3 className="font-bold mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">stars</span>
                      Suggested Roles
                    </h3>
                    <div className="space-y-3">
                      {result.suggestedRoles.map((item, i) => (
                        <div key={i} className="flex justify-between items-center p-3 rounded-lg bg-slate-50 dark:bg-[#1e363c]">
                          <span className="font-medium">{item.role}</span>
                          <span className="text-sm text-primary">{item.match}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="h-full flex items-center justify-center text-slate-500 border border-dashed border-slate-300 dark:border-[#315f68] rounded-xl p-8">
                <p className="text-center">Upload your resume to see the analysis here.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}