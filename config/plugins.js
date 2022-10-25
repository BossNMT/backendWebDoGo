module.exports = () => {
    return {
        ckeditor: true,
        email: {
            config: {
                provider: 'sendgrid',
                providerOptions: {
                    apiKey: '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',
                },
                settings: {
                    defaultFrom: 'checkpass2k3@gmail.com',
                    defaultReplyTo: 'checkpass2k3@gmail.com',
                },
            },
        },
    }
}