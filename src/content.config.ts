import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: z.object({
    client: z.string(),
    // The spot or piece name, e.g. "Join In". Leave '' when the client name says it all.
    title: z.string().default(''),
    // What it is, shown in small caps on the card: "Commercial :30", "Music video", "Brand film".
    format: z.string(),
    // Your role on it. Shown on the card and used by the sort buttons. '' for none (e.g. a photo series).
    role: z.enum(['Director & DP', 'DP', 'Director', '']).default(''),
    // Extra words the sort buttons match on, e.g. ["Music videos"] or ["Personal"].
    tags: z.array(z.string()).default([]),
    // As many credit lines as you like, in order: [Role, Name].
    credits: z.array(z.tuple([z.string(), z.string()])).default([]),
    // Vimeo video ID (the number in vimeo.com/123456789), or 123456789/abc123 for an unlisted one. '' shows the still.
    vimeo: z.string().default(''),
    // More spots from the same job, each with its own player.
    more: z.array(z.object({ title: z.string(), vimeo: z.string() })).default([]),
    // The card still, 16:9.
    image: z.string(),
    // Optional silent loop (.mp4 in public/video/). Plays on hover on the card and up top on the project page.
    loop: z.string().optional(),
    // Frames for the gallery on the project page, in order.
    stills: z.array(z.string()).default([]),
    order: z.number(),
    // Show on the home page. Every project gets its own page either way.
    featured: z.boolean().default(false),
  }),
});

export const collections = { projects };
