"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar"; // Adjust path if needed

export default function ResumePage() {
  const [resumeText, setResumeText] = useState("");
  const [analysis, setAnalysis] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAnalyze = async () => {
    if (!resumeText.trim()) {
      setError("Please paste your resume text first.");
      return;
    }

    setLoading(true);
    setError("");
    setAnalysis(null);

    try {
      const res = await fetch("/api/resume", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ resumeText }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Analysis failed");
      }

      setAnalysis(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white pb-10">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-2 text-blue-400">AI Resume Review</h1>
        <p className="text-gray-400 mb-6">
          Paste your resume text below to get instant feedback on your score, tech stack, and job fit.
        </p>

        {/* Input Section */}
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg">
          <textarea
            className="w-full h-64 p-4 bg-gray-900 text-gray-100 rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
            placeholder="Paste your full resume content here..."
            value={resumeText}
            onChange={(e) => setResumeText(e.target.value)}
          ></textarea>

          {error && <p className="mt-3 text-red-400 text-sm">{error}</p>}

          <button
            onClick={handleAnalyze}
            disabled={loading}
            className={`mt-4 w-full py-3 rounded-lg font-semibold transition-all ${
              loading
                ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-500 text-white shadow-lg hover:shadow-blue-500/20"
            }`}
          >
            {loading ? "Analyzing..." : "Analyze Resume"}
          </button>
        </div>

        {/* Results Section */}
        {analysis && (
          <div className="mt-10 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            
            {/* Score Card */}
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-200">Resume Score</h2>
                <p className="text-gray-400 text-sm">Based on industry standards</p>
              </div>
              <div className={`text-4xl font-bold ${
                analysis.score >= 80 ? "text-green-400" : analysis.score >= 50 ? "text-yellow-400" : "text-red-400"
              }`}>
                {analysis.score}/100
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h3 className="text-lg font-semibold mb-4 text-blue-300">Detected Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {analysis.techStack?.map((tech: string, i: number) => (
                  <span key={i} className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Improvements */}
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h3 className="text-lg font-semibold mb-4 text-yellow-300">Areas for Improvement</h3>
              <ul className="space-y-4">
                {analysis.improvements?.map((item: any, i: number) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-yellow-500 flex-shrink-0">⚠</span>
                    <div>
                      <strong className="text-gray-200 block">{item.title}</strong>
                      <span className="text-gray-400 text-sm">{item.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Suggested Roles */}
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h3 className="text-lg font-semibold mb-4 text-green-300">Suggested Roles</h3>
              <div className="grid gap-4 md:grid-cols-2">
                {analysis.suggestedRoles?.map((role: any, i: number) => (
                  <div key={i} className="bg-gray-700/50 p-4 rounded-lg">
                    <div className="font-medium text-white">{role.role}</div>
                    <div className="text-sm text-green-400 mt-1">{role.match} Match</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}
      </main>
    </div>
  );
}