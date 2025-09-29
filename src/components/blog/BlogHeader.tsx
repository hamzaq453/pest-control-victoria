"use client"

import Image from 'next/image'
import { BlogPost } from "../../../src/app/types/blog"
import { urlFor, formatDate } from '@/lib/sanity'

interface BlogHeaderProps {
  post: BlogPost
}

export default function BlogHeader({ post }: BlogHeaderProps) {
  const imageUrl = post.featuredImage 
    ? urlFor(post.featuredImage).width(1200).height(600).url()
    : '/placeholder-blog.jpg'

  return (
    <div className="text-center">
      {/* Category Badge */}
      {post.category && (
        <div className="mb-6">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-[#2E3A24]/90 text-[#F7F3E9] backdrop-blur-sm">
            {post.category.title}
          </span>
        </div>
      )}

      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
        {post.title}
      </h1>

      {/* Excerpt */}
      {post.excerpt && (
        <p className="text-xl text-white/95 max-w-3xl mx-auto mb-8 leading-relaxed drop-shadow-md">
          {post.excerpt}
        </p>
      )}

      {/* Meta Information */}
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-12">
        {/* Author */}
        {post.author && (
          <div className="flex items-center space-x-3">
            {post.author.image && (
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
                <Image
                  src={urlFor(post.author.image).width(48).height(48).url()}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="text-left">
              <p className="font-semibold text-white">{post.author.name}</p>
              {post.author.role && (
                <p className="text-sm text-white/80">{post.author.role}</p>
              )}
            </div>
          </div>
        )}

        {/* Date and Reading Time */}
        <div className="flex items-center space-x-4 text-white/80">
          <time className="text-sm">
            {formatDate(post.publishedAt)}
          </time>
          {post.readingTime && (
            <span className="flex items-center space-x-1 text-sm">
              <span>📖</span>
              <span>{post.readingTime} min read</span>
            </span>
          )}
        </div>
      </div>

      {/* Featured Image */}
      {post.featuredImage && (
        <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden border border-white/20">
          <Image
            src={imageUrl}
            alt={post.featuredImage.alt || post.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#2E3A24]/20 via-transparent to-transparent"></div>
        </div>
      )}

      {/* Tags */}
      {post.tags && post.tags.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#A8B5A2]/20 text-[#F7F3E9] border border-[#A8B5A2]/30"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
