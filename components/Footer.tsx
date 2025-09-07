'use client'

import React from 'react'
import { useLanguageContext } from '@/lib/languageContext'

/**
 * 页面底部组件
 * 包含版权信息和相关链接
 */
export default function Footer() {
  const { t, tArray, isInitialized } = useLanguageContext()
  
  // 如果语言未初始化，显示默认内容
  if (!isInitialized) {
    return (
      <footer className="bg-gray-900 text-white">
        <div className="container-responsive py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">关于工具</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                这是一个专业的PHP var_dump输出格式化工具，帮助开发者更好地理解和调试PHP代码。支持所有PHP数据类型，提供语法高亮和交互式折叠功能。
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">功能特性</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• 支持所有PHP数据类型</li>
                <li>• 语法高亮显示</li>
                <li>• 交互式折叠/展开</li>
                <li>• 响应式设计</li>
                <li>• 完全免费使用</li>
                <li>• 无需注册登录</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">技术栈</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Next.js 14</li>
                <li>• React 18</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• 客户端解析</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 FormatVarDump. 保留所有权利。
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  隐私政策
                </a>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  使用条款
                </a>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  联系我们
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-responsive py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.about.title')}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t('footer.about.description')}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.features.title')}</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              {tArray('footer.features.items').map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.tech.title')}</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              {tArray('footer.tech.items').map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              {t('footer.copyright')}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {t('footer.links.privacy')}
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {t('footer.links.terms')}
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {t('footer.links.contact')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
