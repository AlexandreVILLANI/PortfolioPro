// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: {enabled: true},
    
    // Optimisation CSS pour éviter le blocage du rendu (Ton problème de vitesse)
    experimental: {
        inlineSSRStyles: true // Injecte le CSS critique directement dans le HTML
    },
    vite: {
        build: {
            cssCodeSplit: true // Divise le CSS par page pour charger moins de code
        }
    },

    modules: [
        'nuxt-skew-protection',
        'nuxt-og-image',
        'nuxt-link-checker',
        '@nuxt/image',
        '@nuxt/fonts', // Ce module gère auto le téléchargement et l'optimisation
        '@nuxtjs/tailwindcss',
        '@nuxtjs/sitemap',
        '@nuxtjs/robots',
        '@nuxt/content',
        'vue3-carousel-nuxt'
    ],
    app: {
        baseURL: '/',
        pageTransition: {name: 'page', mode: 'out-in'},
        head: {
            // Préchargement pour la vitesse
            link: [
                { rel: 'icon', type: 'image/jpeg', href: '/images/logo.jpg' }
            ]
        }
    },
    nitro: {
        prerender: {
            crawlLinks: true,
            autoSubfolderIndex: false
        }
    },
    image: {
        screens: {
            'xs': 320,
            'sm': 640,
            'md': 768,
            'lg': 1024,
            'xl': 1280,
            'xxl': 1536,
        },
        format: ['webp', 'jpeg', 'png'],
    },
    tailwindcss: {
        config: "./tailwind.config.js",
        editorSupport: true
    },
    robots: {
        blockAiBots: true,
    },
    site: {
        name: "Alexandre VILLANI - Portfolio",
        description: "Portfolio de Alexandre VILLANI, Développeur FullStack. Découvrez mes projets.",
        defaultLocale: "fr",
        locale: "fr"
    },
    router: {
        options: {
            scrollBehaviorType: 'smooth'
        }
    },
    
    // CONFIGURATION DES POLICES (Remplace l'ancien import CSS)
    fonts: {
        families: [
            {
                name: 'Bricolage Grotesque',
                provider: 'google',
                // On charge tous les poids utilisés dans ton design
                weights: ['200', '300', '400', '500', '600', '700', '800'],
            },
            {
                name: 'EB Garamond',
                provider: 'google',
                weights: ['400', '500', '600', '700'],
                styles: ['italic', 'normal']
            }
        ],
        defaults: {
            fallbacks: {
                'sans-serif': ['Bricolage Grotesque', 'Arial', 'sans-serif'],
                'serif': ['EB Garamond', 'Times New Roman', 'serif']
            }
        }
    }
});