// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: {enabled: true},
    modules: [
        'nuxt-skew-protection',
        'nuxt-og-image',
        'nuxt-link-checker',
        '@nuxt/image',
        '@nuxt/fonts',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/sitemap',
        '@nuxtjs/robots',
        '@nuxt/content',
        'vue3-carousel-nuxt'
    ],
    app: {
        baseURL: '/',
        pageTransition: {name: 'page', mode: 'out-in'},
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
        url: "https://cedriccolin.fr",
        name: "Cédric COLIN | Portfolio",
        description: "Portfolio de Cédric COLIN, Développeur FullStack. Je transforme des problèmes complexes en applications fonctionnelles et robustes.",
        defaultLocale: "fr",
        locale: "fr"
    },
    router: {
        options: {
            scrollBehaviorType: 'smooth'
        }
    },
    fonts: {
        families: [
            {
                name: 'Nunito',
                provider: 'google',
                weights: ['200', '300', '400', '500', '600', '700', '800', '900'],
                styles: ['italic', 'normal']
            }
        ],
        defaults: {
            fallbacks: {
                'sans-serif': ['Nunito', 'Arial', 'sans-serif'],
            }
        }
    }
});