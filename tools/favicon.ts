// @ts-ignore custom tsconfig.json used
const path = require('path')
const fs = require('fs')
const image = require('imagemagick')

// Changing directory to /public
process.chdir(path.resolve(__dirname, '..', 'public'))

// Icon must be in /public/assets/logo.png
const icon = path.resolve(process.cwd(), 'assets', 'logo.png')
const iconStream = fs.createReadStream(icon)

// Perform conversions
iconStream.on(
    'data',
    (buffer) => {
        console.log('Converting image to favicons...')
        image.convert([icon, '-resize', '96x96', 'favicon.ico'])
        image.convert([icon, '-resize', '16x16', 'favicon-16x16.png'])
        image.convert([icon, '-resize', '32x32', 'favicon-32x32.png'])
        image.convert([
            icon,
            '-resize',
            '192x192',
            'android-chrome-192x192.png',
        ])
        image.convert([
            icon,
            '-resize',
            '512x512',
            'android-chrome-512x512.png',
        ])
        image.convert([icon, '-resize', '180x180', 'apple-touch-icon.png'])
    },
    (err, stdout) => {
        if (err) throw err
    }
)

iconStream.on('end', () => {
    console.log('Favicons saved. Remember to commit the new favicons')
})
