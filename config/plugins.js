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