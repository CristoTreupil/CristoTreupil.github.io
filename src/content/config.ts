import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    categories: z.array(z.enum(['ilustracion', 'personajes', 'branding', 'tradicional', 'naturaleza', 'editorial', 'retrato', 'experimental'])),
    description: z.string(),
    featured: z.boolean().default(false),
    date: z.date(),
    image: z.string(),
    tags: z.array(z.string()).optional(),
    client: z.string().optional(),
    year: z.number().optional(),
  }),
});

export const collections = {
  'projects': projectsCollection,
};