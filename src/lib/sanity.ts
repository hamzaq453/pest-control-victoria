import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01', // Use today's date or your preferred version
  useCdn: process.env.NODE_ENV === 'production', // `false` if you want to ensure fresh data
  perspective: 'published',
})

// Image URL builder
const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// GROQ queries for blog posts
export const blogQueries = {
  // Get all blog posts for listing
  getAllPosts: `*[_type == "blogPost" && publishedAt <= now()] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    publishedAt,
    readingTime,
    featured,
    category->{
      title,
      slug,
      color
    },
    author->{
      name,
      image,
      role
    },
    tags
  }`,

  // Get single blog post by slug
  getPostBySlug: `*[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    content,
    featuredImage,
    publishedAt,
    readingTime,
    featured,
    category->{
      title,
      slug,
      color
    },
    author->{
      name,
      image,
      bio,
      role,
      social
    },
    tags,
    seo,
    social
  }`,

  // Get related posts
  getRelatedPosts: `*[_type == "blogPost" && slug.current != $currentSlug && publishedAt <= now()] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    publishedAt,
    readingTime,
    category->{
      title,
      slug,
      color
    },
    author->{
      name,
      image
    }
  }`,

  // Get posts by category
  getPostsByCategory: `*[_type == "blogPost" && category->slug.current == $categorySlug && publishedAt <= now()] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    publishedAt,
    readingTime,
    featured,
    category->{
      title,
      slug,
      color
    },
    author->{
      name,
      image,
      role
    },
    tags
  }`,

  // Search posts
  searchPosts: `*[_type == "blogPost" && publishedAt <= now() && (
    title match $searchTerm + "*" ||
    excerpt match $searchTerm + "*" ||
    tags[] match $searchTerm + "*" ||
    category->title match $searchTerm + "*"
  )] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    publishedAt,
    readingTime,
    featured,
    category->{
      title,
      slug,
      color
    },
    author->{
      name,
      image,
      role
    },
    tags
  }`,

  // Get all categories
  getAllCategories: `*[_type == "category"] | order(title asc) {
    _id,
    title,
    slug,
    description,
    color,
    icon
  }`,

  // Get all authors
  getAllAuthors: `*[_type == "author"] | order(name asc) {
    _id,
    name,
    slug,
    image,
    bio,
    role
  }`
}

// Helper function to calculate reading time
export function calculateReadingTime(content: any[]): number {
  if (!content) return 0
  
  const textBlocks = content.filter(block => block._type === 'block')
  const wordCount = textBlocks.reduce((count, block) => {
    if (block.children) {
      return count + block.children.reduce((childCount: number, child: any) => {
        return childCount + (child.text ? child.text.split(' ').length : 0)
      }, 0)
    }
    return count
  }, 0)
  
  // Average reading speed: 200 words per minute
  return Math.ceil(wordCount / 200)
}

// Helper function to format date
export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
