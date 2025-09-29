"use client"

import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import { BlogImage, CalloutBox, ImageGallery } from "../../../src/app/types/blog"

interface BlogContentProps {
  content: any[]
}

// Custom components for Portable Text
const components = {
  types: {
    image: ({ value }: { value: BlogImage }) => {
      const imageUrl = urlFor(value).width(800).height(600).url()
      
      const getImageClasses = (layout?: string) => {
        const baseClasses = "rounded-xl overflow-hidden border border-[#2E3A24]/20"
        
        switch (layout) {
          case 'full-width':
            return `${baseClasses} w-full my-8`
          case 'left':
            return `${baseClasses} float-left mr-6 mb-4 w-64 h-48`
          case 'right':
            return `${baseClasses} float-right ml-6 mb-4 w-64 h-48`
          case 'center':
            return `${baseClasses} mx-auto my-8 max-w-2xl`
          default:
            return `${baseClasses} w-full my-8`
        }
      }

      return (
        <div className={getImageClasses(value.layout)}>
          <div className="relative w-full h-64 md:h-80">
            <Image
              src={imageUrl}
              alt={value.alt || 'Blog image'}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
            />
          </div>
          {value.caption && (
            <div className="p-4 text-center">
              <p className="text-sm text-[#2E3A24]/70 italic">{value.caption}</p>
            </div>
          )}
        </div>
      )
    },
    
    callout: ({ value }: { value: CalloutBox }) => {
      const getCalloutStyles = (type: string) => {
        switch (type) {
          case 'tip':
            return 'bg-[#6B9071]/10 border-[#6B9071]/30 text-[#6B9071]'
          case 'warning':
            return 'bg-[#A8B5A2]/10 border-[#A8B5A2]/30 text-[#2E3A24]'
          case 'highlight':
            return 'bg-[#6B9071]/10 border-[#6B9071]/30 text-[#6B9071]'
          case 'info':
            return 'bg-[#A8B5A2]/10 border-[#A8B5A2]/30 text-[#2E3A24]'
          default:
            return 'bg-[#6B9071]/10 border-[#6B9071]/30 text-[#6B9071]'
        }
      }

      return (
        <div className={`my-16 p-6 rounded-xl border backdrop-blur-sm ${getCalloutStyles(value.type)}`}>
          {value.title && (
            <h4 className="font-semibold mb-3 text-lg">{value.title}</h4>
          )}
          <div className="prose prose-invert max-w-none">
            <PortableText value={value.content} />
          </div>
        </div>
      )
    },
    
    imageGallery: ({ value }: { value: ImageGallery }) => {
      const getGalleryClasses = (layout: string) => {
        switch (layout) {
          case 'grid-2x2':
            return 'grid grid-cols-1 md:grid-cols-2 gap-4'
          case 'grid-3x2':
            return 'grid grid-cols-1 md:grid-cols-3 gap-4'
          case 'horizontal':
            return 'flex overflow-x-auto gap-4 pb-4'
          default:
            return 'grid grid-cols-1 md:grid-cols-2 gap-4'
        }
      }

      return (
        <div className="my-8">
          <div className={getGalleryClasses(value.layout)}>
            {value.images.map((image: any, index: number) => (
              <div key={index} className="relative rounded-xl overflow-hidden border border-[#2E3A24]/20">
                <div className="relative w-full h-48">
                  <Image
                    src={urlFor(image).width(400).height(300).url()}
                    alt={image.alt || `Gallery image ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                {image.caption && (
                  <div className="p-3 text-center">
                    <p className="text-sm text-[#2E3A24]/70">{image.caption}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )
    }
  },
  
  block: {
    h1: ({ children }: { children: React.ReactNode }) => (
      <h1 className="text-4xl font-bold text-[#2E3A24] mt-12 mb-6">{children}</h1>
    ),
    h2: ({ children }: { children: React.ReactNode }) => (
      <h2 className="text-3xl font-bold text-[#2E3A24] mt-10 mb-4">{children}</h2>
    ),
    h3: ({ children }: { children: React.ReactNode }) => (
      <h3 className="text-2xl font-bold text-[#2E3A24] mt-8 mb-3">{children}</h3>
    ),
    h4: ({ children }: { children: React.ReactNode }) => (
      <h4 className="text-xl font-bold text-[#2E3A24] mt-6 mb-2">{children}</h4>
    ),
    normal: ({ children }: { children: React.ReactNode }) => (
      <p className="text-[#2E3A24]/80 leading-relaxed mb-6 text-lg">{children}</p>
    ),
    blockquote: ({ children }: { children: React.ReactNode }) => (
      <blockquote className="border-l-4 border-[#6B9071]/50 pl-6 my-8 italic text-[#2E3A24]/70 text-lg">
        {children}
      </blockquote>
    )
  },
  
  list: {
    bullet: ({ children }: { children: React.ReactNode }) => (
      <ul className="list-disc list-inside space-y-2 mb-6 text-[#2E3A24]/80">
        {children}
      </ul>
    ),
    number: ({ children }: { children: React.ReactNode }) => (
      <ol className="list-decimal list-inside space-y-2 mb-6 text-[#2E3A24]/80">
        {children}
      </ol>
    )
  },
  
  listItem: ({ children }: { children: React.ReactNode }) => (
    <li className="text-lg leading-relaxed">{children}</li>
  ),
  
  marks: {
    strong: ({ children }: { children: React.ReactNode }) => (
      <strong className="font-bold text-[#2E3A24]">{children}</strong>
    ),
    em: ({ children }: { children: React.ReactNode }) => (
      <em className="italic text-[#2E3A24]">{children}</em>
    ),
    code: ({ children }: { children: React.ReactNode }) => (
      <code className="bg-[#2E3A24]/10 text-[#6B9071] px-2 py-1 rounded text-sm font-mono">
        {children}
      </code>
    ),
    link: ({ value, children }: { value: any; children: React.ReactNode }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#6B9071] hover:text-[#6B9071]/80 underline transition-colors duration-200"
      >
        {children}
      </a>
    )
  }
}

export default function BlogContent({ content }: BlogContentProps) {
  return (
    <article className="prose prose-invert max-w-none">
      <PortableText value={content} components={components as any} />
    </article>
  )
}
