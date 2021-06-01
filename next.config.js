module.exports = {
    target:'serverless',
    i18n: {
        locales: ['en-US', 'pt-BR', 'es'],
        defaultLocale: 'pt-BR',
        // This is a list of locale domains and the default locale they
        // should handle (these are only required when setting up domain routing)
        // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
        // domains: [
        //     {
        //         domain: 'example.com',
        //         defaultLocale: 'pt-BR',
        //     },
        //     {
        //         domain: 'example.en',
        //         defaultLocale: 'en-US',
        //     },
        //     {
        //         domain: 'example.es',
        //         defaultLocale: 'es',
        //     },
        // ],
    },
}