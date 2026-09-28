/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: "/blog/acne-treatment-vadodara",
        destination: "/blog/acne-treatment",
        permanent: true,
      },
      {
        source: "/blog/hair-fall-treatment-vadodara",
        destination: "/blog/hair-fall-treatment",
        permanent: true,
      },
      {
        source: "/blog/pigmentation-treatment-vadodara",
        destination: "/blog/pigmentation-treatment",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
