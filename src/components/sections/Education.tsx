'use client'
import { useState, useEffect } from 'react'
import { Calendar, MapPin, Users, BookOpen, Star, ChevronDown } from 'lucide-react'
import { usePortfolioData } from '@/hooks/usePortfolioData'

// Unified scroll animation hook (inline for this example)
function useScrollAnimation(itemCount: number) {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleItems, setVisibleItems] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Stagger education items
          for (let i = 0; i < itemCount; i++) {
            setTimeout(() => {
              setVisibleItems(prev => [...prev, i])
            }, 200 + i * 150)
          }
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    const section = document.getElementById('education')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [itemCount])

  return { isVisible, visibleItems }
}

export function Education() {
  const [activeScroll, setActiveScroll] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const { data, loading } = usePortfolioData()

  const education = data?.education ?? []
  const { isVisible, visibleItems } = useScrollAnimation(education.length)

  // Detect mobile/touch devices
  useEffect(() => {
    const checkIsMobile = () => {
      const hasTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0
      const isSmallScreen = window.innerWidth < 1024
      setIsMobile(hasTouchScreen || isSmallScreen)
    }
    
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  const handleCardInteraction = (eduId: number) => {
    setActiveScroll(activeScroll === eduId ? null : eduId)
  }

  const handleMouseEnter = (eduId: number) => {
    if (!isMobile) {
      setActiveScroll(eduId)
    }
  }

  const handleMouseLeave = () => {
    if (!isMobile) {
      setActiveScroll(null)
    }
  }

  const getUniversityLogo = (logo: string) => {
    if (logo === "UF") {
      return (
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden shadow-lg border-2 border-gray-200 flex-shrink-0">
          <img 
            src="/images/uf-logo.png" 
            alt="University of Florida Logo" 
            className="w-full h-full object-cover"
          />
        </div>
      )
    } else if (logo === "VIT") {
      return (
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden shadow-lg border-2 border-gray-200 flex-shrink-0">
          <img 
            src="/images/vit-logo.png" 
            alt="Vishwakarma Institute of Technology Logo" 
            className="w-full h-full object-cover"
          />
        </div>
      )
    }
    return null
  }

  return (
    <section id="education" data-scroll-section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium mb-3 sm:mb-4 border border-purple-200 dark:border-purple-800">
            <span className="animate-bounce">🎓</span>
            Academic Journey
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Education 
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Building knowledge through rigorous academic pursuit and continuous learning
          </p>
        </div>

        {/* Academic Scrolls */}
        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
          {education.map((edu, index) => {
            const isItemVisible = visibleItems.includes(index)
            
            return (
              <div
                key={edu.id}
                className={`group relative transition-all duration-700 ease-out ${
                  isItemVisible 
                    ? 'opacity-100 translate-y-0 translate-x-0' 
                    : `opacity-0 translate-y-8 ${index % 2 === 0 ? '-translate-x-8' : 'translate-x-8'}`
                }`}
                style={{ 
                  transitionDelay: `${index * 150}ms`
                }}
                onMouseEnter={() => handleMouseEnter(edu.id)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Scroll Container */}
                <div className={`relative ${
                  edu.color === 'purple' 
                    ? 'bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 border-purple-200 dark:border-purple-800' 
                    : 'bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-blue-200 dark:border-blue-800'
                } rounded-xl sm:rounded-2xl border-2 transition-all duration-700 hover:shadow-xl sm:hover:shadow-2xl ${
                  activeScroll === edu.id ? 'scale-102' : ''
                }`}>
                  
                  {/* Scroll Header */}
                  <div 
                    className="p-4 sm:p-6 cursor-pointer"
                    onClick={() => handleCardInteraction(edu.id)}
                  >
                    <div className="flex items-start sm:items-center justify-between gap-3">
                      <div className="flex items-start sm:items-center gap-3 sm:gap-4 flex-1 min-w-0">
                        {/* University Logo */}
                        <div className={`transition-all duration-500 flex-shrink-0 ${
                          activeScroll === edu.id ? 'rotate-12 scale-110' : 'group-hover:rotate-6 group-hover:scale-105'
                        } ${
                          isItemVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                        }`}
                        style={{ 
                          transitionDelay: `${index * 150 + 200}ms`
                        }}>
                          {getUniversityLogo(edu.logo)}
                        </div>

                        <div className={`transition-all duration-700 flex-1 min-w-0 ${
                          isItemVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                        }`}
                        style={{ 
                          transitionDelay: `${index * 150 + 300}ms`
                        }}>
                          {/* Status Badge */}
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                            <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 inline-block w-fit ${
                              edu.status === 'Completed'
                                ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400'
                                : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400'
                            } ${activeScroll === edu.id ? 'scale-110' : ''}`}>
                              {edu.status === 'Completed' ? '✅ Completed' : '🔄 In Progress'}
                            </span>
                            <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                              <Calendar size={12} />
                              {edu.duration}
                            </span>
                          </div>

                          {/* Degree Info */}
                          <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold transition-all duration-300 break-words ${
                            activeScroll === edu.id
                              ? `text-transparent bg-gradient-to-r ${
                                  edu.color === 'purple' 
                                    ? 'from-purple-600 to-indigo-600' 
                                    : 'from-blue-600 to-cyan-600'
                                } bg-clip-text`
                              : 'text-gray-900 dark:text-white'
                          }`}>
                            {edu.degree}
                          </h3>
                          <p className={`text-base sm:text-lg font-medium break-words ${
                            edu.color === 'purple' 
                              ? 'text-purple-600 dark:text-purple-400' 
                              : 'text-blue-600 dark:text-blue-400'
                          }`}>
                            {edu.field}
                          </p>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-1 text-gray-600 dark:text-gray-300 text-sm">
                            <span className="flex items-center gap-1 break-words">
                              <BookOpen size={14} className="flex-shrink-0" />
                              <span className="truncate">{edu.university}</span>
                            </span>
                            <span className="flex items-center gap-1 break-words">
                              <MapPin size={14} className="flex-shrink-0" />
                              <span className="truncate">{edu.location}</span>
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Expand Indicator */}
                      <div className={`transition-all duration-300 flex-shrink-0 ${
                        activeScroll === edu.id ? 'rotate-180' : ''
                      } ${
                        isItemVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                      }`}
                      style={{ 
                        transitionDelay: `${index * 150 + 400}ms`
                      }}>
                        <ChevronDown size={20} className={
                          edu.color === 'purple' ? 'text-purple-500' : 'text-blue-500'
                        } />
                      </div>
                    </div>
                  </div>

                  {/* Expandable Content */}
                  <div className={`overflow-hidden transition-all duration-700 ease-out ${
                    activeScroll === edu.id ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                      {/* Divider */}
                      <div className={`w-full h-px mb-4 sm:mb-6 ${
                        edu.color === 'purple'
                          ? 'bg-gradient-to-r from-transparent via-purple-300 to-transparent dark:via-purple-700'
                          : 'bg-gradient-to-r from-transparent via-blue-300 to-transparent dark:via-blue-700'
                      }`}></div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                        {/* Left Column */}
                        <div className="order-2 lg:order-1">
                          {/* GPA */}
                          <div className="flex items-center gap-2 mb-4">
                            <Star size={16} className={
                              edu.color === 'purple' ? 'text-purple-500' : 'text-blue-500'
                            } />
                            <span className="text-gray-700 dark:text-gray-300 font-medium">
                              <span className={`font-bold text-base sm:text-lg ${
                                edu.color === 'purple' ? 'text-purple-600 dark:text-purple-400' : 'text-blue-600 dark:text-blue-400'
                              }`}>GPA: {edu.gpa}</span>
                            </span>
                          </div>

                          {/* Activities */}
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2 text-sm sm:text-base">
                              <Users size={16} className={
                                edu.color === 'purple' ? 'text-purple-500' : 'text-blue-500'
                              } />
                              Activities
                            </h4>
                            <ul className="space-y-2">
                              {edu.highlights.map((highlight, idx) => (
                                <li 
                                  key={idx}
                                  className={`flex items-start gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 transition-all duration-300 ${
                                    activeScroll === edu.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
                                  }`}
                                  style={{ 
                                    transitionDelay: activeScroll === edu.id ? `${idx * 100}ms` : '0ms'
                                  }}
                                >
                                  <span className={`w-1.5 h-1.5 rounded-full mt-2 animate-pulse flex-shrink-0 ${
                                    edu.color === 'purple' ? 'bg-purple-400' : 'bg-blue-400'
                                  }`}></span>
                                  <span className="break-words">{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Right Column - Coursework */}
                        <div className="order-1 lg:order-2">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm sm:text-base">
                            Relevant Coursework
                          </h4>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {edu.relevantCourses.map((course, idx) => (
                              <span
                                key={idx}
                                className={`px-2 sm:px-3 py-1 rounded-lg text-xs font-medium border transition-all duration-300 hover:scale-105 break-words ${
                                  edu.color === 'purple'
                                    ? 'border-purple-200 bg-purple-100 text-purple-700 dark:border-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
                                    : 'border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                                } ${
                                  activeScroll === edu.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                                }`}
                                style={{ 
                                  transitionDelay: activeScroll === edu.id ? `${idx * 50}ms` : '0ms'
                                }}
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Corner Elements */}
                  <div className={`absolute top-3 sm:top-4 right-3 sm:right-4 w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-500 ${
                    activeScroll === edu.id
                      ? `animate-ping ${edu.color === 'purple' ? 'bg-purple-400' : 'bg-blue-400'}`
                      : 'bg-gray-300 dark:bg-gray-600'
                  } ${
                    isItemVisible ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 150 + 500}ms`
                  }}></div>
                  
                  {/* Scroll-like rolled edges */}
                  <div className={`absolute top-0 left-0 w-4 sm:w-6 h-full rounded-l-xl sm:rounded-l-2xl opacity-20 transition-all duration-700 ${
                    edu.color === 'purple'
                      ? 'bg-gradient-to-b from-purple-300 to-purple-400 dark:from-purple-700 dark:to-purple-800'
                      : 'bg-gradient-to-b from-blue-300 to-blue-400 dark:from-blue-700 dark:to-blue-800'
                  } ${
                    isItemVisible ? 'opacity-20' : 'opacity-0'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 150 + 100}ms`
                  }}></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}