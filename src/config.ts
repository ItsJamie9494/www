export const config = {
    name: 'Trevor Thalacker',
    hostname:
        process.env.NODE_ENV === 'production'
            ? 'trevorthalacker.com'
            : 'localhost:3000',
    description: 'I make computer programs',
    username: 'trevorthalacker',
}

export default config
