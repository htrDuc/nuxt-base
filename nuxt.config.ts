// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        '@pinia/nuxt',
        '@nuxtjs/eslint-module',
        '@nuxtjs/tailwindcss',
        '@nuxt/image',
        '@vee-validate/nuxt',
    ],
    css: ['~/assets/css/main.css'],
    app: {
        head: {
            title: 'Nuxt Base',
            meta: [
                {
                    name: 'description',
                    content: 'Nuxt base created from ducht',
                },
            ],
        },
    },
    hooks: {
        'components:dirs': (dirs) => {
            dirs.unshift({
                path: '~/components/ui',
                // this is required else Nuxt will autoImport `.ts` file
                extensions: ['.vue'],
                // prefix for your components, eg: UiButton
                prefix: 'Ui',
                // prevent adding another prefix component by it's path.
                pathPrefix: false,
            })
        },
    },
})
