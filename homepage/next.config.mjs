/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: '.next',
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