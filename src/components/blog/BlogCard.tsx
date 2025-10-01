"use client"

import Link from 'next/link'
import Image from 'next/image'
import { BlogPost } from "../../../src/app/types/blog"
import { urlFor, formatDate } from '@/lib/sanity'

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  const imageUrl = post.featuredImage 
    ? urlFor(post.featuredImage).width(400).height(250).url()
    : '/placeholder-blog.jpg'

  return (
    <Link href={`/blog/${post.slug.current}`}>
      <article className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
        {/* Featured Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={imageUrl}
            alt={post.featuredImage?.alt || post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          
          {/* Category Badge */}
          {post.category && (
            <div className="absolute top-4 left-4">
              <span className="inline-block bg-[#2E3A24]/90 text-[#F7F3E9] px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                {post.category.title}
              </span>
            </div>
          )}
          
          {/* Featured Badge */}
          {post.featured && (
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#6B9071] text-white">
                Featured
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Meta Information */}
          <div className="flex items-center justify-between text-sm text-[#2E3A24]/60 mb-3">
            <div className="flex items-center space-x-4">
              {post.author && (
                <div className="flex items-center space-x-2">
                  {post.author.image && (
                    <div className="relative w-6 h-6 rounded-full overflow-hidden">
                      <Image
                        src={urlFor(post.author.image).width(24).height(24).url()}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <span className="text-[#2E3A24]/70">{post.author.name}</span>
                </div>
              )}
            </div>
            
            <div className="flex items-center space-x-3">
              {post.readingTime && (
                <span className="flex items-center space-x-1">
                  <span>📖</span>
                  <span>{post.readingTime} min read</span>
                </span>
              )}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-[#2E3A24] mb-3 line-clamp-2 group-hover:text-[#6B9071] transition-colors duration-300">
            {post.title}
          </h3>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="text-[#2E3A24]/70 text-sm line-clamp-3 mb-4">
              {post.excerpt}
            </p>
          )}

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-[#A8B5A2]/20 text-[#6B9071] border border-[#A8B5A2]/30"
                >
                  {tag}
                </span>
              ))}
              {post.tags.length > 3 && (
                <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-[#2E3A24]/10 text-[#2E3A24]/60">
                  +{post.tags.length - 3} more
                </span>
              )}
            </div>
          )}

          {/* Date */}
          <div className="flex items-center justify-between">
            <time className="text-sm text-[#2E3A24]/50">
              {formatDate(post.publishedAt)}
            </time>
            
            {/* Read More Arrow */}
            <div className="flex items-center space-x-1 text-[#6B9071] group-hover:translate-x-1 transition-transform duration-300">
              <span className="text-sm font-medium">Read more</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Hover Effect Border */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#6B9071]/20 transition-all duration-300 pointer-events-none"></div>
      </article>
    </Link>
  )
}
