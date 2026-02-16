'use client'
import { Navigation } from '@/components/layout/Navigation'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { Education } from '@/components/sections/Education'
import { Experience } from '@/components/sections/Experience'
import { About } from '@/components/sections/About'
import { Footer } from '@/components/layout/Footer'
import { Research } from '@/components/sections/Research'
import { useEffect } from 'react'

export default function Home() {
  // Keep the scroll progress bar
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollProgress = document.querySelector('.scroll-progress') as HTMLElement
      if (scrollProgress) {
        const scrollTop = window.scrollY
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        const scrollPercent = scrollTop / docHeight
        scrollProgress.style.transform = `scaleX(${scrollPercent})`
      }
    }

    window.addEventListener('scroll', updateScrollProgress)
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <>
      {/* Keep scroll progress bar */}
      <div className="scroll-progress"></div>
      
      {/* LIGHT MODE - Purple Constellation (12 dots total) - MOBILE OPTIMIZED */}
      <div className="light-constellation block dark:hidden">
        <div className="light-constellation-dot" style={{top: '20%', left: '15%', animationDelay: '0s'}}></div>
        <div className="light-constellation-dot" style={{top: '35%', left: '25%', animationDelay: '1s'}}></div>
        <div className="light-constellation-dot" style={{top: '60%', left: '10%', animationDelay: '2s'}}></div>
        <div className="light-constellation-dot" style={{top: '80%', left: '30%', animationDelay: '3s'}}></div>
        <div className="light-constellation-dot" style={{top: '25%', left: '70%', animationDelay: '1.5s'}}></div>
        <div className="light-constellation-dot" style={{top: '45%', left: '75%', animationDelay: '2.5s'}}></div>
        <div className="light-constellation-dot" style={{top: '70%', left: '75%', animationDelay: '0.5s'}}></div>
        <div className="light-constellation-dot" style={{top: '15%', left: '50%', animationDelay: '3.5s'}}></div>
        
        {/* Just 4 additional dots for perfect balance - MOBILE SAFE POSITIONS */}
        <div className="light-constellation-dot" style={{top: '10%', left: '75%', animationDelay: '4s'}}></div>
        <div className="light-constellation-dot" style={{top: '55%', left: '40%', animationDelay: '5s'}}></div>
        <div className="light-constellation-dot" style={{top: '75%', left: '50%', animationDelay: '2.2s'}}></div>
        <div className="light-constellation-dot" style={{top: '5%', left: '25%', animationDelay: '4.5s'}}></div>
        
        {/* Light mode constellation connecting lines - SHORTENED FOR MOBILE */}
        <div className="light-constellation-line" style={{
          top: '20%', 
          left: '15%', 
          width: '100px', 
          transform: 'rotate(35deg)',
          animationDelay: '4s'
        }}></div>
        <div className="light-constellation-line" style={{
          top: '35%', 
          left: '25%', 
          width: '80px', 
          transform: 'rotate(-20deg)',
          animationDelay: '5s'
        }}></div>
        <div className="light-constellation-line" style={{
          top: '25%', 
          left: '50%', 
          width: '120px', 
          transform: 'rotate(15deg)',
          animationDelay: '6s'
        }}></div>
        <div className="light-constellation-line" style={{
          top: '55%', 
          left: '40%', 
          width: '90px', 
          transform: 'rotate(-10deg)',
          animationDelay: '7s'
        }}></div>
      </div>
      
      {/* LIGHT MODE - Elegant Particles (MOBILE SAFE POSITIONS) */}
      <div className="light-particles block dark:hidden">
        <div className="particle" style={{top: '10%', left: '15%', animationDelay: '0s'}}></div>
        <div className="particle" style={{top: '25%', left: '70%', animationDelay: '2s'}}></div>
        <div className="particle" style={{top: '45%', left: '75%', animationDelay: '4s'}}></div>
        <div className="particle" style={{top: '35%', left: '25%', animationDelay: '1s'}}></div>
        <div className="particle" style={{top: '60%', left: '10%', animationDelay: '3s'}}></div>
        <div className="particle" style={{top: '70%', left: '65%', animationDelay: '5s'}}></div>
        <div className="particle" style={{top: '80%', left: '30%', animationDelay: '6s'}}></div>
        <div className="particle" style={{top: '15%', left: '50%', animationDelay: '7s'}}></div>
        <div className="particle" style={{top: '55%', left: '45%', animationDelay: '8s'}}></div>
        <div className="particle" style={{top: '85%', left: '70%', animationDelay: '9s'}}></div>
      </div>
      
      {/* Light Mode - Subtle accent lines - MOBILE SAFE SIZES */}
      <div className="light-accent-lines block dark:hidden">
        <div className="accent-line" style={{top: '20%', left: '0%', width: '150px', animationDelay: '0s'}}></div>
        <div className="accent-line" style={{top: '50%', right: '0%', width: '120px', animationDelay: '3s'}}></div>
        <div className="accent-line" style={{top: '75%', left: '20%', width: '100px', animationDelay: '6s'}}></div>
      </div>
      
      {/* Constellation Background Effect for Dark Mode (12 dots total) - MOBILE OPTIMIZED */}
      <div className="dark-constellation hidden dark:block">
        <div className="constellation-dot" style={{top: '20%', left: '15%', animationDelay: '0s'}}></div>
        <div className="constellation-dot" style={{top: '35%', left: '25%', animationDelay: '1s'}}></div>
        <div className="constellation-dot" style={{top: '60%', left: '10%', animationDelay: '2s'}}></div>
        <div className="constellation-dot" style={{top: '80%', left: '30%', animationDelay: '3s'}}></div>
        <div className="constellation-dot" style={{top: '25%', left: '70%', animationDelay: '1.5s'}}></div>
        <div className="constellation-dot" style={{top: '45%', left: '75%', animationDelay: '2.5s'}}></div>
        <div className="constellation-dot" style={{top: '70%', left: '75%', animationDelay: '0.5s'}}></div>
        <div className="constellation-dot" style={{top: '15%', left: '50%', animationDelay: '3.5s'}}></div>
        
        {/* Just 4 additional dots for perfect balance - MOBILE SAFE POSITIONS */}
        <div className="constellation-dot" style={{top: '10%', left: '75%', animationDelay: '4s'}}></div>
        <div className="constellation-dot" style={{top: '55%', left: '40%', animationDelay: '5s'}}></div>
        <div className="constellation-dot" style={{top: '75%', left: '50%', animationDelay: '2.2s'}}></div>
        <div className="constellation-dot" style={{top: '5%', left: '25%', animationDelay: '4.5s'}}></div>
        
        {/* Connecting lines between some dots - SHORTENED FOR MOBILE */}
        <div className="constellation-line" style={{
          top: '20%', 
          left: '15%', 
          width: '100px', 
          transform: 'rotate(35deg)',
          animationDelay: '4s'
        }}></div>
        <div className="constellation-line" style={{
          top: '35%', 
          left: '25%', 
          width: '80px', 
          transform: 'rotate(-20deg)',
          animationDelay: '5s'
        }}></div>
        <div className="constellation-line" style={{
          top: '25%', 
          left: '50%', 
          width: '120px', 
          transform: 'rotate(15deg)',
          animationDelay: '6s'
        }}></div>
        <div className="constellation-line" style={{
          top: '55%', 
          left: '40%', 
          width: '90px', 
          transform: 'rotate(-10deg)',
          animationDelay: '7s'
        }}></div>
      </div>
      
      {/* Enhanced subtle dots for light mode */}
      <div className="subtle-dots dark:hidden"></div>
      
      <Navigation />
      
      <main className="w-full max-w-full overflow-x-hidden">
        {/* Hero Section - Mobile Responsive & No Horizontal Scroll */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden w-full max-w-full">
          {/* Hero floating shapes - More subtle and mobile safe */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none w-full max-w-full">
            <div className="absolute top-1/4 left-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-purple-400/8 dark:bg-purple-400/20 rounded-full blur-3xl animate-pulse max-w-[200px]"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-blue-400/8 dark:bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000 max-w-[250px]"></div>
            
            {/* More subtle additional shapes for light mode - MOBILE SAFE */}
            <div className="absolute top-1/2 right-1/3 w-24 sm:w-32 h-24 sm:h-32 bg-emerald-400/6 dark:bg-emerald-400/15 rounded-full blur-2xl animate-pulse delay-500 dark:hidden max-w-[100px]"></div>
            <div className="absolute bottom-1/3 left-1/2 w-32 sm:w-48 h-32 sm:h-48 bg-rose-400/5 dark:bg-rose-400/12 rounded-full blur-2xl animate-pulse delay-1500 dark:hidden max-w-[150px]"></div>
          </div>
          
          <div className="relative z-10 text-center max-w-6xl mx-auto w-full px-2 sm:px-4">
            
            {/* TOP SPACER - RESPONSIVE: Small on mobile, large on desktop */}
            <div className="mb-4 sm:mb-6 lg:mb-12 xl:mb-16">
              {/* Welcome Badge */}
              <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-600 dark:text-purple-400 rounded-full text-xs sm:text-sm font-medium border border-purple-200 dark:border-purple-800 backdrop-blur-sm">
                <span className="wave">👋</span>
                Welcome to my portfolio
              </span>
            </div>
            
            {/* MAIN HEADING - Better mobile spacing and word wrap */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight text-gray-900 dark:text-white px-2 break-words">
              Powering Real Impact with{' '}
              <span className="text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text animate-gradient">
                Reliable Code
              </span>
            </h1>
            
            {/* BOTTOM CONTENT - Responsive spacing */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed px-4 break-words">
                Hi! I&apos;m <strong className="text-purple-600 dark:text-purple-400">Nirvisha</strong>, a software developer specializing in 
                <span className="text-blue-600 dark:text-blue-400"> backend systems</span> and 
                <span className="text-cyan-600 dark:text-cyan-400"> AI solutions</span>.
              </p>
              
              {/* CTA Buttons - Mobile optimized */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 w-full max-w-2xl mx-auto">
                <button 
                  onClick={() => {
                    document.getElementById('projects')?.scrollIntoView({ 
                      behavior: 'smooth' 
                    })
                  }}
                  className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 w-full sm:w-auto text-sm sm:text-base max-w-xs sm:max-w-none"
                >
                  <span className="flex items-center justify-center gap-2">
                    See what I&apos;ve built
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </button>
                
                <a
                  href="/Nirvisha_Soni.pdf"
                  download="Nirvisha_Soni.pdf"
                  className="group border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-purple-500 dark:hover:border-purple-400 hover:text-purple-600 dark:hover:text-purple-400 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm w-full sm:w-auto text-sm sm:text-base inline-block text-center active:scale-95 touch-manipulation max-w-xs sm:max-w-none"
                  style={{ 
                    WebkitTapHighlightColor: 'transparent',
                    userSelect: 'none'
                  }}
                  onTouchStart={(e) => {
                    // Prevent double-tap zoom on iOS
                    e.preventDefault();
                    // Add immediate visual feedback
                    e.currentTarget.style.transform = 'scale(0.95)';
                  }}
                  onTouchEnd={(e) => {
                    // Reset transform
                    setTimeout(() => {
                      e.currentTarget.style.transform = '';
                    }, 150);
                  }}
                >
                  <span className="flex items-center justify-center gap-2">
                    <svg 
                      className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-bounce" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                      />
                    </svg>
                    Download Resume
                  </span>
                </a>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-4 sm:gap-6 justify-center items-center">
                <a
                  href="https://linkedin.com/in/nirvishasoni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2 sm:p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-all duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                
                <a
                  href="https://github.com/nirvishasoni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2 sm:p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-all duration-300"
                  aria-label="GitHub Profile"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                
                <a
                  href="https://scholar.google.com/citations?user=levmF9MAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2 sm:p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-all duration-300"
                  aria-label="Google Scholar Profile"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" fill="currentColor">
                    <path d="M5.242 13.769L0.5 9.5 12 1l11.5 8.5-4.742 4.269C17.847 14.582 15.085 15 12 15s-5.847-.418-6.758-1.231z"/>
                    <path d="M6.5 15.5v3c0 2.485 2.239 4.5 5 4.5h1c2.761 0 5-2.015 5-4.5v-3l-5.5 2.5-5.5-2.5z"/>
                  </svg>
                </a>
              </div>
            </div>
            
          </div>
        </section>
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Research /> 
        <About />
      </main>

      {/* Footer with flowing gradient that matches the website */}
      <div className="flowing-footer">
        <Footer />
      </div>
    </>
  )
}
