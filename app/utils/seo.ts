// utils/seo.ts

export interface SeoConfig {
    title: string
    description: string
    url?: string
    image?: string
    type?: 'website' | 'article'
    keywords?: string | string[]
    publishedTime?: string
    author?: string
}

/**
 * Configuration SEO par défaut pour le site
 */
export const defaultSeoConfig = {
    siteName: "Alexandre VILLANI | Portfolio",
    author: "Alexandre VILLANI",
    defaultImage: "/og/default.jpg",
    locale: "fr_FR"
}

/**
 * Génère les tags SEO par défaut
 */
export function defaultSeoTags(title: string, description: string) {
    return {
        title,
        description,
        ogTitle: title,
        ogDescription: description,
        twitterTitle: title,
        twitterDescription: description,
    }
}

/**
 * Configure le SEO complet pour une page projet
 */
export function configureProjectSeo(project: {
    title: string
    description: string
    path_id: string
    image?: string
    date?: string | null
    technologies?: string[]
    project_categories?: string[]
    category?: string | string[]
}) {
    const pageTitle = `${project.title} | Alexandre VILLANI`
    const pageDescription = project.description ||
        `Découvrez ${project.title}, un projet réalisé par Alexandre VILLANI, développeur FullStack.`
    const projectUrl = `${defaultSeoConfig.siteUrl}/projects/${project.path_id}`

    const keywords = [
        'Alexandre VILLANI',
        project.title,
        'portfolio',
        'projet',
        'développeur fullstack',
        'développement web',
        ...(project.technologies || []),
        ...(project.project_categories || [])
    ]

    const seoMeta: Record<string, any> = {
        title: pageTitle,
        description: pageDescription,
        ogTitle: pageTitle,
        ogDescription: pageDescription,
        ogType: 'article',
        ogUrl: projectUrl,
        ogImage: project.image || defaultSeoConfig.defaultImage,
        ogSiteName: defaultSeoConfig.siteName,
        twitterCard: 'summary_large_image',
        twitterTitle: pageTitle,
        twitterDescription: pageDescription,
        twitterImage: project.image || defaultSeoConfig.defaultImage,
        keywords: keywords.filter(Boolean).join(', '),
    }

    if (project.date) {
        seoMeta.articlePublishedTime = project.date
    }

    seoMeta.articleAuthor = defaultSeoConfig.author

    return seoMeta
}

/**
 * Configure l'image OG pour un projet
 */
export function configureProjectOgImage(project: {
    title: string
    description: string
    image?: string
    technologies?: string[]
    category?: string | string[]
}) {
    return {
        component: 'ProjectOgImage',
        props: {
            title: project.title,
            description: project.description,
            image: project.image,
            technologies: project.technologies?.slice(0, 5) || [],
            category: Array.isArray(project.category)
                ? project.category[0]
                : project.category
        }
    }
}