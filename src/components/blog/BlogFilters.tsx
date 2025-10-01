"use client"

import { Category } from "../../../src/app/types/blog"
import { Filter } from 'lucide-react'

interface BlogFiltersProps {
  categories: Category[]
  selectedCategory: string
  onCategoryChange: (categorySlug: string) => void
}

export default function BlogFilters({ 
  categories, 
  selectedCategory, 
  onCategoryChange 
}: BlogFiltersProps) {
  const getCategoryColor = (color?: string) => {
    switch (color) {
      case 'purple':
        return 'bg-[#6B9071]/20 text-[#6B9071] border-[#6B9071]/30'
      case 'blue':
        return 'bg-[#A8B5A2]/20 text-[#A8B5A2] border-[#A8B5A2]/30'
      case 'green':
        return 'bg-[#2E3A24]/20 text-[#2E3A24] border-[#2E3A24]/30'
      case 'orange':
        return 'bg-[#6B9071]/20 text-[#6B9071] border-[#6B9071]/30'
      case 'red':
        return 'bg-[#A8B5A2]/20 text-[#A8B5A2] border-[#A8B5A2]/30'
      case 'pink':
        return 'bg-[#6B9071]/20 text-[#6B9071] border-[#6B9071]/30'
      default:
        return 'bg-[#6B9071]/20 text-[#6B9071] border-[#6B9071]/30'
    }
  }

  return (
    <div className="w-full">
      {/* Filter Header */}
      <div className="flex items-center justify-center mb-6">
        <div className="flex items-center space-x-2 text-white/80">
          <Filter className="w-5 h-5" />
          <span className="text-sm font-medium">Filter by category</span>
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3">
        {/* All Categories Button */}
        <button
          onClick={() => onCategoryChange('')}
          className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-105 ${
            selectedCategory === ''
              ? 'bg-[#6B9071]/20 text-[#6B9071] border-[#6B9071]/30 shadow-lg shadow-[#6B9071]/10'
              : 'bg-white/20 text-white/90 border-white/30 hover:border-[#6B9071]/50 hover:text-[#6B9071]'
          }`}
        >
          All Posts
        </button>

        {/* Category Buttons */}
        {categories.map((category) => (
          <button
            key={category._id}
            onClick={() => onCategoryChange(category.slug?.current || '')}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-105 ${
              selectedCategory === category.slug?.current
                ? `${getCategoryColor(category.color)} shadow-lg shadow-[#6B9071]/10`
                : 'bg-white/20 text-white/90 border-white/30 hover:border-[#6B9071]/50 hover:text-[#6B9071]'
            }`}
          >
            {category.title}
          </button>
        ))}
      </div>

      {/* Active Filter Indicator */}
      {selectedCategory && (
        <div className="mt-4 text-center">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#6B9071]/20 text-[#F7F3E9] border border-[#6B9071]/30">
            Showing posts from: {categories.find(c => c.slug.current === selectedCategory)?.title}
          </span>
        </div>
      )}
    </div>
  )
}
