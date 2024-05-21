/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: '_next',
    async redirects() {
        return [
            {
                source: '/',
                destination: '/landing',
                permanent: true,
            },
        ]
    },
}

export default nextConfig;