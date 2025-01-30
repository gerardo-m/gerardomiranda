import { z, defineCollection } from "astro:content";
import { glob } from 'astro/loaders';

const journalCollection = defineCollection({
  loader: glob({pattern: "**/*.md", base: "./src/content/journal"}),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(['none', 'news']),
    tags: z.array(z.string()),
  }),
});

const experienceCollection = defineCollection({
  loader: glob({pattern: "**/*.md", base: "./src/content/experience"}),
  schema: ({ image }) => z.object({
    company: z.string(),
    location: z.string(),
    position: z.string(),
    startDate: z.string(),
    endDate: z.string().optional(),
    tech: z.string(),
    website: z.string().url(),
    logo: image(),
    order: z.number(),
  }),
});

const projectsCollection = defineCollection({
  loader: glob({pattern: "**/*.md", base: "./src/content/projects"}),
  schema: ({ image }) => z.object({
    name: z.string(),
    tech: z.array(z.string()),
    links: z.array(z.object({
      name: z.string(),
      url: z.string().url(),
    })),
    logo: image(),
    order: z.number().optional(),
  }),
});

export const collections = {
  journal : journalCollection,
  experience: experienceCollection,
  projects: projectsCollection,
}