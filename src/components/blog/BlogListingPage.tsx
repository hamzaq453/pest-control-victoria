"use client"

import { useState, useEffect, useMemo, useCallback } from 'react'
import { BlogPost, Category } from "../../../src/app/types/blog"
import BlogCard from './BlogCard'
import BlogSearch from './BlogSearch'
import BlogFilters from './BlogFilters'
import BlogPagination from './BlogPagination'

interface BlogListingPageProps {
  initialPosts: BlogPost[]
  categories: Category[]
}

const POSTS_PER_PAGE = 9

export default function BlogListingPage({ initialPosts, categories }: BlogListingPageProps) {
  const [posts] = useState<BlogPost[]>(initialPosts)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  // Filter posts locally based on search and category
  const filteredPosts = useMemo(() => {
    let filtered = posts

    // Filter by search term
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase()
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(term) ||
        (post.excerpt && post.excerpt.toLowerCase().includes(term)) ||
        post.tags?.some((tag: string) => tag.toLowerCase().includes(term)) ||
        (post.category?.title && post.category.title.toLowerCase().includes(term))
      )
    }

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(post => 
        post.category?.slug?.current === selectedCategory
      )
    }

    return filtered
  }, [posts, searchTerm, selectedCategory])

  // Calculate pagination
  const totalPages = useMemo(() => {
    return Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  }, [filteredPosts.length])

  // Get current page posts
  const currentPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE
    const endIndex = startIndex + POSTS_PER_PAGE
    return filteredPosts.slice(startIndex, endIndex)
  }, [filteredPosts, currentPage])

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm, selectedCategory])

  // Handle search with debouncing
  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term)
  }, [])

  // Handle category filter
  const handleCategoryFilter = useCallback((categorySlug: string) => {
    setSelectedCategory(categorySlug)
  }, [])

  // Handle page change
  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#4A7C59] via-[#2E5D3A] to-[#1A3D1F] overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, #FFFFFF 1px, transparent 1px),
              linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#7FB069]/30 to-[#A8D5BA]/30 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-[#FFFFFF]/20 to-[#7FB069]/20 rounded-full blur-lg"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-[#A8D5BA]/25 to-[#F7F3E9]/40 rounded-full blur-md"></div>
          <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-gradient-to-br from-[#7FB069]/20 to-[#FFFFFF]/15 rounded-full blur-lg"></div>
        </div>

        {/* Subtle Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-[#1A3D1F]/40"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Pest Control <span className="text-[#A8D5BA]">Blog</span>
            </h1>
            <p className="text-xl text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Expert pest control tips, prevention guides, and industry insights. 
              Stay informed with our professional pest management advice and solutions.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto space-y-6">
            <BlogSearch onSearch={handleSearch} />
            <BlogFilters 
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryFilter}
            />
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-[#F7F3E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {currentPosts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 transition-all duration-500 ease-out">
                {currentPosts.map((post, index) => (
                  <div 
                    key={`${post._id}-${currentPage}`}
                    className="animate-in fade-in-0 slide-in-from-bottom-4"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <BlogCard post={post} />
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <BlogPagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              )}
            </>
          ) : (
            <div className="text-center py-20">
              <div className="w-16 h-16 bg-[#6B9071] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[#2E3A24] mb-2">
                No posts found
              </h3>
              <p className="text-[#2E3A24]/70">
                {searchTerm || selectedCategory 
                  ? 'Try adjusting your search or filters'
                  : 'Check back soon for new content'
                }
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
