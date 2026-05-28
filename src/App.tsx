import { useState, useEffect } from "react";
import { 
  Sparkles, 
  GraduationCap, 
  Award, 
  BookOpen, 
  Compass, 
  Heart, 
  Calendar, 
  Target, 
  CheckCircle, 
  ChevronUp, 
  ChevronRight, 
  Check, 
  User, 
  ClipboardList, 
  ArrowRight,
  TrendingUp,
  Info,
  Menu,
  X
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";


export default function App() {
  // Navigation active tab tracking based on scroll
  const [activeSection, setActiveSection] = useState<string>("intro");
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);


  // Track scroll position to show back-to-top and highlight current menu item
  useEffect(() => {
    const handleScroll = () => {
      // Back to top visibility
      setShowScrollTop(window.scrollY > 400);

      // Section highlighters
      const sections = [
        "intro", 
        "profile", 
        "development-process", 
        "workshop-evaluation", 
        "reflection"
      ];
      
      const scrollPos = window.scrollY + 200;

      for (let i = 0; i < sections.length; i++) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.offsetTop - 70; // accounts for the sticky navbar height
      window.scrollTo({
        top: topOffset,
        behavior: "smooth"
      });
    }
  };


  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  };

  return (
    <div className="min-h-screen bg-cream-bg text-gray-800 font-sans selection:bg-rose-100 selection:text-pink-800 antialiased relative overflow-x-clip">
      
      {/* Decorative Vector SVG Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-b from-pink-100/40 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-[30vh] -left-20 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-[120vh] right-[-10vw] w-96 h-96 bg-pink-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-[10vh] left-[-5vw] w-[400px] h-[400px] bg-red-100/25 rounded-full blur-3xl -z-10 pointer-events-none animate-pulse" />

      {/* Elegant Line-Art Floral SVGs */}
      <div className="absolute top-16 right-4 lg:right-20 text-pink-200/40 mix-blend-multiply opacity-70 -z-10 pointer-events-none">
        <svg width="240" height="320" viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 140 C50 140, 20 100, 30 70 C35 55, 15 40, 25 20 C30 10, 45 45, 50 60 C55 45, 70 10, 75 20 C85 40, 65 55, 70 70 C80 100, 50 140, 50 140 Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M30 70 C25 65, 10 65, 8 50 C6 35, 20 40, 28 55" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
          <path d="M70 70 C75 65, 90 65, 92 50 C94 35, 80 40, 72 55" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
          <circle cx="50" cy="140" r="2" fill="currentColor"/>
        </svg>
      </div>

      <div className="absolute bottom-40 left-4 lg:left-16 text-pink-200/40 mix-blend-multiply opacity-60 -z-10 pointer-events-none">
        <svg width="180" height="240" viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 10 C30 30, 20 80, 50 110 C60 120, 80 140, 90 145" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M34 50 C45 40, 70 45, 60 25 C50 10, 25 30, 34 50 Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
          <path d="M46 78 C60 70, 80 80, 75 60 C70 45, 50 60, 46 78 Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
        </svg>
      </div>

      {/* HEADER SECTION / FLOATING HERO ELEMENT */}
      <header id="intro" className="relative min-h-[90vh] flex flex-col justify-between pt-6 pb-12 px-4 lg:px-8 border-b border-pink-100/50">
        
        {/* Upper Brand Nav bar */}
        <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row justify-between items-center gap-4 z-20">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-pink-100 flex items-center justify-center border border-pink-200 text-pink-600 font-cinzel font-semibold shadow-sm">
              NL
            </div>
            <div>
              <span className="font-cinzel tracking-widest text-[#4A3538] font-bold text-base block">NGUYEN THI LAN NHI</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={handleCopyLink}
              className="text-xs tracking-wider flex items-center gap-2 text-[#4A3538] bg-white hover:bg-pink-50/50 rounded-full px-4 py-2 border border-pink-100 shadow-sm transition-all font-sans font-medium hover:border-pink-300"
            >
              <Check size={13} className={isCopied ? "text-green-500 scale-125" : "text-[#4A3538]"} />
              {isCopied ? "Link Copied!" : "Share Link"}
            </button>
          </div>
        </div>

        {/* Hero Central Content */}
        <div className="max-w-7xl mx-auto w-full flex-grow flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 my-8 z-10">
          
          <div className="flex-1 text-center lg:text-left space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider bg-pink-100/70 text-pink-700 border border-pink-200/50 font-sans">
              <Sparkles size={12} className="text-pink-500" />
              PROFESSIONAL TEACHING PORTFOLIO
            </span>
            
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#4A3538] leading-tight font-medium">
              Ensuring Understanding <br />
              <span className="italic text-pink-600 inline-block mt-1">for All.</span>
            </h1>
            
            {/* Short highlight statement */}
            <p className="text-[#6B5256] text-base sm:text-lg max-w-2xl font-light leading-relaxed font-sans">
              Welcome to the professional portfolio of <strong className="font-semibold text-[#4A3538]">Nguyen Thi Lan Nhi</strong>. This academic platform records my professional growth, core teaching philosophy, student-centric methodologies, and classroom reflection work from my journey preparing to lead tomorrow's English language learners.
            </p>

            <div className="w-full h-[1px] bg-gradient-to-r from-pink-200/70 to-transparent my-6" />

            {/* Teaching Philosophy Callout block */}
            <div className="bg-white/80 backdrop-blur-sm border-l-4 border-pink-400 p-5 rounded-r-3xl shadow-sm space-y-2">
              <p className="text-xs uppercase font-semibold text-pink-700 font-sans tracking-widest flex items-center gap-2">
                <Heart size={14} className="fill-pink-400 text-pink-400" /> My Core Philosophy
              </p>
              <p className="italic text-[#4A3538] font-serif text-lg font-medium leading-relaxed">
                “Ensuring understanding for all.”
              </p>
              <p className="text-xs text-stone-500 leading-relaxed max-w-xl">
                Every student has different learning speeds and abilities; the role of a teacher is to provide appropriate support and guidance for all students so that no one falls behind.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <button 
                onClick={() => scrollToSection("profile")}
                className="px-6 py-3 rounded-full bg-pink-600 hover:bg-pink-700 text-white font-medium text-sm tracking-wider flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
              >
                Explore Portfolio
                <ArrowRight size={15} />
              </button>
            </div>
          </div>

          {/* Decorative Vector Portrait Box */}
          <div className="w-full max-w-[360px] lg:max-w-[420px] shrink-0 mt-6 lg:mt-0">
            <div className="relative p-6 bg-white/90 rounded-[40px] border border-pink-100 shadow-xl shadow-pink-100/30">
              
              {/* Profile Card Inner */}
              <div className="relative w-full aspect-[4/5] rounded-[30px] overflow-hidden bg-gradient-to-tr from-rose-50 via-pink-100/40 to-pink-50 border border-pink-100 flex flex-col justify-between p-6">
                
                {/* Vintage line decorations */}
                <div className="absolute inset-4 border border-pink-200/40 rounded-[22px] pointer-events-none" />
                
                {/* SVG Callout inside image area */}
                <div className="flex justify-between items-start z-10">
                  <span className="text-[10px] font-mono tracking-widest text-[#C29B9F] uppercase bg-white/70 px-3 py-1 rounded-full border border-pink-100/50">
                    PORTFOLIO ENTRY
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-pink-500 shadow-sm border border-pink-100">
                    <GraduationCap size={15} />
                  </div>
                </div>

                {/* Elegant SVG line art acting as teacher placeholder */}
                <div className="absolute inset-0 flex items-center justify-center opacity-95">
                  <svg width="220" height="220" viewBox="0 0 120 120" className="text-pink-450/70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Abstract water-color pink blob */}
                    <circle cx="62" cy="55" r="40" fill="#FFF0F2" />
                    <circle cx="50" cy="65" r="28" fill="#FCE4E6" />
                    
                    {/* Face / Body minimalist line sketch */}
                    <path d="M60 40 C60 40, 52 32, 45 42 C40 48, 48 55, 52 65 C55 72, 58 78, 58 85 L62 85 C62 78, 65 72, 68 65 C72 55, 80 48, 75 42 C68 32, 60 40, 60 40 Z" stroke="#AB717A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    {/* Glasses */}
                    <path d="M51 49 C54 49, 56 47, 56 45 C56 43, 54 41, 51 41 M69 49 C66 49, 64 47, 64 45 C64 43, 66 41, 69 41" stroke="#BA858D" strokeWidth="1" strokeLinecap="round"/>
                    <line x1="56" y1="45" x2="64" y2="45" stroke="#BA858D" strokeWidth="1"/>
                    {/* Hair outline & neck */}
                    <path d="M42 55 C38 68, 45 80, 48 85 C42 85, 38 78, 38 65 C38 45, 48 30, 60 30 C72 30, 82 45, 82 65 C82 78, 78 85, 72 85 C75 80, 82 68, 78 55" stroke="#AB717A" strokeWidth="1" strokeLinecap="round"/>
                    {/* Book icon */}
                    <path d="M48 95 H72 C74 95, 75 96, 75 98 C75 100, 74 101, 72 101 H48 C46 101, 45 100, 45 98 C45 96, 46 95, 48 95 Z" fill="#BA858D" stroke="#AB717A" strokeWidth="0.8"/>
                    <path d="M50 95 L50 85 M70 95 L70 85" stroke="#AB717A" strokeWidth="0.8"/>
                  </svg>
                </div>

                <div className="z-10 space-y-1 mt-auto">
                  <h3 className="font-serif text-lg font-semibold text-[#4A3538] leading-tight text-center">
                    Nguyen Thi Lan Nhi
                  </h3>
                </div>
              </div>

              {/* Decorative side stamp / Badge */}
              <div className="absolute -bottom-6 -right-6 bg-[#C29B9F] text-white p-4 rounded-3xl shadow-lg border border-white flex flex-col justify-center items-center text-center w-24 h-24 rotate-3">
                <span className="text-[10px] uppercase tracking-widest font-mono text-pink-100 font-bold">IELTS</span>
                <span className="font-serif text-2xl font-bold leading-none my-1">8.0</span>
                <span className="text-[9px] uppercase tracking-wider text-pink-100 font-medium whitespace-nowrap">Career Goal</span>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll down indicator */}
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center text-[11px] uppercase tracking-widest text-[#B38F97] z-10">
          <div className="flex gap-4 items-center">
            <span className="w-12 h-[1px] bg-pink-200" />
            <span>AI Studio Dev Preview 2026</span>
          </div>
          <button 
            onClick={() => scrollToSection("profile")}
            className="flex items-center gap-2 hover:text-[#4A3538] transition-colors"
          >
            Scroll Down
            <ChevronRight size={12} className="rotate-90 text-[#4A3538]" />
          </button>
        </div>

      </header>

      {/* FLOATING / STICKY SUB-NAVBAR MENU */}
      <nav className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-pink-100/50 py-3.5 px-4 z-50 transition-all shadow-md relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          <div 
            onClick={() => {
              scrollToSection("intro");
              setMobileMenuOpen(false);
            }}
            className="flex items-center gap-2 cursor-pointer select-none group shrink-0"
          >
            <div className="w-6 h-6 rounded-full bg-pink-200 flex items-center justify-center font-cinzel text-[10px] text-pink-700 bg-pink-100 group-hover:bg-pink-600 group-hover:text-white transition-colors duration-300">
              N
            </div>
            <span className="font-serif text-xs font-semibold tracking-wider text-[#4A3538] group-hover:text-pink-600 transition-colors">
              Nhi Nguyen's Portfolio
            </span>
          </div>

          {/* Navigation Links for Section Browsing - Desktop Only */}
          <div className="hidden lg:flex items-center gap-1.5 overflow-x-auto select-none no-scrollbar py-1">
            <button 
              onClick={() => scrollToSection("profile")}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold font-sans tracking-wide transition-all ${activeSection === "profile" ? "bg-pink-100 text-pink-700 font-bold border border-pink-200/50" : "text-[#7B6165] hover:text-pink-600 hover:bg-pink-50/50"}`}
            >
              1. Professional Profile
            </button>
            <button 
              onClick={() => scrollToSection("development-process")}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold font-sans tracking-wide transition-all ${activeSection === "development-process" ? "bg-pink-100 text-pink-700 font-bold border border-pink-200/50" : "text-[#7B6165] hover:text-pink-600 hover:bg-pink-50/50"}`}
            >
              2. Development Process
            </button>
            <button 
              onClick={() => scrollToSection("workshop-evaluation")}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold font-sans tracking-wide transition-all ${activeSection === "workshop-evaluation" ? "bg-pink-100 text-pink-700 font-bold border border-pink-200/50" : "text-[#7B6165] hover:text-pink-600 hover:bg-pink-50/50"}`}
            >
              3. Workshop Evaluation
            </button>
            <button 
              onClick={() => scrollToSection("reflection")}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold font-sans tracking-wide transition-all ${activeSection === "reflection" ? "bg-pink-100 text-pink-700 font-bold border border-pink-200/50" : "text-[#7B6165] hover:text-pink-600 hover:bg-pink-50/50"}`}
            >
              4. Reflection
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-pink-750 text-pink-700 bg-pink-50 hover:bg-pink-100 rounded-full border border-pink-200/60 transition-all flex items-center justify-center"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
          
        </div>

        {/* MOBILE MENU DROPDOWN LIST VIA ANIMATEPRESENCE */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileMenuOpen(false)}
                className="fixed inset-0 bg-[#4A3A3B]/40 backdrop-blur-sm z-40 lg:hidden"
                style={{ top: "100%" }}
              />

              {/* Mobile Menu Content Container */}
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute top-full left-0 right-0 bg-white border-b border-pink-100 shadow-lg px-4 py-5 z-50 lg:hidden flex flex-col gap-2 font-sans rounded-b-2xl"
              >
                <div className="text-stone-400 text-[10px] tracking-widest uppercase font-mono px-3 mb-1">
                  Table of Contents
                </div>
                
                <button 
                  onClick={() => {
                    scrollToSection("profile");
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all ${activeSection === "profile" ? "bg-pink-100 text-pink-700 font-bold border border-pink-200/50" : "text-[#7B6165] hover:text-pink-600 hover:bg-pink-50/50"}`}
                >
                  1. Professional Profile
                </button>
                
                <button 
                  onClick={() => {
                    scrollToSection("development-process");
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all ${activeSection === "development-process" ? "bg-pink-100 text-pink-700 font-bold border border-pink-200/50" : "text-[#7B6165] hover:text-pink-600 hover:bg-pink-50/50"}`}
                >
                  2. Development Process
                </button>
                
                <button 
                  onClick={() => {
                    scrollToSection("workshop-evaluation");
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all ${activeSection === "workshop-evaluation" ? "bg-pink-100 text-pink-700 font-bold border border-pink-200/50" : "text-[#7B6165] hover:text-pink-600 hover:bg-pink-50/50"}`}
                >
                  3. Workshop Evaluation
                </button>
                
                <button 
                  onClick={() => {
                    scrollToSection("reflection");
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all ${activeSection === "reflection" ? "bg-pink-100 text-pink-700 font-bold border border-pink-200/50" : "text-[#7B6165] hover:text-pink-600 hover:bg-pink-50/50"}`}
                >
                  4. Reflection
                </button>

                <div className="h-px bg-pink-100/50 my-1" />

                <div className="flex items-center justify-between px-3 pt-1">
                  <span className="text-[9px] text-stone-400 font-mono">PORTFOLIO WORKSHOP</span>
                  <span className="text-[9px] text-pink-600 font-semibold font-mono">ENG v1.0</span>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>

      {/* MAIN ACADEMIC CONTENTS */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-16 space-y-24 z-10 position-relative">
        
        {/* Comment block to user indicating the original document structure is preserved perfectly */}
        {/*
          NOTE TO CODE EDITOR & USER:
          The following section implements section "1. Professional Profile" verbatim.
          Paragraph boundaries are respected precisely, maintaining every original word.
        */}

        {/* SECTION 1: PROFESSIONAL PROFILE */}
        <section id="profile" className="scroll-mt-24 space-y-8 animate-fade-in-up">
          
          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-pink-100 text-pink-600 border border-pink-200 mb-2">
              <User size={20} />
            </div>
            <span className="block text-xs uppercase tracking-widest text-[#C29B9F] font-mono font-bold">Section 1</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#4A3538] font-semibold leading-tight capitalize">
              1. Professional Profile
            </h2>
            <div className="w-16 h-0.5 bg-pink-300 mx-auto rounded" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            
            {/* Quick Metadata Panel for the Essay Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white/90 rounded-3xl p-6 border border-pink-100 shadow-sm space-y-6">
                <h3 className="font-serif text-lg text-[#4A3538] font-bold border-b border-pink-100 pb-3">
                  Summary & Core Highlights
                </h3>
                
                <div className="space-y-4 font-sans">
                  
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-pink-50 shrink-0 flex items-center justify-center text-pink-500">
                      <GraduationCap size={16} />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[#7B6165]">Current State</h4>
                      <p className="text-xs text-[#5c4448] mt-0.5">English Language Teacher preparing for English center career.</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-pink-50 shrink-0 flex items-center justify-center text-pink-500">
                      <Award size={16} />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[#7B6165]">Experience</h4>
                      <p className="text-xs text-[#5c4448] mt-0.5">Ninth-grade High School Prep tutor + 7 months Teaching Assistant.</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-pink-50 shrink-0 flex items-center justify-center text-pink-500">
                      <Target size={16} />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[#7B6165]">Development Goals</h4>
                      <p className="text-xs text-[#5c4448] mt-0.5">IELTS 8.0, IELTS Teaching placement, Master's Degree.</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-pink-50 shrink-0 flex items-center justify-center text-pink-500">
                      <BookOpen size={16} />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[#7B6165]">Center Dream Scope</h4>
                      <p className="text-xs text-[#5c4448] mt-0.5">4 to 8 students per class to guarantee focused support.</p>
                    </div>
                  </div>

                </div>

                <div className="pt-2">
                  <div className="bg-pink-50/50 rounded-2xl p-4 border border-pink-100 text-center">
                    <span className="text-xs text-[#7B6165] font-serif italic">"Ensuring understanding for all."</span>
                  </div>
                </div>

              </div>

              {/* Vector design accents */}
              <div className="hidden lg:block bg-gradient-to-br from-pink-100/30 to-pink-50/20 rounded-3xl p-6 border border-dashed border-pink-200/50 text-center space-y-2">
                <p className="text-xs font-serif text-[#C29B9F] italic">"My students made considerable progress and consistently received positive feedback..."</p>
                <div className="flex justify-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-205 bg-pink-200" />
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-300" />
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-200" />
                </div>
              </div>
            </div>

            {/* Verbatim text blocks */}
            <div className="lg:col-span-3 space-y-8 text-justify">
              
              {/* SUBSECTION 1.1 */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-pink-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-pink-100/10 rounded-bl-full -z-0" />
                
                <h3 className="font-serif text-2xl text-[#4A3538] font-semibold leading-snug mb-5">
                  1.1. Teacher Identity
                </h3>

                <div className="text-[#4E3E41] leading-relaxed space-y-5 text-sm sm:text-base font-light">
                  <p>
                    My name is <strong className="font-medium text-[#4A3538]">Nguyen Thi Lan Nhi</strong>, and I am about to graduate in the next few months and currently preparing for my professional career as an English teacher. Although this is just the beginning of my teaching journey, my experiences as both a tutor and a teaching assistant have allowed me to recognize my teaching philosophy and preferences.
                  </p>
                  <p>
                    Last year, I tutored a ninth-grade student to consolidate her English and help her prepare for the High School Entrance Exam. To support her, I prepared personalized lesson plans and exercises based on her weaknesses and learning needs. After one month, she eventually gained admission to her dream high school. This experience became a source of motivation for me because I realized I had effectively delivered essential knowledge for my student.
                  </p>
                  <p>
                    After that, I worked as a Teaching Assistant at an English Center for seven months. This was a useful experience for me as it allowed me to develop my teaching skills, including classroom management, interaction with students, and understanding different learning styles. More importantly, it helped me recognize my teaching philosophy: <span className="bg-pink-50/70 border-b border-pink-300 text-pink-850 px-1 font-medium">“Ensuring understanding for all.”</span> I strongly believe that every student has different learning speeds and abilities, so the role of a teacher is to provide appropriate support and guidance for all students so that no one falls behind in the learning process. 
                  </p>
                  <p>
                    My teaching philosophy was reflected by the fact that I often spent break time re-explaining lessons to students, especially those who needed extra support. I also provided additional exercises and communicated with parents to seek cooperation to ensure the best effective learning experience for the students. As a result, my students made considerable progress and that I consistently received positive feedback from the parents fostered me to try harder.
                  </p>
                </div>
              </div>

              {/* SUBSECTION 1.2 */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-pink-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-pink-100/10 rounded-bl-full -z-0" />
                
                <h3 className="font-serif text-2xl text-[#4A3538] font-semibold leading-snug mb-5">
                  1.2. Goal for Development
                </h3>

                <div className="text-[#4E3E41] leading-relaxed space-y-5 text-sm sm:text-base font-light">
                  <p>
                    In the future, my goal is to open a small-scale English center, aiming at IELTS, with around four to eight students each class because I desire to carefully monitor my students’ learning progress. I am particularly interested in teaching IELTS because I enjoy exam-oriented teaching and academic learner development. I find it greatly motivating when my students make gradual progress, and especially when they achieve their target scores. 
                  </p>
                  <p>
                    In addition, I believe I work more effectively with adolescent and young adult learners because they are generally more aware of their learning responsibilities. As a result, I can focus deeply on delivering academic knowledge and giving feedback for improvements rather than wasting a significant amount of time on behavioral and classroom management. I believe this teaching environment is particularly suitable for my teaching philosophy and preferences.
                  </p>
                  <p>
                    To achieve this ultimate goal, I believe I need to improve several professional development areas, including subject-matter knowledge, pedagogical expertise, and career advancement. Firstly, my current priority is to strengthen my subject-matter knowledge by achieving an overall <strong className="text-pink-700 font-semibold">IELTS score of 8.0</strong>, which is an obligatory professional requirement for an IELTS teacher. Therefore, I am currently studying IELTS at an English center and spending a significant amount of time analyzing different IELTS question types and effective ways to approach them.
                  </p>
                  <p>
                    At the same time, I also want to develop my pedagogical expertise by applying to become an IELTS Teaching Assistant. Through this experience, I believe that I can observe IELTS teaching procedures, observe teacher feedback techniques, understand common learner difficulties, and become more familiar with IELTS classroom practices. This practical experience will help me gradually develop more effective teaching strategies, classroom management skills, and learner support techniques which are extremely important to operate an effective classroom.
                  </p>
                  <p>
                    After gaining sufficient teaching skills and subject-matter knowledge, I desire to apply for an IELTS teaching position in order to better strengthen my teaching expertise and become more accustomed to managing IELTS classes. In the long term, as I know that operating an IELTS-oriented English center also requires the ability to design logical and systematic lesson plans, syllabi, and teaching materials, I hope to pursue a master’s degree related to this field to further develop my professional knowledge and support my future career advancement.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </section>

        {/* SECTION 2: DEVELOPMENT PROCESS */}
        <section id="development-process" className="scroll-mt-24 space-y-10">
          
          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-pink-100 text-pink-600 border border-pink-200 mb-2">
              <Compass size={20} />
            </div>
            <span className="block text-xs uppercase tracking-widest text-[#C29B9F] font-mono font-bold">Section 2</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#4A3538] font-semibold leading-tight capitalize">
              2. Development Process
            </h2>
            <div className="w-16 h-0.5 bg-pink-300 mx-auto rounded" />
          </div>

          <div className="bg-white rounded-[32px] border border-pink-100 shadow-md overflow-hidden">
            
            {/* Visual Header / Banner for Development Process */}
            <div className="bg-gradient-to-r from-pink-50 via-rose-100/30 to-pink-100/50 px-6 sm:px-10 py-8 border-b border-pink-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-mono tracking-widest text-pink-700 bg-white px-2.5 py-1 rounded-full border border-pink-200">Reflective Journey</span>
                <p className="text-[#4A3538] font-serif text-xl font-bold">Teaching Assistant Realizations on Sustainability</p>
              </div>
              <div className="flex gap-2">
                <span className="text-xs bg-white text-[#7B6165] px-3.5 py-1.5 rounded-full font-mono border border-pink-100">Observation Report</span>
                <span className="text-xs bg-white text-pink-700 px-3.5 py-1.5 rounded-full font-mono border border-pink-100 font-medium">Reflective Analysis</span>
              </div>
            </div>

            <div className="p-6 sm:p-10 space-y-12">
              
              {/* SUBSECTION 2.1 */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-24">
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl text-[#4A3538] font-bold">2.1. Observation Report</h3>
                  </div>
                  
                  {/* Observation Summary card */}
                  <div className="bg-[#FFF8F9] rounded-2xl p-5 border border-pink-150 border-pink-100 space-y-3">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#4A3538]">A Tale of Two Teachers:</h4>
                    <div className="space-y-2.5 text-xs">
                      <div className="flex items-start gap-2">
                        <span className="text-pink-600 font-bold">T1:</span>
                        <p className="text-[#5C4448]">Friendly, entertainment-heavy, extremely active interaction. Output: High student joy but teacher burnout & loose discipline over time.</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-pink-600 font-bold">T2:</span>
                        <p className="text-[#5C4448]">Disciplined, set clear expectations, simple signaling tools (counting/bell). Output: Sustainable teacher energy, focus, and overall efficiency.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-8 text-justify font-sans text-sm sm:text-base text-[#4E3E41] leading-relaxed font-light space-y-5">
                  <p>
                    One of the most significant insights that I gained while working as a Teaching Assistant at an English center was related to <strong className="font-medium text-[#4A3538]">teacher sustainability</strong>. The first class that I was assigned to as a Teaching Assistant was a kid class whose students ranged from age three to five. Initially, the first lead teacher was extremely friendly and committed to creating a comfortable and enjoyable learning environment for the students. She treated them with great care and often adjusted activities according to their preferences in order to maintain their engagement and participation during the lesson. As a result, many students actively enjoyed attending her classes.
                  </p>
                  <p>
                    However, after several sessions of observation, I gradually noticed some limitations of this teaching approach. I noticed that consistently drawing students’ engagement through continuous interaction required a significant amount of physical and emotional energy from the teacher, which may lead to burnout. In some situations, students became overly excited and paid less attention to the learning objectives of the lesson. Hence, it became difficult for the teacher to manage the classroom, which reduced the effectiveness of lesson delivery.
                  </p>
                  <p>
                    One month later, another lead teacher took over the class, and her teaching approach was greatly different from the former one. Instead of relying heavily on constant interaction and entertainment, she focused strongly on establishing classroom disciplines and behavioral expectations from the very beginning.
                  </p>
                  <p>
                    During the first lesson, she spent time training students to follow instructions, and remain attentive. She also used simple but effective classroom management techniques, such as counting signals from one to ten and a small bell, to manage students’ attention and conduct activities efficiently without putting excessive effort in the long term. As a result, she was able to maintain her energy throughout the day. More importantly, students were able to participate more actively and consistently in learning activities, which improved the overall effectiveness of the lesson.
                  </p>
                </div>
              </div>

              <div className="w-full h-[1px] bg-pink-100" />

              {/* SUBSECTION 2.2 */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-24">
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl text-[#4A3538] font-bold">2.2. Reflection</h3>
                  </div>

                  <div className="bg-pink-100/20 rounded-2xl p-5 border border-dashed border-pink-200 text-center">
                    <p className="text-xs text-pink-850 italic font-serif">
                      "I now have a much clearer understanding of the kind of teacher that I hope to become... balancing professionalism with sustainability."
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-8 text-justify font-sans text-sm sm:text-base text-[#4E3E41] leading-relaxed font-light space-y-5">
                  <p>
                    Through this observation, I began reflecting on my own understanding of effective teaching. Before this experience, I used to believe that a good teacher should always try to make all the students happy and like them. In order to achieve this, I believed that teachers should create, similar to the first teacher, a highly comfortable, entertaining, engaging, and emotionally supportive learning atmosphere. Previously, since I had received feedback that I did not seem approachable or naturally likable enough, I attempted to make a consistent effort to look more friendly, amiable, and emotionally available to students during lessons so that they could feel comfortable reaching out to me whenever they needed to.
                  </p>
                  <p>
                    However, in reality, this approach did not make me feel comfortable. I was under pressure to continuously adjust my personality and devote a lot of physical and emotional energy in order to maintain students’ engagement and satisfaction. As time passed, I gradually became emotionally exhausted and even started losing interest in the teaching profession because I felt under continual pressure to not only satisfy students but also to ensure lesson effectiveness. Because of this belief, I considered my personality as a weakness in the teaching career and believed that an effective teacher should always be emotionally engaging and highly energetic in the classroom.
                  </p>
                  <p>
                    However, after a long period of time observing the second teacher, my perspective about this matter gradually changed. Although she was stricter and received some negative feedback from students who felt her classes were less enjoyable, or who were afraid of her, she was able to maintain her energy, lesson effectiveness, and enthusiasm throughout her years of teaching.
                  </p>
                  <p>
                    More importantly, I realized that she was not unfriendly or uncaring toward students. Instead, she created clear professional boundaries between teachers and learners, which enabled her to manage the classroom effectively without experiencing emotional overload. Rather than having friendly conversations with students, she spent more time providing personalized feedback and practical suggestions for improvement, which were extremely beneficial to their learning progress.
                  </p>
                  <p>
                    This observation helped me realize that it is extremely challenging, or even impossible, to satisfy every student emotionally. As it takes an unrealistic amount of effort and energy to maintain constant entertainment, emotional engagement, as well as lesson effectiveness, and teaching sustainability, a teacher cannot handle every aspect of teaching at the same time. As a result, I eventually understood that effective teaching is more than simply making the lessons engaging or trying to make students like the teacher. Rather, it also involves creating sustainable teaching practices that allow teachers to maintain their effectiveness and mental well-being over time.
                  </p>
                  <p>
                    As a result of this experience, I now have a much clearer understanding of the kind of teacher that I hope to become in the future. Even though supportive interaction with learners and a positive learning environment are still emphasized, I no longer think that a teacher must sacrifice their emotional energy in order to satisfy every student.
                  </p>
                  <p>
                    Instead, I hope to gradually develop a teaching style similar to the second teacher’s approach by setting clearer classroom rules which can help to reduce unnecessary energy while still providing support for learners. I now understand that, just like students do, different teachers have different personalities and teaching styles.
                  </p>
                  <p>
                    Therefore, instead of forcing myself to become a teacher whose personality does not make me feel comfortable, I hope to develop a teaching approach that feels more natural for my personality while still enabling me to effectively deliver knowledge to the students and maintain my energy and enthusiasm. In the long term, I believe this balance will help me become a more effective and emotionally stable educator.
                  </p>
                  <p className="italic text-[#7B6165] pt-1">
                    Although I later realized that teaching young learners did not suit closely with my long-term teaching preference, this observation still provided me with valuable insights into classroom management, emotional involvement, and sustainable teaching practices.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </section>

        {/* SECTION 3: WORKSHOP EVALUATION */}
        <section id="workshop-evaluation" className="scroll-mt-24 space-y-10">
          
          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-pink-100 text-pink-600 border border-pink-200 mb-2">
              <Calendar size={20} />
            </div>
            <span className="block text-xs uppercase tracking-widest text-[#C29B9F] font-mono font-bold">Section 3</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#4A3538] font-semibold leading-tight capitalize">
              3. Workshop Evaluation
            </h2>
            <div className="w-16 h-0.5 bg-pink-300 mx-auto rounded" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Visual breakdown of activities discussed in Section 3 */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              
              <div className="bg-white rounded-3xl p-6 border border-pink-100 shadow-sm space-y-4">
                <span className="inline-block text-[10px] uppercase font-mono tracking-wider bg-pink-150 text-pink-700 bg-pink-50 px-3 py-1 rounded-full border border-pink-200/50">
                  Featured Facilitator
                </span>
                
                <div className="space-y-1">
                  <h4 className="font-serif text-lg font-bold text-[#4A3538]">Dr. Vo Thi Nu Anh</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">Exemplified strong professionalism & clinical classroom instructional design methodologies.</p>
                </div>

                <div className="w-full h-[1px] bg-pink-100" />

                <span className="block text-[10px] uppercase font-mono tracking-wider text-stone-400">Integrated Activities Analyzed:</span>
                
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2 p-1.5 hover:bg-pink-50 rounded-xl transition-all">
                    <CheckCircle size={14} className="text-pink-600 shrink-0" />
                    <span className="text-[#5C4448] font-medium font-sans">Line Up (Warm-up / Icebreaker)</span>
                  </div>
                  <div className="flex items-center gap-2 p-1.5 hover:bg-pink-50 rounded-xl transition-all">
                    <CheckCircle size={14} className="text-pink-600 shrink-0" />
                    <span className="text-[#5C4448] font-medium font-sans">Two Truths and a Lie</span>
                  </div>
                  <div className="flex items-center gap-2 p-1.5 hover:bg-pink-50 rounded-xl transition-all">
                    <CheckCircle size={14} className="text-pink-600 shrink-0" />
                    <span className="text-[#5C4448] font-medium font-sans">What is Your Strangest Talent?</span>
                  </div>
                  <div className="flex items-center gap-2 p-1.5 hover:bg-pink-50 rounded-xl transition-all">
                    <CheckCircle size={14} className="text-pink-600 shrink-0" />
                    <span className="text-[#5C4448] font-medium font-sans">Jigsaw Reading (Integrated Skills)</span>
                  </div>
                  <div className="flex items-center gap-2 p-1.5 hover:bg-pink-50 rounded-xl transition-all">
                    <CheckCircle size={14} className="text-pink-600 shrink-0" />
                    <span className="text-[#5C4448] font-medium font-sans">Strip Story (Paragraph Coherence)</span>
                  </div>
                  <div className="flex items-center gap-2 p-1.5 hover:bg-pink-50 rounded-xl transition-all">
                    <CheckCircle size={14} className="text-pink-600 shrink-0" />
                    <span className="text-[#5C4448] font-medium font-sans">Inside-Outside Circles (Large Groups)</span>
                  </div>
                </div>

              </div>

              <div className="bg-gradient-to-tr from-pink-500/5 to-pink-50 border border-pink-100 rounded-3xl p-6 text-center space-y-2">
                <p className="text-xs font-mono font-bold text-pink-700 tracking-wider uppercase">WORKSHOP LENGTH</p>
                <p className="font-serif text-3xl font-bold text-[#4A3538]">4.0 Hours</p>
                <p className="text-[10px] text-stone-500 italic">Ideal duration representing standard micro-intensive workshops.</p>
              </div>

            </div>

            {/* Verbatim text blocks */}
            <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 border border-pink-100 shadow-sm space-y-6 text-justify">
              
              <div className="space-y-5 text-sm sm:text-base text-[#4E3E41] leading-relaxed font-light font-sans">
                
                <h3 className="font-serif text-2xl text-[#4A3538] font-semibold leading-tight border-b border-pink-100 pb-4 mb-2">
                  3. Workshop Evaluation Essay
                </h3>

                <p>
                  Overall, the workshop was highly practical and engaging because it introduced a variety of classroom activities that can be directly applied in English language teaching contexts. Also, it met nearly all the criteria for a successful workshop, including being short-term, intensive, practical, and collaborative.
                </p>
                <p>
                  The workshop was conducted within four hours, an ideal time allocation. Furthermore, all the necessary information was delivered clearly, and attendees were not required to seek additional information before or after participating in the workshop. The topic was focused enough for all attendees to have opportunities to experience the activities introduced in the workshop. It was also highly relevant because it addressed one of the common concerns faced by students at this stage, especially those preparing to enter the teaching profession. More importantly, the workshop involved consistent interactions between the host and attendees and also between attendees themselves which made it more engaging for participants.
                </p>
                <p>
                  Regarding the design of the workshop, the session was logically organized and covered a wide range of classroom activities. There were six activities introduced in total, and each was useful for different language skills and aspects. It was also useful that a teacher can apply for various learning styles and ages.
                </p>
                <p>
                  For example, for the warm-up stage, a teacher can use a variety of icebreakers such as <strong className="font-medium text-[#4A3538]">“Line Up,” “Two Truths and a Lie,”</strong> and <strong className="font-medium text-[#4A3538]">“What is Your Strangest Talent?”</strong> which effectively created a comfortable and energetic learning atmosphere. These activities also demonstrated how teachers can encourage communication and reduce learners’ anxiety at the beginning of lessons.
                </p>
                <p>
                  After that, the presenter gradually moved to activities focusing on different language skills, including listening, grammar, reading, writing, and speaking. This order allowed participants to follow the workshop effectively and observe how different activities can be applied in English language classrooms. For each activity, the presenter acted as the teacher while the attendees took the role of students so that participants could better understand how the activities worked in the actual classroom and how to give clear instructions effectively.
                </p>
                <p>
                  In terms of the presenter, <strong className="font-medium text-[#4A3538]">Dr. Vo Thi Nu Anh</strong> showed strong professionalism and practical teaching experience throughout the workshop. The instructions for each activity were generally clear and easy to follow. As a result, participants could follow the workshop easily and also learn effective ways of giving classroom instructions through observing how she conducted the activities. In addition, she was highly supportive in providing feedback and answering participants’ questions whenever difficulties or confusion appeared during the activities.
                </p>
                <p>
                  Concerning resources, the workshop provided various useful and adaptable classroom activities that can be applied to different learner groups and teaching contexts. For example, the jigsaw reading activity successfully integrated reading, listening, and speaking skills, while the strip story activity effectively developed students’ understanding of coherence and paragraph organization in writing. Similarly, the Inside-Outside Circles activity was particularly useful for promoting learner interaction and maximizing speaking opportunities in large classrooms. These activities were practical because they required relatively simple materials while still creating meaningful learner engagement.
                </p>
                <p>
                  Most importantly, the workshop was particularly meaningful for me because it addressed one of the most challenging parts that I am currently worrying about as a beginning teacher. Since I still lack practical teaching experience, I often struggle to find suitable classroom activities and effective ways to maintain students’ engagement during lessons.
                </p>
                <p>
                  Therefore, the workshop provided me with many practical activity ideas that I may use in my future classrooms to create a more active and communicative learning environment. Most activities can be adapted to different age groups, proficiency levels, and lesson objectives. 
                </p>
                <p className="font-medium text-pink-700">
                  Therefore, I found the workshop particularly valuable because it provided practical ideas that I may apply in my future classrooms to increase learner participation and interaction in the EFL classroom.
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* SECTION 4: REFLECTION (OVERALL COURSE REFLECTION) */}
        <section id="reflection" className="scroll-mt-24 space-y-10">
          
          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-pink-100 text-pink-600 border border-pink-200 mb-2">
              <Award size={20} />
            </div>
            <span className="block text-xs uppercase tracking-widest text-[#C29B9F] font-mono font-bold">Section 4</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#4A3538] font-semibold leading-tight capitalize">
              4. Overall Course Reflection
            </h2>
            <div className="w-16 h-0.5 bg-pink-300 mx-auto rounded" />
          </div>

          <div className="bg-white rounded-[40px] border border-pink-100 p-6 sm:p-10 shadow-lg relative overflow-hidden text-justify">
            <div className="absolute top-0 left-0 w-32 h-32 bg-pink-50/50 rounded-br-full -z-0 pointer-events-none" />
            
            {/* Elegant Quotation Mark Highlight */}
            <div className="text-pink-200/50 text-[120px] font-serif absolute top-2 right-8 select-none leading-none pointer-events-none">
              &ldquo;
            </div>

            <div className="relative z-10 space-y-6 text-[#4E3E41] leading-relaxed font-sans font-light text-sm sm:text-base">
              
              <h3 className="font-serif text-2xl text-[#4A3538] font-semibold leading-tight mb-6 pb-2 border-b border-pink-100">
                Professional Development for Language Teachers
              </h3>

              <p>
                The subject <strong className="font-medium text-[#4A3538]">Professional Development for Language Teachers</strong> has had a significant impact on me, including personal and professional respects. Rather than simply providing theoretical knowledge about teaching practice as other previous subjects, this course serves as a valuable opportunity for me to pause and reflect deeply on myself, including my past experiences, present situation, and future professional direction. Before taking this course, although I already had some teaching and teaching assistant experience, I was still extremely bewildered about what kind of teacher I truly wanted to become and what exactly area of teaching that I wanted to pursue.
              </p>
              
              {/* Highlight card in the center */}
              <div className="bg-gradient-to-r from-[#FFF0F2] to-white p-6 rounded-2xl border border-pink-100 max-w-2xl mx-auto my-6 text-center space-y-2">
                <span className="text-[10px] font-mono tracking-widest uppercase bg-pink-600 text-white px-2.5 py-0.5 rounded-full">Lecturer Wake-Up Instruction</span>
                <p className="italic font-serif text-lg text-[#4A3538] font-semibold">
                  “No working environment is completely relaxing, the key point here is which area you can suffer from.”
                </p>
              </div>

              <p>
                Through the portfolio-building process, I could step back and carefully analyze what I had gone through during the time working as a tutor and teaching assistant. By doing this, I can better understand what my teaching philosophy and preferences are, what I enjoy in teaching, and what I feel comfortable and uncomfortable with. And more importantly, one of the most impressive parts that I have obtained through the course was the lecturer’s statement that <span className="bg-rose-50 border-b border-rose-300 font-medium px-1">no working environment is completely relaxing, the key point here is which area you can suffer from.</span>
              </p>
              <p>
                It served as a wake-up call for me, since I had kept looking for a workplace with as little workload as possible, and the only requirement for me while teaching is just to teach and go home which is not realistic at all. I now realize that part of the problem came from my tendency to remain in my comfort zone and do not dare to challenge myself. For example, I realized that I highly value learner understanding, close learner support, and meaningful academic progress rather than simply maintaining entertainment or emotional satisfaction in the classroom. At the same time, I also became more aware of the teaching contexts that may emotionally exhaust me in the long run and the importance of establishing sustainable teaching practices and professional boundaries.
              </p>
              <p>
                In addition, this course also helped me recognize both my strengths and weaknesses more clearly. I realized that one of my strengths is my strong sense of responsibility and commitment to supporting students’ learning progress. However, I also recognized that I sometimes become overly emotionally invested in students’ learning outcomes, which may eventually lead to emotional exhaustion if I do not learn how to manage my energy and expectations more effectively. Therefore, the course encouraged me to think more critically about the type of teacher I hope to become and the professional skills that I still need to develop in the future. I now better understand the importance of managing my energy appropriately in teaching.
              </p>
              <p>
                Most importantly, this subject helped me establish a clearer long-term professional goal and a more realistic developmental pathway to achieve it. Previously, I often felt confused and uncertain about my future career direction. I had not clearly identified the career path that I genuinely wanted to pursue. My thoughts were wandering around numerous options, including a tour guide, an English teacher, or a hotel receptionist.
              </p>
              <p>
                However, through the process of reflection and professional development planning, I realized that it was my weakness that I did not dare to confront the real situation, and I gradually identified my <span className="text-[#4A3538] font-semibold">long-term goal of becoming an IELTS teacher and eventually opening a small-scale IELTS-oriented English center</span>. At the same time, I also became more aware of the areas that I need to improve, including subject-matter knowledge, pedagogical expertise, and career advancement.
              </p>
              <p className="font-medium text-[#4A3538] border-t border-pink-100 pt-5">
                Overall, I believe this course was particularly important as it helped me better understand myself as a future educator. Rather than providing knowledge about teaching fields, these sessions functioned as a period of reflection during which I was able to listen to myself more carefully, helping me sharpen my own teaching identity, values, strengths, limitations, and long-term professional orientation.
              </p>

            </div>

          </div>

        </section>


      </main>

      {/* FOOTER SECTION & RESOURCE DIRECTORY */}
      <footer className="bg-white border-t border-pink-100 pt-16 pb-12 px-4 shadow-inner">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-pink-100 pb-10">
            
            {/* Left Brand Col */}
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center border border-pink-200 text-pink-700 font-cinzel font-semibold shadow-xs">
                  NL
                </div>
                <div>
                  <span className="font-cinzel tracking-widest text-[#4A3538] font-bold text-sm block">Nguyen Thi Lan Nhi</span>
                  <span className="text-[10px] uppercase tracking-widest text-[#C29B9F] font-mono block">English Language Educator</span>
                </div>
              </div>
              <p className="text-xs text-[#7B6165] leading-relaxed max-w-sm text-justify">
                Graduating English teacher committed to robust pedagogy, exam-oriented secondary success, long-term educator well-being, and the logical design of academic courses.
              </p>
              <div className="bg-[#FFF8F9] rounded-2xl p-4 border border-pink-10s border-pink-100 inline-block pointer-events-none">
                <p className="text-[11px] text-[#4A3538] font-medium leading-none">Philosophy Reflection Target:</p>
                <p className="font-serif italic text-sm text-pink-700 mt-1">"Ensuring understanding for all."</p>
              </div>
            </div>

            {/* Middle Nav Directory */}
            <div className="md:col-span-5 space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#4A3538]">Site map Directory</h4>
              <ul className="space-y-2 text-xs font-medium font-sans">
                <li>
                  <button onClick={() => scrollToSection("intro")} className="text-stone-500 hover:text-pink-600 transition-colors">Hero Overview</button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("profile")} className="text-stone-500 hover:text-pink-600 transition-colors">1. Professional Profile</button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("development-process")} className="text-stone-500 hover:text-pink-600 transition-colors">2. Development Process</button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("workshop-evaluation")} className="text-stone-500 hover:text-pink-600 transition-colors">3. Workshop Evaluation</button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("reflection")} className="text-stone-500 hover:text-pink-600 transition-colors">4. Reflection</button>
                </li>
              </ul>
            </div>

          </div>

          {/* Absolute Bottom Copy section */}
          <div className="flex flex-col sm:flex-row justify-between items-center text-[11px] text-stone-400 font-mono gap-4 w-full">
            <p className="text-center sm:text-left">
              &copy; {new Date().getFullYear()} Nguyen Thi Lan Nhi. All Rights Reserved. Verbatim Transcription.
            </p>
          </div>

        </div>
      </footer>

      {/* FLOAT BACK TO TOP BUTTON */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            key="back-to-top"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top of page"
            className="fixed bottom-6 right-6 w-11 h-11 rounded-full bg-pink-600 hover:bg-pink-700 text-white flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-all z-50 border border-pink-500/20"
          >
            <ChevronUp size={20} strokeWidth={2.5} />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
