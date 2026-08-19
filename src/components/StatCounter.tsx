import { useEffect, useRef, useState } from "react"

interface StatCounterProps {
  end: number
  suffix?: string
  label: string
}

const StatCounter: React.FC<StatCounterProps> = ({ end, suffix = "+", label }) => {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!hasAnimated) return

    const duration = 1200
    const startTime = performance.now()

    const step = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }

    requestAnimationFrame(step)
  }, [hasAnimated, end])

  return (
    <div ref={ref} className="text-center bg-white rounded-3xl shadow-xl p-10 border border-gray-200">
      <div className="text-5xl font-bold text-primary mb-4">{count.toLocaleString()}{suffix}</div>
      <p className="text-lg font-semibold text-gray-700">{label}</p>
    </div>
  )
}

export default StatCounter
