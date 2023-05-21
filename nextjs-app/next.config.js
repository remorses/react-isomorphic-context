/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/slug1',
                permanent: false,
            },
        ]
    },
}

module.exports = nextConfig
