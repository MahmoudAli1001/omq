'use client'

import React, { useEffect, useState, useRef, useMemo } from 'react'
import { Clock, Mail, Bell, ArrowRight, Waves, Anchor } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'

interface ComingSoonProps {
  title?: string
  subtitle?: string
  description?: string
  launchDate?: Date
  showEmailSignup?: boolean
  showCountdown?: boolean
  className?: string
}

const ComingSoon: React.FC<ComingSoonProps> = ({
  title = "قريباً - Coming Soon",
  subtitle = "شيء مذهل في الطريق",
  description = "نحن نعمل على شيء رائع. ترقبوا المزيد من التحديثات والإعلانات المثيرة.",
  launchDate,
  showEmailSignup = true,
  showCountdown = true,
  className = ""
}) => {
  // Memoize the launch date to prevent recreating it on every render
  const targetDate = useMemo(() => {
    return launchDate || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
  }, [launchDate])

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [mounted, setMounted] = useState(false)

  // Set mounted state once on component mount
  useEffect(() => {
    setMounted(true)
  }, [])

  // Handle countdown timer separately with memoized target date
  useEffect(() => {
    if (!showCountdown || !mounted) return

    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate, showCountdown, mounted])


  if (!mounted) {
    return null // Prevent hydration mismatch
  }

  return (
    <div className={`min-h-screen relative overflow-hidden text-[#001d35] ${className}`}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-brand-600/5 ">
        <div className="absolute inset-0 bg-gradient-bubbles opacity-30 animate-pulse"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 border border-brand-400/30 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-brand-300/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-12 h-12 border-2 border-brand-500/40 rounded-full animate-spin"></div>
        
      
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Logo/Icon */}
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-brand-500 to-brand-600 rounded-full flex items-center justify-center shadow-2xl">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Clock className="w-10 h-10 text-[#001d35] animate-pulse" />
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-cairo font-bold mb-6 text-[#001d35] animate-fade-in">
            <span className="bg-gradient-to-r text-[#001d35] from-brand-600 to-brand-500 bg-clip-text ">
              {title}
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl font-cairo font-medium mb-4 text-gray-700 animate-fade-in animation-delay-200">
            {subtitle}
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto animate-fade-in animation-delay-400">
            {description}
          </p>

          {/* Countdown Timer */}
          {showCountdown && (
            <div className="mb-12 animate-fade-in animation-delay-600">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-lg mx-auto">
                {[
                  { label: 'أيام', value: timeLeft.days, labelEn: 'Days' },
                  { label: 'ساعات', value: timeLeft.hours, labelEn: 'Hours' },
                  { label: 'دقائق', value: timeLeft.minutes, labelEn: 'Minutes' },
                  { label: 'ثوان', value: timeLeft.seconds, labelEn: 'Seconds' }
                ].map((item, index) => (
                  <Card key={index} className="p-4 bg-white/80 backdrop-blur-sm border-brand-300/50 hover:shadow-lg transition-all duration-300">
                    <div className="text-3xl md:text-4xl font-bold text-brand-600 mb-2">
                      {item.value.toString().padStart(2, '0')}
                    </div>
                    <div className="text-sm text-gray-600 font-cairo">
                      <div>{item.label}</div>
                      <div className="text-xs opacity-75">{item.labelEn}</div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

         
          {/* Call to Action */}
          <div className="animate-fade-in animation-delay-1000">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-brand-500 text-white text-brand-600 hover:bg-brand-500 hover:text-white font-cairo px-8 py-3"
            >
              العودة للرئيسية - Back to Home
              <ArrowRight className="w-5 h-5 mr-2 rtl:rotate-180" />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute -bottom-1 left-0 right-0">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#011129" fillOpacity="1" d="M0,224L40,202.7C80,181,160,139,240,133.3C320,128,400,160,480,181.3C560,203,640,213,720,229.3C800,245,880,267,960,240C1040,213,1120,139,1200,101.3C1280,64,1360,64,1400,64L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
      </div>
    </div>
  )
}

export default ComingSoon

// CSS animations (add to globals.css if not present)
/*
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}

.animation-delay-600 {
  animation-delay: 0.6s;
}

.animation-delay-800 {
  animation-delay: 0.8s;
}

.animation-delay-1000 {
  animation-delay: 1s;
}
*/
