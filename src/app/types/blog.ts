export interface BlogPost {
  _id: string
  title: string
  slug: {
    current: string
  }
  excerpt?: string
  content: any[]
  featuredImage?: {
    asset: {
      _ref: string
    }
    alt?: string
  }
  publishedAt: string
  readingTime?: number
  featured?: boolean
  category?: Category
  author?: Author
  tags?: string[]
  seo?: SEO
  social?: Social
}

export interface Category {
  _id: string
  title: string
  slug: {
    current: string
  }
  description?: string
  color?: string
  icon?: string
}

export interface Author {
  _id: string
  name: string
  slug: {
    current: string
  }
  image?: {
    asset: {
      _ref: string
    }
    alt?: string
  }
  bio?: string
  role?: string
  social?: {
    twitter?: string
    linkedin?: string
    github?: string
  }
}

export interface SEO {
  metaTitle?: string
  metaDescription?: string
  keywords?: string[]
  canonicalUrl?: string
}

export interface Social {
  socialTitle?: string
  socialDescription?: string
  socialImage?: {
    asset: {
      _ref: string
    }
  }
}

export interface BlogImage {
  asset: {
    _ref: string
  }
  alt?: string
  layout?: 'default' | 'full-width' | 'left' | 'right' | 'center'
  caption?: string
}

export interface CalloutBox {
  _type: 'callout'
  type: 'tip' | 'warning' | 'highlight' | 'info'
  title?: string
  content: any[]
}

export interface ImageGallery {
  _type: 'imageGallery'
  images: BlogImage[]
  layout: 'grid-2x2' | 'grid-3x2' | 'horizontal'
}

export interface BlogFilters {
  category?: string
  search?: string
  tags?: string[]
  featured?: boolean
}

export interface BlogPagination {
  currentPage: number
  totalPages: number
  totalPosts: number
  postsPerPage: number
}
