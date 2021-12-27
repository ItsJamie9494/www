import fs from 'fs'
import image from 'imagemagick'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Changing directory to /public
process.chdir(path.resolve(__dirname, 'public'))

// Icon must be in /public/assets/logo.jpg
const icon = path.resolve(process.cwd(), 'assets', 'logo.jpg')
const iconStream = fs.createReadStream(icon)

const ConversionList = [
    {
        name: 'favicon.ico',
        size: '96x96',
    },
    {
        name: 'favicon-16x16.png',
        size: '16x16',
    },
    {
        name: 'favicon-32x32.png',
        size: '32x32',
    },
    {
        name: 'android-chrome-192x192.png',
        size: '192x192',
    },
    {
        name: 'android-chrome-512x512.png',
        size: '512x512',
    },
    {
        name: 'apple-touch-icon.png',
        size: '180x180',
    },
]

// Perform conversions
iconStream.on('data', (buffer) => {
    console.log('Converting image to favicons...')
    ConversionList.map((resize) => {
        image.convert(
            [icon, '-resize', resize.size, resize.name],
            (err, stdout) => {
                if (err) throw err
            }
        )
    })
})

iconStream.on('end', () => {
    console.log('Favicons saved. Remember to commit the new favicons')
})
