import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projetos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projetos' }),
  schema: z.object({
    title: z.string(),
    titleEn: z.string(),
    summary: z.string(),
    summaryEn: z.string(),
    date: z.coerce.number(),
    labels: z.array(z.string()),
    featured: z.boolean().default(false),
    category: z.enum(['devops', 'backend']).default('devops'),
    /** professional = entrega em ambiente de trabalho; lab = estudo/homelab */
    context: z.enum(['professional', 'lab']).default('lab'),
    /** Menor = mais alto na lista (dentro do mesmo contexto) */
    order: z.number().default(100),
    repo: z.string().url().optional(),
    image: z.string().optional(),
  }),
});

const escritos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/escritos' }),
  schema: z.object({
    title: z.string(),
    titleEn: z.string().optional(),
    date: z.coerce.date(),
    labels: z.array(z.string()).default([]),
    published: z.boolean().default(true),
  }),
});

export const collections = { projetos, escritos };
