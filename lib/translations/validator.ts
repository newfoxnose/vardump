/**
 * 翻译验证工具
 * 用于验证翻译文件的完整性和一致性
 */

import { Language } from '../i18n'
import { TranslationKey, ArrayTranslationKey, TranslationValidation } from './types'

/**
 * 获取所有必需的翻译键
 */
export function getAllRequiredKeys(): TranslationKey[] {
  return [
    // Common keys
    'common.loading',
    'common.error',
    'common.success',
    'common.cancel',
    'common.confirm',
    'common.copy',
    'common.clear',
    'common.example',
    'common.expand',
    'common.collapse',
    'common.unknownType',
    
    // Page keys
    'page.title',
    'page.description',
    'page.subtitle',
    'page.features',
    
    // Input keys
    'input.title',
    'input.placeholder',
    'input.tips.title',
    'input.tips.items',
    
    // Output keys
    'output.title',
    'output.noData',
    'output.noDataDescription',
    'output.parsedCount',
    'output.copyJson',
    'output.copyValues',
    'output.supportedDataTypes',
    
    // Data type keys
    'dataTypes.string',
    'dataTypes.int',
    'dataTypes.float',
    'dataTypes.bool',
    'dataTypes.array',
    'dataTypes.object',
    'dataTypes.null',
    'dataTypes.resource',
    
    // Instructions keys
    'instructions.title',
    'instructions.steps',
    
    // Performance keys
    'performance.waiting',
    'performance.parsing',
    'performance.inputChars',
    'performance.parsedItems',
    'performance.processing',
    
    // Error keys
    'errors.parseFailed',
    'errors.invalidFormat',
    
    // Footer keys
    'footer.about.title',
    'footer.about.description',
    'footer.features.title',
    'footer.features.items',
    'footer.tech.title',
    'footer.tech.items',
    'footer.copyright',
    'footer.links.privacy',
    'footer.links.terms',
    'footer.links.contact'
  ]
}

/**
 * 获取数组类型的翻译键
 */
export function getArrayTranslationKeys(): ArrayTranslationKey[] {
  return [
    'page.features',
    'input.tips.items',
    'instructions.steps',
    'footer.features.items',
    'footer.tech.items'
  ]
}

/**
 * 验证翻译对象
 */
export function validateTranslations(
  translations: Record<string, any>,
  language: Language
): TranslationValidation {
  const requiredKeys = getAllRequiredKeys()
  const arrayKeys = getArrayTranslationKeys()
  const missingKeys: string[] = []
  const extraKeys: string[] = []
  const errors: string[] = []

  // 检查缺失的键
  for (const key of requiredKeys) {
    if (!hasNestedKey(translations, key)) {
      missingKeys.push(key)
    }
  }

  // 检查数组类型的键
  for (const key of arrayKeys) {
    const value = getNestedValue(translations, key)
    if (value && !Array.isArray(value)) {
      errors.push(`键 "${key}" 应该是数组类型，但实际是 ${typeof value}`)
    }
  }

  // 检查字符串类型的键
  for (const key of requiredKeys) {
    if (!arrayKeys.includes(key as ArrayTranslationKey)) {
      const value = getNestedValue(translations, key)
      if (value && typeof value !== 'string') {
        errors.push(`键 "${key}" 应该是字符串类型，但实际是 ${typeof value}`)
      }
    }
  }

  // 查找额外的键（这里简化处理，只检查顶级键）
  const topLevelKeys = Object.keys(translations)
  const expectedTopLevelKeys = ['common', 'page', 'input', 'output', 'dataTypes', 'instructions', 'performance', 'errors', 'footer']
  
  for (const key of topLevelKeys) {
    if (!expectedTopLevelKeys.includes(key)) {
      extraKeys.push(key)
    }
  }

  return {
    isValid: missingKeys.length === 0 && errors.length === 0,
    missingKeys,
    extraKeys,
    errors
  }
}

/**
 * 检查嵌套键是否存在
 */
function hasNestedKey(obj: any, keyPath: string): boolean {
  const keys = keyPath.split('.')
  let current = obj
  
  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = current[key]
    } else {
      return false
    }
  }
  
  return true
}

/**
 * 获取嵌套值
 */
function getNestedValue(obj: any, keyPath: string): any {
  const keys = keyPath.split('.')
  let current = obj
  
  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = current[key]
    } else {
      return undefined
    }
  }
  
  return current
}

/**
 * 验证所有语言的翻译一致性
 */
export function validateAllTranslations(
  allTranslations: Record<Language, Record<string, any>>
): Record<Language, TranslationValidation> {
  const results: Record<Language, TranslationValidation> = {} as any

  for (const [language, translations] of Object.entries(allTranslations)) {
    results[language as Language] = validateTranslations(translations, language as Language)
  }

  return results
}

/**
 * 生成翻译报告
 */
export function generateTranslationReport(
  validations: Record<Language, TranslationValidation>
): string {
  let report = '# 翻译验证报告\n\n'
  
  for (const [language, validation] of Object.entries(validations)) {
    report += `## ${language.toUpperCase()}\n\n`
    
    if (validation.isValid) {
      report += '✅ 翻译完整且正确\n\n'
    } else {
      if (validation.missingKeys.length > 0) {
        report += `❌ 缺失的翻译键 (${validation.missingKeys.length}):\n`
        validation.missingKeys.forEach(key => {
          report += `- ${key}\n`
        })
        report += '\n'
      }
      
      if (validation.errors.length > 0) {
        report += `❌ 翻译错误 (${validation.errors.length}):\n`
        validation.errors.forEach(error => {
          report += `- ${error}\n`
        })
        report += '\n'
      }
      
      if (validation.extraKeys.length > 0) {
        report += `⚠️ 额外的翻译键 (${validation.extraKeys.length}):\n`
        validation.extraKeys.forEach(key => {
          report += `- ${key}\n`
        })
        report += '\n'
      }
    }
  }
  
  return report
}
