'use client'

/**
 * 语言管理Hook
 * 提供语言切换、翻译文本获取等功能
 * 
 * @deprecated 请使用 useLanguageContext 替代此Hook
 * 此文件保留用于向后兼容，实际功能已迁移到 LanguageContext
 */

// 重新导出新的Hook以保持向后兼容
export { useLanguageContext as useLanguage } from '@/lib/languageContext'
