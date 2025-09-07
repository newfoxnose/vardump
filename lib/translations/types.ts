/**
 * 翻译键类型定义
 * 提供类型安全的翻译键访问
 */

/**
 * 通用翻译键
 */
export type CommonKeys = 
  | 'loading'
  | 'error'
  | 'success'
  | 'cancel'
  | 'confirm'
  | 'copy'
  | 'clear'
  | 'example'
  | 'expand'
  | 'collapse'
  | 'unknownType'

/**
 * 页面翻译键
 */
export type PageKeys = 
  | 'title'
  | 'description'
  | 'subtitle'
  | 'features'

/**
 * 输入区域翻译键
 */
export type InputKeys = 
  | 'title'
  | 'placeholder'
  | 'tips.title'
  | 'tips.items'

/**
 * 输出区域翻译键
 */
export type OutputKeys = 
  | 'title'
  | 'noData'
  | 'noDataDescription'
  | 'parsedCount'
  | 'copyJson'
  | 'copyValues'
  | 'supportedDataTypes'

/**
 * 数据类型翻译键
 */
export type DataTypeKeys = 
  | 'string'
  | 'int'
  | 'float'
  | 'bool'
  | 'array'
  | 'object'
  | 'null'
  | 'resource'

/**
 * 使用说明翻译键
 */
export type InstructionsKeys = 
  | 'title'
  | 'steps'

/**
 * 性能指示器翻译键
 */
export type PerformanceKeys = 
  | 'waiting'
  | 'parsing'
  | 'inputChars'
  | 'parsedItems'
  | 'processing'

/**
 * 错误信息翻译键
 */
export type ErrorKeys = 
  | 'parseFailed'
  | 'invalidFormat'

/**
 * 页脚翻译键
 */
export type FooterKeys = 
  | 'about.title'
  | 'about.description'
  | 'features.title'
  | 'features.items'
  | 'tech.title'
  | 'tech.items'
  | 'copyright'
  | 'links.privacy'
  | 'links.terms'
  | 'links.contact'

/**
 * 所有翻译键的联合类型
 */
export type TranslationKey = 
  | `common.${CommonKeys}`
  | `page.${PageKeys}`
  | `input.${InputKeys}`
  | `output.${OutputKeys}`
  | `dataTypes.${DataTypeKeys}`
  | `instructions.${InstructionsKeys}`
  | `performance.${PerformanceKeys}`
  | `errors.${ErrorKeys}`
  | `footer.${FooterKeys}`

/**
 * 数组类型翻译键
 */
export type ArrayTranslationKey = 
  | 'page.features'
  | 'input.tips.items'
  | 'instructions.steps'
  | 'footer.features.items'
  | 'footer.tech.items'

/**
 * 翻译参数类型
 */
export interface TranslationParams {
  [key: string]: string | number
}

/**
 * 语言信息接口
 */
export interface LanguageInfo {
  code: string
  name: string
  flag: string
  nativeName?: string
  rtl?: boolean
}

/**
 * 翻译验证结果
 */
export interface TranslationValidation {
  isValid: boolean
  missingKeys: string[]
  extraKeys: string[]
  errors: string[]
}
