"use client"

import { ChevronLeft, ChevronRight } from 'lucide-react'

interface BlogPaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function BlogPagination({ 
  currentPage, 
  totalPages, 
  onPageChange 
}: BlogPaginationProps) {
  const getPageNumbers = () => {
    const pages = []
    const maxVisiblePages = 5
    
    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      // Show pages around current page
      let start = Math.max(1, currentPage - 2)
      let end = Math.min(totalPages, currentPage + 2)
      
      // Adjust if we're near the beginning
      if (currentPage <= 3) {
        end = Math.min(totalPages, 5)
      }
      
      // Adjust if we're near the end
      if (currentPage >= totalPages - 2) {
        start = Math.max(1, totalPages - 4)
      }
      
      for (let i = start; i <= end; i++) {
        pages.push(i)
      }
    }
    
    return pages
  }

  const pageNumbers = getPageNumbers()

  return (
    <div className="flex items-center justify-center space-x-2">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`flex items-center space-x-1 px-4 py-2 rounded-lg border transition-all duration-300 ${
          currentPage === 1
            ? 'bg-[#2E3A24]/30 text-[#2E3A24]/30 border-[#2E3A24]/10 cursor-not-allowed'
            : 'bg-white/50 text-[#2E3A24]/70 border-[#2E3A24]/20 hover:bg-[#6B9071]/10 hover:text-[#6B9071] hover:border-[#6B9071]/30 hover:scale-105'
        }`}
      >
        <ChevronLeft className="w-4 h-4" />
        <span className="hidden sm:inline">Previous</span>
      </button>

      {/* Page Numbers */}
      <div className="flex items-center space-x-1">
        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-2 rounded-lg border transition-all duration-300 ${
              page === currentPage
                ? 'bg-[#6B9071]/20 text-[#6B9071] border-[#6B9071]/30 shadow-lg shadow-[#6B9071]/10'
                : 'bg-white/50 text-[#2E3A24]/70 border-[#2E3A24]/20 hover:bg-[#6B9071]/10 hover:text-[#6B9071] hover:border-[#6B9071]/30 hover:scale-105'
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`flex items-center space-x-1 px-4 py-2 rounded-lg border transition-all duration-300 ${
          currentPage === totalPages
            ? 'bg-[#2E3A24]/30 text-[#2E3A24]/30 border-[#2E3A24]/10 cursor-not-allowed'
            : 'bg-white/50 text-[#2E3A24]/70 border-[#2E3A24]/20 hover:bg-[#6B9071]/10 hover:text-[#6B9071] hover:border-[#6B9071]/30 hover:scale-105'
        }`}
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  )
}
