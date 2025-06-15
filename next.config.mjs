/** @type {import('next').NextConfig} */
const nextConfig = {
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cleverwebPythonVersion.s3.us-west-002.backblazeb2.com',
        pathname: '**',
      },
    ],
  },
}

export default nextConfig
