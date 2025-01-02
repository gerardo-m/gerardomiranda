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