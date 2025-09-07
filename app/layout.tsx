import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/lib/languageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://formatvardump.com'),
  title: 'PHP var_dump 格式化工具 - 在线调试助手',
  description: '专业的PHP var_dump输出格式化工具，支持语法高亮、折叠展开、类型识别等功能，让调试更简单高效。',
  keywords: 'PHP, var_dump, 格式化, 调试, 在线工具, 代码高亮',
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
    title: 'PHP var_dump 格式化工具 - 在线调试助手',
    description: '专业的PHP var_dump输出格式化工具，支持语法高亮、折叠展开、类型识别等功能，让调试更简单高效。',
    siteName: 'FormatVarDump',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PHP var_dump 格式化工具',
    description: '专业的PHP var_dump输出格式化工具，让调试更简单高效。',
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
  return (
    <html lang="zh-CN">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://formatvardump.com" />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
