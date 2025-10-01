import { Metadata } from 'next'
import { client, blogQueries } from '@/lib/sanity'
import BlogListingPage from '@/components/blog/BlogListingPage'

export const metadata: Metadata = {
  title: 'Blog | Pest Free Victoria',
  description: 'Expert pest control tips, prevention guides, and industry insights. Stay informed with our professional pest management advice and solutions.',
  keywords: ['pest control blog', 'pest prevention tips', 'pest management', 'pest control advice', 'pest control solutions', 'Victoria pest control'],
  openGraph: {
    title: 'Blog | Pest Free Victoria',
    description: 'Expert pest control tips, prevention guides, and industry insights.',
    type: 'website',
  },
}

export default async function BlogPage() {
  // Fetch all blog posts
  const posts = await client.fetch(blogQueries.getAllPosts)
  
  // Fetch all categories for filtering
  const categories = await client.fetch(blogQueries.getAllCategories)
  
  return (
    <BlogListingPage 
      initialPosts={posts} 
      categories={categories}
    />
  )
}
