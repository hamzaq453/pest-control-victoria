"use client"

import { useState, useEffect } from 'react'
import { BlogPost } from "../../../src/app/types/blog"
import BlogContent from './BlogContent'
import BlogHeader from './BlogHeader'
import RelatedPosts from './RelatedPosts'
import ReadingProgress from './ReadingProgress'

interface BlogDetailPageProps {
  post: BlogPost
  relatedPosts: BlogPost[]
}

export default function BlogDetailPage({ post, relatedPosts }: BlogDetailPageProps) {
  const [readingProgress, setReadingProgress] = useState(0)

  // Calculate reading progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setReadingProgress(Math.min(progress, 100))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Reading Progress Bar */}
      <ReadingProgress progress={readingProgress} />

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

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <BlogHeader post={post} />
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F7F3E9]">
        <div className="max-w-4xl mx-auto">
          <BlogContent content={post.content} />
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <RelatedPosts posts={relatedPosts} />
          </div>
        </section>
      )}
    </div>
  )
}
