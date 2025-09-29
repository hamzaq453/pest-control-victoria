import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { client, blogQueries, urlFor } from '@/lib/sanity'
import BlogDetailPage from '@/components/blog/BlogDetailPage'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await client.fetch(blogQueries.getPostBySlug, { slug })

  if (!post) {
    return {
      title: 'Post Not Found | Pest Free Victoria',
      description: 'The requested blog post could not be found.'
    }
  }

  return {
    title: post.seo?.metaTitle || post.title,
    description: post.seo?.metaDescription || post.excerpt,
    keywords: post.seo?.keywords?.join(', '),
    authors: post.author ? [{ name: post.author.name }] : undefined,
    openGraph: {
      title: post.social?.socialTitle || post.seo?.metaTitle || post.title,
      description: post.social?.socialDescription || post.seo?.metaDescription || post.excerpt,
      images: post.social?.socialImage ? [
        {
          url: urlFor(post.social.socialImage).width(1200).height(630).url(),
          width: 1200,
          height: 630,
          alt: post.title
        }
      ] : post.featuredImage ? [
        {
          url: urlFor(post.featuredImage).width(1200).height(630).url(),
          width: 1200,
          height: 630,
          alt: post.featuredImage.alt || post.title
        }
      ] : undefined,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: post.author ? [post.author.name] : undefined,
      tags: post.tags
    },
    twitter: {
      card: 'summary_large_image',
      title: post.social?.socialTitle || post.seo?.metaTitle || post.title,
      description: post.social?.socialDescription || post.seo?.metaDescription || post.excerpt,
      images: post.social?.socialImage ? [urlFor(post.social.socialImage).width(1200).height(630).url()] : 
              post.featuredImage ? [urlFor(post.featuredImage).width(1200).height(630).url()] : undefined
    },
    alternates: {
      canonical: post.seo?.canonicalUrl || `https://pestfreevictoria.com.au/blog/${slug}`
    }
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await client.fetch(blogQueries.getPostBySlug, { slug })

  if (!post) {
    notFound()
  }

  // Fetch related posts
  const relatedPosts = await client.fetch(blogQueries.getRelatedPosts, { 
    currentSlug: slug 
  })

  return (
    <BlogDetailPage 
      post={post} 
      relatedPosts={relatedPosts}
    />
  )
}
