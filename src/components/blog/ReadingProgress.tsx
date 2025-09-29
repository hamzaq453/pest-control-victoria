"use client"

interface ReadingProgressProps {
  progress: number
}

export default function ReadingProgress({ progress }: ReadingProgressProps) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="h-1 bg-[#2E3A24]/20">
        <div 
          className="h-full bg-gradient-to-r from-[#6B9071] via-[#A8B5A2] to-[#2E3A24] transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}
