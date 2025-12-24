import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#cbd5e1] dark:border-[#224249] bg-background-light/80 dark:bg-[#102023]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex size-8 items-center justify-center rounded-lg bg-primary/20 text-primary">
            <span className="material-symbols-outlined">explore</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-[#102023] dark:text-white">
            AI Career Compass
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link className="text-sm font-medium text-[#475569] hover:text-primary dark:text-[#90c1cb] dark:hover:text-white transition-colors" href="/">
            Home
          </Link>
          <Link className="text-sm font-medium text-[#475569] hover:text-primary dark:text-[#90c1cb] dark:hover:text-white transition-colors" href="/roles/machine-learning-engineer">
            Machine-Learning-Engineer
          </Link>
          <Link className="text-sm font-medium text-[#475569] hover:text-primary dark:text-[#90c1cb] dark:hover:text-white transition-colors" href="/resume">
            Resume Analyzer
          </Link>
          <Link className="text-sm font-medium text-[#475569] hover:text-primary dark:text-[#90c1cb] dark:hover:text-white transition-colors" href="/roadmap">
            Skill's Roadmap
          </Link>
           <Link className="text-sm font-medium text-[#475569] hover:text-primary dark:text-[#90c1cb] dark:hover:text-white transition-colors" href="#">
            Community
          </Link>
           <Link className="text-sm font-medium text-[#475569] hover:text-primary dark:text-[#90c1cb] dark:hover:text-white transition-colors" href="#">
            About Us
          </Link>
        </nav>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-4">
          <button className="hidden md:flex h-9 items-center justify-center rounded-lg border border-[#cbd5e1] dark:border-[#315f68] px-4 text-sm font-bold text-[#102023] dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
            Sign In
          </button>
          <Link href="/chat" className="flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-bold text-[#102023] shadow-lg shadow-primary/20 hover:bg-primary-dark transition-colors">
            Get Started
          </Link>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden flex size-9 items-center justify-center rounded-lg text-[#102023] dark:text-white">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>

      </div>
    </header>
  );
}