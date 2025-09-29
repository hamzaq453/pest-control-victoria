'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.tsx` route
 */

import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import './studio.css'

export default defineConfig({
  name: 'default',
  title: 'Pest Control Victoria',
  
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  
  basePath: '/studio',
  
  plugins: [
    deskTool(),
    visionTool(),
  ],
  
  schema: {
    types: schemaTypes,
  },
})
