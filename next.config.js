const fs = require("fs")

module.exports = {
    poweredByHeader: false,
    generateEtags: false,
    async rewrites() {
        return [
            {
                source: '/privacy',
                destination: '/legal/privacy'
            },
            {
                source: '/discord',
                destination: 'https://discord.gg/MTFcPZwaEC'
            }
        ]
    },
    async headers() {
        return [
          {
            source: '/:path*',
            headers: [
              {
                key: 'Access-Control-Allow-Origin',
                value: '*',
              },
              {
                key: 'Permissions-Policy',
                value: 'interest-cohort=()'
              }
            ],
          },
        ]
      },
}
