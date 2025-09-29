"use client"

import { useState, useEffect } from 'react'
import { Search, X } from 'lucide-react'

interface BlogSearchProps {
  onSearch: (term: string) => void
}

export default function BlogSearch({ onSearch }: BlogSearchProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(searchTerm)
    }, 500)

    return () => clearTimeout(timer)
  }, [searchTerm, onSearch])

  const handleClear = () => {
    setSearchTerm('')
    onSearch('')
  }

  return (
    <div className="relative max-w-2xl mx-auto">
      <div className={`relative flex items-center bg-white/20 backdrop-blur-sm border-2 rounded-2xl transition-all duration-300 ${
        isFocused 
          ? 'border-[#6B9071]/50 shadow-lg shadow-[#6B9071]/10' 
          : 'border-white/30 hover:border-white/50'
      }`}>
        {/* Search Icon */}
        <div className="absolute left-4 text-white/70">
          <Search className="w-5 h-5" />
        </div>

        {/* Input */}
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search articles, topics, or authors..."
          className="w-full pl-12 pr-12 py-4 bg-transparent text-white placeholder-white/70 focus:outline-none text-lg"
        />

        {/* Clear Button */}
        {searchTerm && (
          <button
            onClick={handleClear}
            className="absolute right-4 p-1 text-white/70 hover:text-white transition-colors duration-200"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Search Suggestions */}
      {isFocused && searchTerm && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-sm border border-[#6B9071]/20 rounded-xl shadow-2xl z-10">
          <div className="p-4">
            <p className="text-sm text-[#2E3A24]/70">
              Press Enter to search for "{searchTerm}"
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
