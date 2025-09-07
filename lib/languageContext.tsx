'use client'

import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react'
import { Language, getSupportedLanguages, detectLanguage, getTranslation, formatTranslation, getTranslationArray } from './i18n'
import { TranslationKey, ArrayTranslationKey, TranslationParams } from './translations/types'

/**
 * 语言状态接口
 */
interface LanguageState {
  currentLanguage: Language
  isLoading: boolean
  isInitialized: boolean
}

/**
 * 语言动作类型
 */
type LanguageAction = 
  | { type: 'SET_LANGUAGE'; payload: Language }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'INITIALIZE'; payload: Language }

/**
 * 语言上下文接口
 */
interface LanguageContextType {
  // 状态
  language: Language
  isLoading: boolean
  isInitialized: boolean
  
  // 方法
  changeLanguage: (language: Language) => void
  t: (key: TranslationKey, params?: TranslationParams) => string
  tArray: (key: ArrayTranslationKey) => string[]
  
  // 工具方法
  getSupportedLanguages: () => { code: Language; name: string; flag: string }[]
}

/**
 * 语言状态Reducer
 */
function languageReducer(state: LanguageState, action: LanguageAction): LanguageState {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return {
        ...state,
        currentLanguage: action.payload,
        isLoading: false
      }
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload
      }
    case 'INITIALIZE':
      return {
        ...state,
        currentLanguage: action.payload,
        isLoading: false,
        isInitialized: true
      }
    default:
      return state
  }
}

/**
 * 语言上下文
 */
const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

/**
 * 语言提供者组件属性
 */
interface LanguageProviderProps {
  children: ReactNode
}

/**
 * 语言提供者组件
 * 提供全局语言状态管理和翻译功能
 */
export function LanguageProvider({ children }: LanguageProviderProps) {
  const [state, dispatch] = useReducer(languageReducer, {
    currentLanguage: 'zh',
    isLoading: true,
    isInitialized: false
  })

  /**
   * 初始化语言设置
   */
  useEffect(() => {
    const initializeLanguage = () => {
      try {
        // 从localStorage获取保存的语言设置
        const savedLanguage = localStorage.getItem('formatvardump-language') as Language
        const supportedLanguages = ['zh', 'en', 'ja', 'ko', 'fr', 'de', 'es', 'pt', 'ru', 'ar']
        
        if (savedLanguage && supportedLanguages.includes(savedLanguage)) {
          dispatch({ type: 'INITIALIZE', payload: savedLanguage })
        } else {
          // 检测浏览器语言
          const detectedLanguage = detectLanguage()
          dispatch({ type: 'INITIALIZE', payload: detectedLanguage })
        }
      } catch (error) {
        console.error('语言初始化失败:', error)
        dispatch({ type: 'INITIALIZE', payload: 'zh' })
      }
    }

    initializeLanguage()
  }, [])

  /**
   * 切换语言
   */
  const changeLanguage = (newLanguage: Language) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true })
      
      // 保存到localStorage
      localStorage.setItem('formatvardump-language', newLanguage)
      
      // 更新状态
      dispatch({ type: 'SET_LANGUAGE', payload: newLanguage })
    } catch (error) {
      console.error('语言切换失败:', error)
      dispatch({ type: 'SET_LOADING', payload: false })
    }
  }

  /**
   * 获取翻译文本
   */
  const t = (key: TranslationKey, params?: TranslationParams): string => {
    if (!state.isInitialized) {
      return key // 返回原始键，避免闪烁
    }
    
    try {
      if (params) {
        return formatTranslation(state.currentLanguage, key, params)
      }
      return getTranslation(state.currentLanguage, key) as string
    } catch (error) {
      console.error('翻译获取失败:', error)
      return key
    }
  }

  /**
   * 获取数组类型的翻译
   */
  const tArray = (key: ArrayTranslationKey): string[] => {
    if (!state.isInitialized) {
      return []
    }
    
    try {
      return getTranslationArray(state.currentLanguage, key)
    } catch (error) {
      console.error('数组翻译获取失败:', error)
      return []
    }
  }

  /**
   * 获取支持的语言列表
   */
  const getSupportedLanguagesList = () => {
    return getSupportedLanguages()
  }

  const contextValue: LanguageContextType = {
    language: state.currentLanguage,
    isLoading: state.isLoading,
    isInitialized: state.isInitialized,
    changeLanguage,
    t,
    tArray,
    getSupportedLanguages: getSupportedLanguagesList
  }

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  )
}

/**
 * 使用语言上下文的Hook
 */
export function useLanguageContext(): LanguageContextType {
  const context = useContext(LanguageContext)
  
  if (context === undefined) {
    throw new Error('useLanguageContext must be used within a LanguageProvider')
  }
  
  return context
}

/**
 * 向后兼容的useLanguage Hook
 * @deprecated 请使用 useLanguageContext
 */
export function useLanguage() {
  return useLanguageContext()
}
