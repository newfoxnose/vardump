'use client'

import React, { useState, useEffect, useRef } from 'react'
import { useLanguageContext } from '@/lib/languageContext'
import { Language } from '@/lib/i18n'

interface LanguageSwitcherProps {
  className?: string
  variant?: 'default' | 'compact' | 'minimal'
  showLabel?: boolean
}

/**
 * 语言切换组件
 * 提供语言选择下拉菜单，支持多种显示模式
 */
export default function LanguageSwitcher({ 
  className = '',
  variant = 'default',
  showLabel = true
}: LanguageSwitcherProps) {
  const { language, changeLanguage, getSupportedLanguages, isLoading } = useLanguageContext()
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  
  const languages = getSupportedLanguages()

  // 确保组件已挂载
  useEffect(() => {
    setMounted(true)
  }, [])

  // 点击外部关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) &&
          buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  // 键盘导航支持
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsOpen(false)
      buttonRef.current?.focus()
    }
  }

  if (!mounted || isLoading) {
    return (
      <div className={`${className} ${getVariantClasses(variant)}`}>
        <div className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-400 bg-gray-100 border border-gray-200 rounded-md">
          <span className="text-lg">🌐</span>
          {showLabel && <span>加载中...</span>}
        </div>
      </div>
    )
  }

  const currentLang = languages.find(lang => lang.code === language) || languages[0]

  const handleLanguageSelect = (selectedLanguage: Language) => {
    if (selectedLanguage !== language) {
      changeLanguage(selectedLanguage)
    }
    setIsOpen(false)
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`relative ${className}`}>
      <button
        ref={buttonRef}
        onClick={toggleDropdown}
        onKeyDown={handleKeyDown}
        className={`
          flex items-center space-x-2 px-3 py-2 text-sm font-medium 
          text-gray-700 bg-white border border-gray-300 rounded-md 
          hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-php-blue 
          focus:border-transparent transition-all duration-200
          ${isOpen ? 'ring-2 ring-php-blue border-php-blue' : ''}
          ${getVariantClasses(variant)}
        `}
        aria-label="切换语言"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="text-lg" role="img" aria-label={currentLang.name}>
          {currentLang.flag}
        </span>
        {showLabel && <span>{currentLang.name}</span>}
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* 背景遮罩 */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          
          {/* 下拉菜单 */}
          <div
            ref={dropdownRef}
            className="absolute right-0 z-20 mt-1 w-56 bg-white border border-gray-200 rounded-md shadow-lg max-h-80 overflow-y-auto"
            role="listbox"
            aria-label="语言选择"
          >
            <div className="py-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageSelect(lang.code)}
                  className={`
                    w-full flex items-center space-x-3 px-4 py-2 text-sm text-left 
                    hover:bg-gray-100 transition-colors duration-150
                    ${language === lang.code 
                      ? 'bg-php-blue text-white hover:bg-blue-600' 
                      : 'text-gray-700 hover:text-gray-900'
                    }
                  `}
                  role="option"
                  aria-selected={language === lang.code}
                >
                  <span className="text-lg" role="img" aria-label={lang.name}>
                    {lang.flag}
                  </span>
                  <span className="flex-1">{lang.name}</span>
                  {language === lang.code && (
                    <>
                      {/* 选中标记图标 - 装饰性图标，已通过周围文本描述，使用aria-hidden */}
                      <svg 
                      className="w-4 h-4" 
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                    </>
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

/**
 * 获取不同变体的样式类
 */
function getVariantClasses(variant: string): string {
  switch (variant) {
    case 'compact':
      return 'px-2 py-1 text-xs'
    case 'minimal':
      return 'px-2 py-1 text-xs border-none bg-transparent hover:bg-gray-100'
    default:
      return ''
  }
}
