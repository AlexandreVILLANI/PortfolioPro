import {defineCollection, defineContentConfig, z} from '@nuxt/content';
import {asRobotsCollection} from '@nuxtjs/robots/content';

const projetSchema = z.object({
    title: z.string().min(1),
    path_id: z.string().min(1),
    date: z.string().nullable(),
    image: z.string().min(1),
    description: z.string().min(1),
    category: z.union([
        z.string().transform(val => [val]),
        z.array(z.string())
    ]).pipe(z.array(z.string())),

    technologies: z.array(z.string().min(1)),
    team: z.array(z.string().min(1)),
    project_categories: z.array(z.string().min(1)),
    illustrations: z.array(z.string().min(1)),

    draft: z.boolean().default(false),
    links: z.object({
        github: z.string().url().optional(),
        gitlab: z.string().url().optional(),
        website: z.string().url().optional(),
    }).optional(),
});

const articleSchema = z.object({
    title: z.string().min(1),
    path_id: z.string().min(1),
    date: z.string().nullable(),
});

export default defineContentConfig({
    collections: {

        // --- Collection PROJETS ---
        projects: defineCollection(
            asRobotsCollection({
                type: 'page',
                source: 'projects/**/*.md',
                schema: projetSchema,
            }),
        ),

        // --- Collection ARTICLES ---
        articles: defineCollection(
            asRobotsCollection({
                type: 'page',
                source: 'articles/**/*.md',
                schema: articleSchema,
            }),
        ),
    },
});