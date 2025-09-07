'use client'

import React, { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CodeInput from '@/components/CodeInput'
import VarDumpRenderer from '@/components/VarDumpRenderer'
import PerformanceIndicator from '@/components/PerformanceIndicator'
import { useVarDumpParser } from '@/hooks/useVarDumpParser'
import { useLanguageContext } from '@/lib/languageContext'

/**
 * 主页面组件
 * 包含输入区域和格式化显示区域
 */
export default function Home() {
  const [inputLength, setInputLength] = useState(0)
  const { t, tArray, isInitialized } = useLanguageContext()
  
  const {
    parsedData,
    error,
    isProcessing,
    isDebouncing,
    debouncedParse,
    parseImmediately,
    clearResults
  } = useVarDumpParser()

  /**
   * 处理输入变化
   */
  const handleInputChange = (input: string) => {
    setInputLength(input.length)
    debouncedParse(input)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container-responsive py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 输入区域 */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                {t('input.title')}
              </h2>
              <CodeInput 
                onInputChange={handleInputChange} 
                disabled={isProcessing || isDebouncing}
              />
            </div>

            {/* 使用说明 */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">
                {t('instructions.title')}
              </h3>
              <div className="text-blue-800 text-sm space-y-2">
                {tArray('instructions.steps').map((step: string, index: number) => (
                  <p key={index}>
                    {index + 1}. {step.includes('var_dump()') ? (
                      <>
                        {step.split('var_dump()')[0]}
                        <code className="bg-blue-100 px-1 rounded">var_dump()</code>
                        {step.split('var_dump()')[1]}
                      </>
                    ) : step}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* 输出区域 */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  {t('output.title')}
                </h2>
                {parsedData.length > 0 && (
                  <span className="text-sm text-gray-500">
                    {t('output.parsedCount', { count: parsedData.length })}
                  </span>
                )}
              </div>

              <PerformanceIndicator
                isProcessing={isProcessing}
                isDebouncing={isDebouncing}
                dataLength={parsedData.length}
                inputLength={inputLength}
              />


              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-red-800">
                        {t('common.error')}
                      </h3>
                      <div className="mt-2 text-sm text-red-700">
                        {error}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {!isProcessing && !isDebouncing && !error && parsedData.length === 0 && (
                <div className="text-center py-12">
                  <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <h3 className="mt-2 text-sm font-medium text-gray-900">{t('output.noData')}</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {t('output.noDataDescription')}
                  </p>
                </div>
              )}

              {!isProcessing && !isDebouncing && !error && parsedData.length > 0 && (
                <div className="space-y-4">
                  <VarDumpRenderer data={parsedData} />
                  
                  {/* 操作按钮 */}
                  <div className="flex justify-end space-x-2 pt-4 border-t">
                    <button
                      onClick={() => {
                        const text = parsedData.map(item => JSON.stringify(item, null, 2)).join('\n')
                        navigator.clipboard.writeText(text)
                      }}
                      className="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
                    >
                      {t('output.copyJson')}
                    </button>
                    <button
                      onClick={() => {
                        const text = parsedData.map(item => item.value).join('\n')
                        navigator.clipboard.writeText(text)
                      }}
                      className="px-4 py-2 text-sm bg-php-blue text-white rounded hover:bg-blue-600 transition-colors"
                    >
                      {t('output.copyValues')}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 支持的数据类型 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {t('output.supportedDataTypes')}
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="type-tag type-tag-string mr-2">string</span>
                    <span className="text-gray-600">{t('dataTypes.string')}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="type-tag type-tag-number mr-2">int</span>
                    <span className="text-gray-600">{t('dataTypes.int')}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="type-tag type-tag-number mr-2">float</span>
                    <span className="text-gray-600">{t('dataTypes.float')}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="type-tag type-tag-boolean mr-2">bool</span>
                    <span className="text-gray-600">{t('dataTypes.bool')}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="type-tag type-tag-array mr-2">array</span>
                    <span className="text-gray-600">{t('dataTypes.array')}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="type-tag type-tag-object mr-2">object</span>
                    <span className="text-gray-600">{t('dataTypes.object')}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="type-tag type-tag-null mr-2">NULL</span>
                    <span className="text-gray-600">{t('dataTypes.null')}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="type-tag type-tag-null mr-2">resource</span>
                    <span className="text-gray-600">{t('dataTypes.resource')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
