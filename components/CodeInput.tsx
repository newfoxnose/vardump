'use client'

import React, { useState } from 'react'
import { useLanguageContext } from '@/lib/languageContext'

interface CodeInputProps {
  onInputChange: (value: string) => void
  placeholder?: string
  disabled?: boolean
}

/**
 * 代码输入组件
 * 用于输入var_dump输出内容
 */
export default function CodeInput({ onInputChange, placeholder, disabled = false }: CodeInputProps) {
  const [input, setInput] = useState('')
  const { t, tArray, isInitialized } = useLanguageContext()

  /**
   * 处理输入变化
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setInput(value)
    onInputChange(value)
  }

  /**
   * 清空输入
   */
  const clearInput = () => {
    setInput('')
    onInputChange('')
  }

  /**
   * 加载示例数据
   */
  const loadExample = () => {
    const example = `array(4) { ["grade"]=> int(0) ["class_arr"]=> array(1) { [0]=> array(3) { ["class"]=> string(1) "1" ["amount"]=> string(0) "" ["female"]=> string(0) "" } } ["amount_sum"]=> int(0) ["female_sum"]=> int(0) }`
    setInput(example)
    onInputChange(example)
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <label htmlFor="vardump-input" className="block text-sm font-medium text-gray-700">
          {t('input.title')}
        </label>
        <div className="flex space-x-2">
          <button
            onClick={loadExample}
            className="px-3 py-1 text-sm bg-php-blue text-white rounded hover:bg-blue-600 transition-colors"
          >
            {t('common.example')}
          </button>
          <button
            onClick={clearInput}
            className="px-3 py-1 text-sm bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
          >
            {t('common.clear')}
          </button>
        </div>
      </div>
      
      <textarea
        id="vardump-input"
        value={input}
        onChange={handleInputChange}
        placeholder={placeholder || t('input.placeholder')}
        disabled={disabled}
        className={`w-full h-64 p-4 border border-gray-300 rounded-lg font-mono text-sm resize-none focus:ring-2 focus:ring-php-blue focus:border-transparent ${
          disabled ? 'bg-gray-100 cursor-not-allowed' : ''
        }`}
        spellCheck={false}
      />
      
      <div className="text-sm text-gray-500">
        <p>{t('input.tips.title')}</p>
        <ul className="list-disc list-inside mt-1 space-y-1">
          {tArray('input.tips.items').map((tip: string, index: number) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
