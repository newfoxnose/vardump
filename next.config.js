/** @type {import('next').NextConfig} */
const nextConfig = {
  // 静态导出配置 - 用于 Netlify 部署
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  
  // SEO优化配置
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
