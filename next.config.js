const fs = require("fs")

module.exports = {
    poweredByHeader: false,
    generateEtags: false,
    async rewrites() {
        return [
            {
                source: '/privacy',
                destination: '/legal/privacy'
            }
        ]
    },
}
