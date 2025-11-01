import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/lib/languageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://formatvardump.com'),
  // SEO优化的标题：包含关键词，长度控制在50-60字符，末尾添加域名
  title: 'PHP var_dump格式化工具 - formatvardump.com',
  // SEO优化的描述：控制在150-160字符，包含关键词，自然流畅，有行动提示
  description: '专业的PHP var_dump输出格式化工具，在线免费使用。支持语法高亮、折叠展开、类型识别、数组对象解析等功能，让PHP调试更简单高效。无需注册，即时使用，帮助开发者快速理解和分析var_dump输出结果。',
  keywords: 'PHP, var_dump, 格式化, 调试, 在线工具, 代码高亮, 数组解析, 对象解析, PHP调试工具',
  authors: [{ name: 'FormatVarDump' }],
  creator: 'FormatVarDump',
  publisher: 'FormatVarDump',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://formatvardump.com',
    title: 'PHP var_dump格式化工具 - formatvardump.com',
    description: '专业的PHP var_dump输出格式化工具，在线免费使用。支持语法高亮、折叠展开、类型识别、数组对象解析等功能，让PHP调试更简单高效。无需注册，即时使用。',
    siteName: 'FormatVarDump',
    // 添加Open Graph图片（使用默认的og图片或创建后替换）
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PHP var_dump格式化工具',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PHP var_dump格式化工具 - formatvardump.com',
    description: '专业的PHP var_dump输出格式化工具，在线免费使用。支持语法高亮、折叠展开、类型识别等功能，让PHP调试更简单高效。',
    images: ['/og-image.png'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // 结构化数据 (Schema.org) - WebApplication类型
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'PHP var_dump格式化工具',
    description: '专业的PHP var_dump输出格式化工具，在线免费使用。支持语法高亮、折叠展开、类型识别、数组对象解析等功能，让PHP调试更简单高效。',
    url: 'https://formatvardump.com',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: [
      'PHP var_dump输出格式化',
      '语法高亮显示',
      '交互式折叠展开',
      '类型识别',
      '数组对象解析',
      '在线免费使用',
    ],
    author: {
      '@type': 'Organization',
      name: 'FormatVarDump',
    },
  }

  return (
    <html lang="zh-CN">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://formatvardump.com" />
        {/* 添加结构化数据 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
