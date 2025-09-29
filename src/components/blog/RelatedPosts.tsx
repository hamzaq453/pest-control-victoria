"use client"

import Link from 'next/link'
import Image from 'next/image'
import { BlogPost } from "../../../src/app/types/blog"
import { urlFor, formatDate } from '@/lib/sanity'

interface RelatedPostsProps {
  posts: BlogPost[]
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2E3A24] mb-4">
          Related Articles
        </h2>
        <p className="text-[#2E3A24]/70 text-lg max-w-2xl mx-auto">
          Explore more pest control insights and expert advice
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link key={post._id} href={`/blog/${post.slug.current}`}>
            <article className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              {/* Featured Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.featuredImage 
                    ? urlFor(post.featuredImage).width(400).height(250).url()
                    : '/placeholder-blog.jpg'
                  }
                  alt={post.featuredImage?.alt || post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Category Badge */}
                {post.category && (
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-[#2E3A24]/90 text-[#F7F3E9] backdrop-blur-sm">
                      {post.category.title}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-[#2E3A24] mb-3 line-clamp-2 group-hover:text-[#6B9071] transition-colors duration-300">
                  {post.title}
                </h3>

                {/* Excerpt */}
                {post.excerpt && (
                  <p className="text-[#2E3A24]/70 text-sm line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                )}

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-[#2E3A24]/50">
                  <time>{formatDate(post.publishedAt)}</time>
                  {post.readingTime && (
                    <span className="flex items-center space-x-1">
                      <span>📖</span>
                      <span>{post.readingTime} min</span>
                    </span>
                  )}
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {/* View All Posts Button */}
      <div className="text-center mt-12">
        <Link 
          href="/blog"
          className="inline-flex items-center px-6 py-3 rounded-full bg-[#6B9071]/10 text-[#6B9071] border border-[#6B9071]/30 hover:bg-[#6B9071]/20 hover:border-[#6B9071]/50 transition-all duration-300 font-medium"
        >
          View All Posts
          <svg
            className="ml-2 w-4 h-4"
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
        </Link>
      </div>
    </section>
  )
}
