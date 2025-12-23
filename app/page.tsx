import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-[#cbd5e1] dark:border-[#224249] bg-background-light/80 dark:bg-[#102023]/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary/20 text-primary">
              <span className="material-symbols-outlined">explore</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-[#102023] dark:text-white">
              AI Career Compass
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a className="text-sm font-medium text-[#475569] hover:text-primary dark:text-[#90c1cb] dark:hover:text-white transition-colors" href="#">Home</a>
            <a className="text-sm font-medium text-[#475569] hover:text-primary dark:text-[#90c1cb] dark:hover:text-white transition-colors" href="#">Career Paths</a>
            <a className="text-sm font-medium text-[#475569] hover:text-primary dark:text-[#90c1cb] dark:hover:text-white transition-colors" href="#">Resources</a>
            <a className="text-sm font-medium text-[#475569] hover:text-primary dark:text-[#90c1cb] dark:hover:text-white transition-colors" href="#">About</a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="hidden md:flex h-9 items-center justify-center rounded-lg border border-[#cbd5e1] dark:border-[#315f68] px-4 text-sm font-bold text-[#102023] dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
              Sign In
            </button>
            <button className="flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-bold text-[#102023] shadow-lg shadow-primary/20 hover:bg-primary-dark transition-colors">
              Get Started
            </button>
            {/* Mobile Menu Button */}
            <button className="md:hidden flex size-9 items-center justify-center rounded-lg text-[#102023] dark:text-white">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
          {/* Background Gradient Effect */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[128px]"></div>
            <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-[#315f68]/30 blur-[128px]"></div>
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl flex flex-col items-center gap-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#315f68]/30 bg-[#182f34]/50 px-3 py-1 text-xs font-medium text-primary backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                New Roadmap 2024 Available
              </div>
              <h1 className="text-4xl font-black tracking-tighter text-[#102023] dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Find your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-400">AI career path</span>
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-[#475569] dark:text-[#90c1cb] sm:text-xl leading-relaxed">
                Navigate the complex world of Artificial Intelligence with personalized guidance. Discover roles that match your skills and ambition.
              </p>
              <div className="mt-4 flex flex-col sm:flex-row gap-4 w-full justify-center">
                <button className="h-12 px-8 rounded-lg bg-primary text-[#102023] text-base font-bold shadow-lg shadow-primary/25 hover:bg-primary-dark hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-[20px]">rocket_launch</span>
                  Start Assessment
                </button>
                <button className="h-12 px-8 rounded-lg border border-[#cbd5e1] dark:border-[#315f68] bg-white/50 dark:bg-[#182f34]/50 text-[#102023] dark:text-white text-base font-bold backdrop-blur-sm hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-200 flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-[20px]">play_circle</span>
                  Watch Demo
                </button>
              </div>
            </div>
            {/* Decorative Image/Graphic */}
            <div className="mt-16 sm:mt-24 relative mx-auto w-full max-w-5xl">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[#cbd5e1] dark:border-[#315f68] shadow-2xl bg-[#102023]">
                {/* Placeholder for abstract UI dashboard or tech visualization */}
                <div 
                  className="absolute inset-0 bg-cover bg-center" 
                  data-alt="Abstract futuristic blue data visualization mesh network" 
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCtHI9eb6AijLD5llg4d-Y7uDBJfjcDnrwg4OaH1UPNhtiyviWQ7UdXxNftQ5UJp3a-sGqpt0YeC9iJyut1nAH9OVLdsOroHiqNzijKY4NLbs5eda3RvrR3n-sAZ1jRBrfEIgmgEXXtOxGMeEG1V4UfSe-hsMkyDvlSNDDzlDQEXF7tjzK5KwYRTsX7rUZd7HML5AV55BipV-fuwggW_w8WWOGq1qS41FZNHQ5aqImAsgjYZIxEayvZ6b9AIyPFEqC2qK9ku7eL2vU")', opacity: 0.6 }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#102023] via-transparent to-transparent"></div>
                {/* Overlay Content Mockup */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 flex flex-col md:flex-row items-end justify-between gap-6">
                  <div className="glass-panel p-6 rounded-xl max-w-md w-full">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-2 w-2 rounded-full bg-green-400"></div>
                      <p className="text-xs font-bold text-primary uppercase tracking-wider">Top Match</p>
                    </div>
                    <h3 className="text-white text-xl font-bold mb-1">Machine Learning Engineer</h3>
                    <div className="w-full bg-[#102023] rounded-full h-1.5 mt-2">
                      <div className="bg-primary h-1.5 rounded-full" style={{ width: "92%" }}></div>
                    </div>
                    <div className="flex justify-between text-xs text-[#90c1cb] mt-1">
                      <span>Skill Match</span>
                      <span>92%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white dark:bg-[#0d1a1d] transition-colors">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tight text-[#102023] dark:text-white sm:text-4xl">
                  Explore Popular Roles
                </h2>
                <p className="mt-4 text-lg text-[#475569] dark:text-[#90c1cb]">
                  The AI industry is vast. Discover which specialization fits your unique mix of skills and interests.
                </p>
              </div>
              <a className="hidden md:flex items-center gap-2 text-primary font-bold hover:underline" href="#">
                View all paths <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div className="group relative flex flex-col justify-between rounded-xl border border-[#cbd5e1] dark:border-[#315f68] bg-[#f8fafc] dark:bg-[#182f34] p-6 transition-all hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-primary/5 hover:border-primary/50">
                <div>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-[#315f68]/30 text-blue-600 dark:text-primary">
                    <span className="material-symbols-outlined">memory</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#102023] dark:text-white group-hover:text-primary transition-colors">ML Engineer</h3>
                  <p className="mt-2 text-sm text-[#475569] dark:text-[#90c1cb] leading-relaxed">
                    Design, build, and deploy scalable machine learning models into production environments.
                  </p>
                </div>
                <div className="mt-6 flex items-center text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                </div>
              </div>
              {/* Card 2 */}
              <div className="group relative flex flex-col justify-between rounded-xl border border-[#cbd5e1] dark:border-[#315f68] bg-[#f8fafc] dark:bg-[#182f34] p-6 transition-all hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-primary/5 hover:border-primary/50">
                <div>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-[#315f68]/30 text-purple-600 dark:text-purple-400">
                    <span className="material-symbols-outlined">analytics</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#102023] dark:text-white group-hover:text-primary transition-colors">Data Scientist</h3>
                  <p className="mt-2 text-sm text-[#475569] dark:text-[#90c1cb] leading-relaxed">
                    Extract meaningful insights from complex data sets to solve challenging business problems.
                  </p>
                </div>
                <div className="mt-6 flex items-center text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                </div>
              </div>
              {/* Card 3 */}
              <div className="group relative flex flex-col justify-between rounded-xl border border-[#cbd5e1] dark:border-[#315f68] bg-[#f8fafc] dark:bg-[#182f34] p-6 transition-all hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-primary/5 hover:border-primary/50">
                <div>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100 dark:bg-[#315f68]/30 text-teal-600 dark:text-teal-400">
                    <span className="material-symbols-outlined">deployed_code</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#102023] dark:text-white group-hover:text-primary transition-colors">MLOps Engineer</h3>
                  <p className="mt-2 text-sm text-[#475569] dark:text-[#90c1cb] leading-relaxed">
                    Bridge the gap between ML model development and reliable operational deployment.
                  </p>
                </div>
                <div className="mt-6 flex items-center text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                </div>
              </div>
              {/* Card 4 */}
              <div className="group relative flex flex-col justify-between rounded-xl border border-[#cbd5e1] dark:border-[#315f68] bg-[#f8fafc] dark:bg-[#182f34] p-6 transition-all hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-primary/5 hover:border-primary/50">
                <div>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-rose-100 dark:bg-[#315f68]/30 text-rose-600 dark:text-rose-400">
                    <span className="material-symbols-outlined">policy</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#102023] dark:text-white group-hover:text-primary transition-colors">AI Ethics Specialist</h3>
                  <p className="mt-2 text-sm text-[#475569] dark:text-[#90c1cb] leading-relaxed">
                    Ensure AI systems are developed and deployed responsibly, fairly, and safely.
                  </p>
                </div>
                <div className="mt-6 flex items-center text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-center md:hidden">
              <a className="flex items-center gap-2 text-primary font-bold hover:underline" href="#">
                View all paths <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </div>
        </section>

        {/* Value Prop / Info Section */}
        <section className="py-16 border-t border-[#cbd5e1] dark:border-[#224249]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-gradient-to-br from-[#182f34] to-[#102023] p-8 md:p-12 lg:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 h-64 w-64 rounded-full bg-primary/10 blur-[80px]"></div>
              <div className="absolute bottom-0 left-0 -mb-10 -ml-10 h-64 w-64 rounded-full bg-secondary/20 blur-[80px]"></div>
              <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
                <div className="flex-1 space-y-6">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Not sure where to start?
                  </h2>
                  <p className="text-lg text-[#90c1cb]">
                    Our AI-driven assessment analyzes your background, coding preferences, and career goals to suggest the perfect role for you.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-white">
                      <span className="material-symbols-outlined text-primary">check_circle</span>
                      <span>Takes less than 5 minutes</span>
                    </li>
                    <li className="flex items-center gap-3 text-white">
                      <span className="material-symbols-outlined text-primary">check_circle</span>
                      <span>Personalized learning roadmap included</span>
                    </li>
                    <li className="flex items-center gap-3 text-white">
                      <span className="material-symbols-outlined text-primary">check_circle</span>
                      <span>Salary insights for your region</span>
                    </li>
                  </ul>
                  <div className="pt-4">
                    <button className="h-12 px-8 rounded-lg bg-primary text-[#102023] text-base font-bold shadow-lg hover:bg-white transition-colors">
                      Take the Quiz
                    </button>
                  </div>
                </div>
                <div className="flex-1 w-full flex justify-center lg:justify-end">
                  {/* Decorative Chart Graphic */}
                  <div className="glass-panel w-full max-w-md rounded-xl p-6 border border-[#315f68]">
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="text-white font-bold">Your Potential Path</h4>
                      <span className="material-symbols-outlined text-[#90c1cb]">more_horiz</span>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary border border-primary/50 font-bold">1</div>
                        <div className="flex-1">
                          <div className="h-2 w-24 bg-[#315f68] rounded mb-1"></div>
                          <div className="h-1.5 w-16 bg-[#224249] rounded"></div>
                        </div>
                        <span className="material-symbols-outlined text-green-400 text-sm">check</span>
                      </div>
                      <div className="w-0.5 h-6 bg-[#315f68] ml-5"></div>
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary border border-primary/50 font-bold">2</div>
                        <div className="flex-1">
                          <div className="h-2 w-32 bg-[#315f68] rounded mb-1"></div>
                          <div className="h-1.5 w-20 bg-[#224249] rounded"></div>
                        </div>
                        <span className="material-symbols-outlined text-green-400 text-sm">check</span>
                      </div>
                      <div className="w-0.5 h-6 bg-[#315f68] ml-5"></div>
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-white text-[#102023] flex items-center justify-center font-bold shadow-[0_0_15px_rgba(13,204,242,0.5)]">3</div>
                        <div className="flex-1">
                          <div className="h-2 w-28 bg-white/80 rounded mb-1"></div>
                          <div className="h-1.5 w-12 bg-white/40 rounded"></div>
                        </div>
                        <span className="text-xs text-white font-medium px-2 py-0.5 rounded bg-primary/20 border border-primary/50">Current</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#cbd5e1] dark:border-[#224249] bg-background-light dark:bg-[#102023] pt-16 pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5 mb-12">
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex size-6 items-center justify-center rounded bg-primary/20 text-primary">
                  <span className="material-symbols-outlined text-sm">explore</span>
                </div>
                <span className="text-lg font-bold text-[#102023] dark:text-white">AI Career Compass</span>
              </div>
              <p className="text-sm text-[#475569] dark:text-[#90c1cb] max-w-xs mb-6">
                Helping the next generation of engineers, scientists, and ethicists find their place in the AI revolution.
              </p>
              <div className="flex gap-4">
                <a className="text-[#90c1cb] hover:text-primary transition-colors" href="#">
                  <span className="material-symbols-outlined">alternate_email</span>
                </a>
                <a className="text-[#90c1cb] hover:text-primary transition-colors" href="#">
                  <span className="material-symbols-outlined">public</span>
                </a>
                <a className="text-[#90c1cb] hover:text-primary transition-colors" href="#">
                  <span className="material-symbols-outlined">rss_feed</span>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#102023] dark:text-white mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-[#475569] dark:text-[#90c1cb]">
                <li><a className="hover:text-primary transition-colors" href="#">Career Assessment</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Role Guides</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Salary Data</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Company Match</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#102023] dark:text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-[#475569] dark:text-[#90c1cb]">
                <li><a className="hover:text-primary transition-colors" href="#">Blog</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Success Stories</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Learning Paths</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#102023] dark:text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-[#475569] dark:text-[#90c1cb]">
                <li><a className="hover:text-primary transition-colors" href="#">About Us</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Contact</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between border-t border-[#cbd5e1] dark:border-[#224249] pt-8 gap-4">
            <p className="text-sm text-[#475569] dark:text-[#567a82]">© 2024 AI Career Compass. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2 text-sm text-[#475569] dark:text-[#567a82]">
                <span className="h-2 w-2 rounded-full bg-green-500"></span>
                Systems Operational
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}