import Link from "next/link";

export default function MachineLearningEngineerPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-body">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-[#224249] bg-background-light/80 dark:bg-[#102023]/80 backdrop-blur-md">
        <div className="container mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[28px] font-bold">smart_toy</span>
            </div>
            <h1 className="font-display font-bold text-xl tracking-tight text-slate-900 dark:text-white">
              AI Career Guide
            </h1>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link className="text-sm font-medium text-slate-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">Roles</Link>
            <Link className="text-sm font-medium text-slate-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">Roadmaps</Link>
            <Link className="text-sm font-medium text-slate-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">Resources</Link>
            <Link className="text-sm font-medium text-slate-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">Community</Link>
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden sm:flex items-center justify-center h-9 px-4 rounded-lg text-sm font-bold text-slate-700 dark:text-white hover:bg-slate-200 dark:hover:bg-[#224249] transition-colors">
              Log In
            </button>
            <button className="flex items-center justify-center h-9 px-4 rounded-lg bg-primary text-[#102023] text-sm font-bold hover:bg-primary-dark transition-colors shadow-[0_0_15px_rgba(13,204,242,0.3)]">
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Main Role Info (8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {/* Hero Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-6 border-b border-gray-200 dark:border-[#224249]">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 mb-1">
                  <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-primary/10 text-primary border border-primary/20">Engineering</span>
                  <span className="flex items-center text-xs text-slate-500 dark:text-[#90c1cb] gap-1">
                    <span className="material-symbols-outlined text-[16px]">schedule</span> Full-time
                  </span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">Machine Learning Engineer</h2>
                <p className="text-lg text-slate-600 dark:text-[#90c1cb] max-w-2xl mt-1">Design, build, and deploy scalable AI models to solve complex business problems.</p>
              </div>
              <button className="flex items-center justify-center gap-2 h-11 px-6 rounded-lg bg-slate-200 dark:bg-[#224249] text-slate-900 dark:text-white text-sm font-bold hover:bg-slate-300 dark:hover:bg-[#2e555e] transition-colors whitespace-nowrap">
                <span className="material-symbols-outlined text-[20px]">bookmark_border</span>
                Save Role
              </button>
            </div>

            {/* Metrics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-[#162a2f] border border-gray-200 dark:border-[#224249] p-5 rounded-xl shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-slate-500 dark:text-[#90c1cb]">
                  <span className="material-symbols-outlined text-[20px]">payments</span>
                  <span className="text-sm font-medium">Avg. Salary</span>
                </div>
                <p className="font-display text-2xl font-bold text-slate-900 dark:text-white">$112k - $160k</p>
              </div>
              <div className="bg-white dark:bg-[#162a2f] border border-gray-200 dark:border-[#224249] p-5 rounded-xl shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-slate-500 dark:text-[#90c1cb]">
                  <span className="material-symbols-outlined text-[20px]">trending_up</span>
                  <span className="text-sm font-medium">Job Growth</span>
                </div>
                <p className="font-display text-2xl font-bold text-primary">+22% <span className="text-sm font-normal text-slate-500 dark:text-[#90c1cb]">YoY</span></p>
              </div>
              <div className="bg-white dark:bg-[#162a2f] border border-gray-200 dark:border-[#224249] p-5 rounded-xl shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-slate-500 dark:text-[#90c1cb]">
                  <span className="material-symbols-outlined text-[20px]">psychology</span>
                  <span className="text-sm font-medium">Difficulty</span>
                </div>
                <div className="flex items-center gap-2">
                  <p className="font-display text-2xl font-bold text-slate-900 dark:text-white">High</p>
                  <div className="flex gap-1">
                    <div className="w-2 h-4 bg-primary rounded-sm"></div>
                    <div className="w-2 h-4 bg-primary rounded-sm"></div>
                    <div className="w-2 h-4 bg-primary rounded-sm"></div>
                    <div className="w-2 h-4 bg-slate-700/30 rounded-sm"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Career Roadmap */}
            <div className="bg-white dark:bg-[#162a2f] border border-gray-200 dark:border-[#224249] rounded-2xl p-6 md:p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">Career Roadmap</h3>
                <span className="text-sm text-slate-500 dark:text-[#90c1cb]">Estimated time: 6-12 months</span>
              </div>
              <div className="relative pl-4 md:pl-0">
                {/* Connecting Line */}
                <div className="absolute left-[19px] md:left-[23px] top-4 bottom-12 w-[2px] bg-gray-200 dark:bg-[#224249]"></div>
                
                {/* Step 1 */}
                <div className="relative flex gap-6 mb-10 group">
                  <div className="relative z-10 flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center text-[#102023] font-bold border-4 border-white dark:border-[#162a2f] shadow-[0_0_0_2px_rgba(13,204,242,0.3)]">
                    1
                  </div>
                  <div className="flex-1 bg-slate-50 dark:bg-[#102023] rounded-xl p-5 border border-transparent hover:border-primary/30 transition-all cursor-pointer">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-display text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Mathematics Fundamentals</h4>
                      <span className="text-xs px-2 py-1 rounded bg-slate-200 dark:bg-[#224249] text-slate-600 dark:text-gray-300">Foundation</span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-[#90c1cb] mb-3">Master Linear Algebra, Calculus, Probability &amp; Statistics essential for understanding ML algorithms.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400 bg-white dark:bg-[#162a2f] px-2 py-1 rounded border border-gray-200 dark:border-[#224249]">Linear Algebra</span>
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400 bg-white dark:bg-[#162a2f] px-2 py-1 rounded border border-gray-200 dark:border-[#224249]">Calculus</span>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative flex gap-6 mb-10 group">
                  <div className="relative z-10 flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center text-[#102023] font-bold border-4 border-white dark:border-[#162a2f] shadow-[0_0_0_2px_rgba(13,204,242,0.3)]">
                    2
                  </div>
                  <div className="flex-1 bg-slate-50 dark:bg-[#102023] rounded-xl p-5 border border-transparent hover:border-primary/30 transition-all cursor-pointer">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-display text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Python Mastery &amp; Data Science</h4>
                      <span className="text-xs px-2 py-1 rounded bg-slate-200 dark:bg-[#224249] text-slate-600 dark:text-gray-300">Technical</span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-[#90c1cb] mb-3">Learn Python programming and key libraries for data manipulation and visualization.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400 bg-white dark:bg-[#162a2f] px-2 py-1 rounded border border-gray-200 dark:border-[#224249]">Pandas</span>
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400 bg-white dark:bg-[#162a2f] px-2 py-1 rounded border border-gray-200 dark:border-[#224249]">NumPy</span>
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400 bg-white dark:bg-[#162a2f] px-2 py-1 rounded border border-gray-200 dark:border-[#224249]">Matplotlib</span>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative flex gap-6 group">
                  <div className="relative z-10 flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-200 dark:bg-[#224249] flex items-center justify-center text-slate-500 dark:text-gray-400 font-bold border-4 border-white dark:border-[#162a2f]">
                    3
                  </div>
                  <div className="flex-1 bg-slate-50 dark:bg-[#102023] rounded-xl p-5 border border-transparent hover:border-gray-300 dark:hover:border-[#224249] transition-all opacity-80 group-hover:opacity-100 cursor-pointer">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-display text-lg font-bold text-slate-900 dark:text-white">Deep Learning &amp; Deployment</h4>
                      <span className="text-xs px-2 py-1 rounded bg-slate-200 dark:bg-[#224249] text-slate-600 dark:text-gray-300">Advanced</span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-[#90c1cb] mb-3">Build neural networks and deploy models into production environments.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400 bg-white dark:bg-[#162a2f] px-2 py-1 rounded border border-gray-200 dark:border-[#224249]">TensorFlow</span>
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400 bg-white dark:bg-[#162a2f] px-2 py-1 rounded border border-gray-200 dark:border-[#224249]">Docker</span>
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400 bg-white dark:bg-[#162a2f] px-2 py-1 rounded border border-gray-200 dark:border-[#224249]">AWS SageMaker</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Salary Chart Section */}
            <div className="bg-white dark:bg-[#162a2f] border border-gray-200 dark:border-[#224249] rounded-2xl p-6 md:p-8">
              <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-6">Salary Distribution</h3>
              <div className="flex flex-col md:flex-row gap-8 items-end">
                <div className="w-full md:w-2/3 h-48 flex items-end justify-between px-2 gap-2 md:gap-4">
                  {/* Entry Level */}
                  <div className="flex flex-col items-center gap-2 w-full group">
                    <div className="relative w-full bg-slate-100 dark:bg-[#102023] rounded-t-lg h-32 overflow-hidden">
                      <div className="absolute bottom-0 w-full bg-primary/40 h-[60%] rounded-t-lg group-hover:bg-primary/60 transition-colors"></div>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-[#90c1cb]">Entry</span>
                    <span className="text-sm font-bold dark:text-white">$112k</span>
                  </div>
                  {/* Mid Level */}
                  <div className="flex flex-col items-center gap-2 w-full group">
                    <div className="relative w-full bg-slate-100 dark:bg-[#102023] rounded-t-lg h-32 overflow-hidden">
                      <div className="absolute bottom-0 w-full bg-primary h-[80%] rounded-t-lg shadow-[0_0_15px_rgba(13,204,242,0.3)]"></div>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-[#90c1cb]">Mid</span>
                    <span className="text-sm font-bold dark:text-white">$136k</span>
                  </div>
                  {/* Senior Level */}
                  <div className="flex flex-col items-center gap-2 w-full group">
                    <div className="relative w-full bg-slate-100 dark:bg-[#102023] rounded-t-lg h-32 overflow-hidden">
                      <div className="absolute bottom-0 w-full bg-primary/40 h-[95%] rounded-t-lg group-hover:bg-primary/60 transition-colors"></div>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-[#90c1cb]">Senior</span>
                    <span className="text-sm font-bold dark:text-white">$160k+</span>
                  </div>
                </div>
                <div className="w-full md:w-1/3 flex flex-col gap-3 p-4 bg-slate-50 dark:bg-[#102023] rounded-xl border border-gray-100 dark:border-[#224249]">
                  <h4 className="font-display font-bold text-slate-900 dark:text-white">Market Insights</h4>
                  <p className="text-sm text-slate-600 dark:text-[#90c1cb] leading-relaxed">
                    Demand for ML engineers is outpacing supply, driving salaries up by 15% in the last year alone. Remote opportunities are abundant.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar: Skills & Resources (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Required Skills */}
            <div className="bg-white dark:bg-[#162a2f] border border-gray-200 dark:border-[#224249] rounded-2xl p-6">
              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-4">Required Skills</h3>
              <div className="mb-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-[#90c1cb] mb-3">Technical</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 rounded-md text-sm font-medium bg-slate-100 dark:bg-[#224249] text-slate-700 dark:text-white border border-transparent hover:border-primary/50 transition-colors cursor-default">Python</span>
                  <span className="px-3 py-1.5 rounded-md text-sm font-medium bg-slate-100 dark:bg-[#224249] text-slate-700 dark:text-white border border-transparent hover:border-primary/50 transition-colors cursor-default">PyTorch</span>
                  <span className="px-3 py-1.5 rounded-md text-sm font-medium bg-slate-100 dark:bg-[#224249] text-slate-700 dark:text-white border border-transparent hover:border-primary/50 transition-colors cursor-default">SQL</span>
                  <span className="px-3 py-1.5 rounded-md text-sm font-medium bg-slate-100 dark:bg-[#224249] text-slate-700 dark:text-white border border-transparent hover:border-primary/50 transition-colors cursor-default">TensorFlow</span>
                  <span className="px-3 py-1.5 rounded-md text-sm font-medium bg-slate-100 dark:bg-[#224249] text-slate-700 dark:text-white border border-transparent hover:border-primary/50 transition-colors cursor-default">Git</span>
                  <span className="px-3 py-1.5 rounded-md text-sm font-medium bg-slate-100 dark:bg-[#224249] text-slate-700 dark:text-white border border-transparent hover:border-primary/50 transition-colors cursor-default">Kubernetes</span>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-[#90c1cb] mb-3">Soft Skills</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 rounded-md text-sm font-medium bg-primary/10 text-primary-dark dark:text-primary border border-primary/20">Problem Solving</span>
                  <span className="px-3 py-1.5 rounded-md text-sm font-medium bg-primary/10 text-primary-dark dark:text-primary border border-primary/20">Communication</span>
                  <span className="px-3 py-1.5 rounded-md text-sm font-medium bg-primary/10 text-primary-dark dark:text-primary border border-primary/20">Research</span>
                </div>
              </div>
            </div>

            {/* Resources List */}
            <div className="bg-white dark:bg-[#162a2f] border border-gray-200 dark:border-[#224249] rounded-2xl p-6">
              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-4">Curated Resources</h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-[#224249] transition-colors group" href="#">
                    <div className="w-10 h-10 rounded-lg bg-[#0056D2]/10 flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-[#0056D2] dark:text-[#4299E1]">school</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-slate-900 dark:text-white truncate group-hover:text-primary transition-colors">Andrew Ng's Deep Learning</p>
                      <p className="text-xs text-slate-500 dark:text-[#90c1cb]">Coursera Specialization</p>
                    </div>
                    <span className="material-symbols-outlined text-slate-400 text-lg">open_in_new</span>
                  </a>
                </li>
                <li>
                  <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-[#224249] transition-colors group" href="#">
                    <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-orange-500">menu_book</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-slate-900 dark:text-white truncate group-hover:text-primary transition-colors">Hugging Face Docs</p>
                      <p className="text-xs text-slate-500 dark:text-[#90c1cb]">Official Documentation</p>
                    </div>
                    <span className="material-symbols-outlined text-slate-400 text-lg">open_in_new</span>
                  </a>
                </li>
                <li>
                  <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-[#224249] transition-colors group" href="#">
                    <div className="w-10 h-10 rounded-lg bg-slate-800/10 dark:bg-white/10 flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-slate-800 dark:text-white">code</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-slate-900 dark:text-white truncate group-hover:text-primary transition-colors">ML Interview Prep</p>
                      <p className="text-xs text-slate-500 dark:text-[#90c1cb]">GitHub Repository</p>
                    </div>
                    <span className="material-symbols-outlined text-slate-400 text-lg">open_in_new</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Similar Roles */}
            <div className="bg-gradient-to-br from-[#224249] to-[#102023] rounded-2xl p-6 text-white border border-[#224249]">
              <h3 className="font-display text-lg font-bold mb-4">Explore Similar Roles</h3>
              <div className="flex flex-col gap-3">
                <a className="block p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-primary/30 transition-all" href="#">
                  <p className="font-bold text-sm">Data Scientist</p>
                  <p className="text-xs text-[#90c1cb] mt-1">Focuses more on analytics and statistics.</p>
                </a>
                <a className="block p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-primary/30 transition-all" href="#">
                  <p className="font-bold text-sm">NLP Engineer</p>
                  <p className="text-xs text-[#90c1cb] mt-1">Specialized in text and language models.</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-[#224249] bg-white dark:bg-[#102023] py-8">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 dark:text-[#90c1cb]">© 2023 AI Career Guide. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="text-sm text-slate-500 hover:text-primary dark:text-[#90c1cb] dark:hover:text-white transition-colors" href="#">Privacy Policy</a>
            <a className="text-sm text-slate-500 hover:text-primary dark:text-[#90c1cb] dark:hover:text-white transition-colors" href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}