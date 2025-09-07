/**
 * 国际化支持
 * 提供多语言文本和语言切换功能
 */

import { TranslationKey, ArrayTranslationKey, TranslationParams } from './translations/types'

export type Language = 'zh' | 'en' | 'ja' | 'ko' | 'fr' | 'de' | 'es' | 'pt' | 'ru' | 'ar'

export interface Translations {
  // 通用
  common: {
    loading: string
    error: string
    success: string
    cancel: string
    confirm: string
    copy: string
    clear: string
    example: string
    expand: string
    collapse: string
    unknownType: string
  }
  
  // 页面标题和描述
  page: {
    title: string
    description: string
    subtitle: string
    features: string[]
  }
  
  // 输入区域
  input: {
    title: string
    placeholder: string
    tips: {
      title: string
      items: string[]
    }
  }
  
  // 输出区域
  output: {
    title: string
    noData: string
    noDataDescription: string
    parsedCount: string
    copyJson: string
    copyValues: string
    supportedDataTypes: string
  }
  
  // 数据类型
  dataTypes: {
    string: string
    int: string
    float: string
    bool: string
    array: string
    object: string
    null: string
    resource: string
  }
  
  // 使用说明
  instructions: {
    title: string
    steps: string[]
  }
  
  // 性能指示器
  performance: {
    waiting: string
    parsing: string
    inputChars: string
    parsedItems: string
    processing: string
  }
  
  // 错误信息
  errors: {
    parseFailed: string
    invalidFormat: string
  }
  
  // 页脚
  footer: {
    about: {
      title: string
      description: string
    }
    features: {
      title: string
      items: string[]
    }
    tech: {
      title: string
      items: string[]
    }
    copyright: string
    links: {
      privacy: string
      terms: string
      contact: string
    }
  }
}

// 中文翻译
const zhTranslations: Translations = {
  common: {
    loading: '加载中...',
    error: '错误',
    success: '成功',
    cancel: '取消',
    confirm: '确认',
    copy: '复制',
    clear: '清空',
    example: '加载示例',
    expand: '展开',
    collapse: '折叠',
    unknownType: '未知类型'
  },
  page: {
    title: 'PHP var_dump 格式化工具',
    description: '专业的PHP调试输出格式化工具，让您的var_dump输出更易读',
    subtitle: '让您的var_dump输出更易读',
    features: ['语法高亮', '折叠展开', '类型识别', '响应式设计', '完全免费']
  },
  input: {
    title: '输入var_dump输出',
    placeholder: '请粘贴您的var_dump输出内容...',
    tips: {
      title: '💡 提示：',
      items: [
        '直接粘贴PHP var_dump()函数的输出内容',
        '支持字符串、数字、布尔值、数组、对象、NULL等所有PHP数据类型',
        '支持嵌套数组和对象的格式化显示',
        '点击示例按钮查看支持的格式'
      ]
    }
  },
  output: {
    title: '格式化结果',
    noData: '暂无数据',
    noDataDescription: '请在左侧输入var_dump输出内容',
    parsedCount: '解析了 {count} 个值',
    copyJson: '复制JSON',
    copyValues: '复制值',
    supportedDataTypes: '支持的数据类型'
  },
  dataTypes: {
    string: '字符串',
    int: '整数',
    float: '浮点数',
    bool: '布尔值',
    array: '数组',
    object: '对象',
    null: '空值',
    resource: '资源'
  },
  instructions: {
    title: '使用说明',
    steps: [
      '在PHP代码中使用 var_dump() 函数输出变量',
      '复制输出的内容到左侧输入框',
      '工具会自动解析并格式化显示',
      '点击折叠/展开按钮查看嵌套结构'
    ]
  },
  performance: {
    waiting: '等待输入完成...',
    parsing: '正在解析数据...',
    inputChars: '输入: {count} 字符',
    parsedItems: '已解析: {count} 项',
    processing: '正在处理复杂数据结构，请稍候...'
  },
  errors: {
    parseFailed: '解析失败：输入内容不是有效的var_dump输出格式',
    invalidFormat: '无效格式'
  },
  footer: {
    about: {
      title: '关于工具',
      description: '这是一个专业的PHP var_dump输出格式化工具，帮助开发者更好地理解和调试PHP代码。支持所有PHP数据类型，提供语法高亮和交互式折叠功能。'
    },
    features: {
      title: '功能特性',
      items: [
        '• 支持所有PHP数据类型',
        '• 语法高亮显示',
        '• 交互式折叠/展开',
        '• 响应式设计',
        '• 完全免费使用',
        '• 无需注册登录'
      ]
    },
    tech: {
      title: '技术栈',
      items: [
        '• Next.js 14',
        '• React 18',
        '• TypeScript',
        '• Tailwind CSS',
        '• 客户端解析'
      ]
    },
    copyright: '© 2024 FormatVarDump. 保留所有权利。',
    links: {
      privacy: '隐私政策',
      terms: '使用条款',
      contact: '联系我们'
    }
  }
}

// 日语翻译
const jaTranslations: Translations = {
  common: {
    loading: '読み込み中...',
    error: 'エラー',
    success: '成功',
    cancel: 'キャンセル',
    confirm: '確認',
    copy: 'コピー',
    clear: 'クリア',
    example: 'サンプルを読み込む',
    expand: '展開',
    collapse: '折りたたみ',
    unknownType: '未知のタイプ'
  },
  page: {
    title: 'PHP var_dump フォーマッター',
    description: 'プロフェッショナルなPHPデバッグ出力フォーマッター、var_dump出力をより読みやすく',
    subtitle: 'var_dump出力をより読みやすく',
    features: ['シンタックスハイライト', '折りたたみ', '型認識', 'レスポンシブデザイン', '完全無料']
  },
  input: {
    title: 'var_dump出力を入力',
    placeholder: 'var_dump出力内容を貼り付けてください...',
    tips: {
      title: '💡 ヒント：',
      items: [
        'PHP var_dump()関数の出力内容を直接貼り付け',
        '文字列、数値、ブール値、配列、オブジェクト、NULLなどすべてのPHPデータ型をサポート',
        'ネストした配列とオブジェクトのフォーマット表示をサポート',
        'サンプルボタンをクリックしてサポートされている形式を確認'
      ]
    }
  },
  output: {
    title: 'フォーマット結果',
    noData: 'データなし',
    noDataDescription: '左側にvar_dump出力内容を入力してください',
    parsedCount: '{count}個の値を解析しました',
    copyJson: 'JSONをコピー',
    copyValues: '値をコピー',
    supportedDataTypes: 'サポートされているデータ型'
  },
  dataTypes: {
    string: '文字列',
    int: '整数',
    float: '浮動小数点数',
    bool: 'ブール値',
    array: '配列',
    object: 'オブジェクト',
    null: 'NULL',
    resource: 'リソース'
  },
  instructions: {
    title: '使用方法',
    steps: [
      'PHPコードでvar_dump()関数を使用して変数を出力',
      '出力内容を左側の入力ボックスにコピー',
      'ツールが自動的に解析してフォーマット表示',
      '折りたたみ/展開ボタンをクリックしてネスト構造を表示'
    ]
  },
  performance: {
    waiting: '入力完了を待機中...',
    parsing: 'データを解析中...',
    inputChars: '入力: {count}文字',
    parsedItems: '解析済み: {count}項目',
    processing: '複雑なデータ構造を処理中、お待ちください...'
  },
  errors: {
    parseFailed: '解析に失敗しました：入力内容が有効なvar_dump出力形式ではありません',
    invalidFormat: '無効な形式'
  },
  footer: {
    about: {
      title: 'ツールについて',
      description: 'これは、開発者がPHPコードをより良く理解し、デバッグするのに役立つプロフェッショナルなPHP var_dump出力フォーマッターツールです。すべてのPHPデータ型をサポートし、シンタックスハイライトとインタラクティブな折りたたみ機能を提供します。'
    },
    features: {
      title: '機能',
      items: [
        '• すべてのPHPデータ型をサポート',
        '• シンタックスハイライト表示',
        '• インタラクティブな折りたたみ/展開',
        '• レスポンシブデザイン',
        '• 完全無料で使用可能',
        '• 登録不要'
      ]
    },
    tech: {
      title: '技術スタック',
      items: [
        '• Next.js 14',
        '• React 18',
        '• TypeScript',
        '• Tailwind CSS',
        '• クライアントサイド解析'
      ]
    },
    copyright: '© 2024 FormatVarDump. 全著作権所有。',
    links: {
      privacy: 'プライバシーポリシー',
      terms: '利用規約',
      contact: 'お問い合わせ'
    }
  }
}

// 韩语翻译
const koTranslations: Translations = {
  common: {
    loading: '로딩 중...',
    error: '오류',
    success: '성공',
    cancel: '취소',
    confirm: '확인',
    copy: '복사',
    clear: '지우기',
    example: '예제 로드',
    expand: '펼치기',
    collapse: '접기',
    unknownType: '알 수 없는 타입'
  },
  page: {
    title: 'PHP var_dump 포맷터',
    description: '전문적인 PHP 디버깅 출력 포맷터, var_dump 출력을 더 읽기 쉽게',
    subtitle: 'var_dump 출력을 더 읽기 쉽게',
    features: ['구문 강조', '접기/펼치기', '타입 인식', '반응형 디자인', '완전 무료']
  },
  input: {
    title: 'var_dump 출력 입력',
    placeholder: 'var_dump 출력 내용을 붙여넣으세요...',
    tips: {
      title: '💡 팁:',
      items: [
        'PHP var_dump() 함수의 출력 내용을 직접 붙여넣기',
        '문자열, 숫자, 불린, 배열, 객체, NULL 등 모든 PHP 데이터 타입 지원',
        '중첩된 배열과 객체의 포맷된 표시 지원',
        '예제 버튼을 클릭하여 지원되는 형식 확인'
      ]
    }
  },
  output: {
    title: '포맷된 결과',
    noData: '데이터 없음',
    noDataDescription: '왼쪽에 var_dump 출력 내용을 입력하세요',
    parsedCount: '{count}개의 값을 파싱했습니다',
    copyJson: 'JSON 복사',
    copyValues: '값 복사',
    supportedDataTypes: '지원되는 데이터 타입'
  },
  dataTypes: {
    string: '문자열',
    int: '정수',
    float: '부동소수점',
    bool: '불린',
    array: '배열',
    object: '객체',
    null: 'NULL',
    resource: '리소스'
  },
  instructions: {
    title: '사용 방법',
    steps: [
      'PHP 코드에서 var_dump() 함수를 사용하여 변수 출력',
      '출력 내용을 왼쪽 입력 상자에 복사',
      '도구가 자동으로 파싱하고 포맷된 표시',
      '접기/펼치기 버튼을 클릭하여 중첩 구조 보기'
    ]
  },
  performance: {
    waiting: '입력 완료 대기 중...',
    parsing: '데이터 파싱 중...',
    inputChars: '입력: {count} 문자',
    parsedItems: '파싱됨: {count} 항목',
    processing: '복잡한 데이터 구조 처리 중, 잠시만 기다려주세요...'
  },
  errors: {
    parseFailed: '파싱 실패: 입력 내용이 유효한 var_dump 출력 형식이 아닙니다',
    invalidFormat: '잘못된 형식'
  },
  footer: {
    about: {
      title: '도구 소개',
      description: '개발자가 PHP 코드를 더 잘 이해하고 디버깅할 수 있도록 도와주는 전문적인 PHP var_dump 출력 포맷터 도구입니다. 모든 PHP 데이터 타입을 지원하며 구문 강조와 대화형 접기 기능을 제공합니다.'
    },
    features: {
      title: '기능',
      items: [
        '• 모든 PHP 데이터 타입 지원',
        '• 구문 강조 표시',
        '• 대화형 접기/펼치기',
        '• 반응형 디자인',
        '• 완전 무료 사용',
        '• 등록 불필요'
      ]
    },
    tech: {
      title: '기술 스택',
      items: [
        '• Next.js 14',
        '• React 18',
        '• TypeScript',
        '• Tailwind CSS',
        '• 클라이언트 사이드 파싱'
      ]
    },
    copyright: '© 2024 FormatVarDump. 모든 권리 보유.',
    links: {
      privacy: '개인정보처리방침',
      terms: '이용약관',
      contact: '문의하기'
    }
  }
}

// 法语翻译
const frTranslations: Translations = {
  common: {
    loading: 'Chargement...',
    error: 'Erreur',
    success: 'Succès',
    cancel: 'Annuler',
    confirm: 'Confirmer',
    copy: 'Copier',
    clear: 'Effacer',
    example: 'Charger l\'exemple',
    expand: 'Déplier',
    collapse: 'Plier',
    unknownType: 'Type inconnu'
  },
  page: {
    title: 'Formateur PHP var_dump',
    description: 'Formateur de sortie de débogage PHP professionnel, rendant votre sortie var_dump plus lisible',
    subtitle: 'Rendre votre sortie var_dump plus lisible',
    features: ['Coloration syntaxique', 'Plier/Déplier', 'Reconnaissance de type', 'Design responsive', 'Entièrement gratuit']
  },
  input: {
    title: 'Entrée de sortie var_dump',
    placeholder: 'Veuillez coller le contenu de votre sortie var_dump...',
    tips: {
      title: '💡 Conseils :',
      items: [
        'Collez directement le contenu de sortie de la fonction PHP var_dump()',
        'Prend en charge tous les types de données PHP : string, number, boolean, array, object, NULL, etc.',
        'Prend en charge l\'affichage formaté des tableaux et objets imbriqués',
        'Cliquez sur le bouton exemple pour voir les formats pris en charge'
      ]
    }
  },
  output: {
    title: 'Résultat formaté',
    noData: 'Aucune donnée',
    noDataDescription: 'Veuillez saisir le contenu de sortie var_dump à gauche',
    parsedCount: '{count} valeurs analysées',
    copyJson: 'Copier JSON',
    copyValues: 'Copier les valeurs',
    supportedDataTypes: 'Types de données pris en charge'
  },
  dataTypes: {
    string: 'Chaîne',
    int: 'Entier',
    float: 'Flottant',
    bool: 'Booléen',
    array: 'Tableau',
    object: 'Objet',
    null: 'NULL',
    resource: 'Ressource'
  },
  instructions: {
    title: 'Instructions',
    steps: [
      'Utilisez la fonction var_dump() dans le code PHP pour sortir les variables',
      'Copiez le contenu de sortie dans la boîte de saisie de gauche',
      'L\'outil analysera et formatera automatiquement l\'affichage',
      'Cliquez sur les boutons plier/déplier pour voir les structures imbriquées'
    ]
  },
  performance: {
    waiting: 'En attente de la fin de saisie...',
    parsing: 'Analyse des données...',
    inputChars: 'Entrée : {count} caractères',
    parsedItems: 'Analysé : {count} éléments',
    processing: 'Traitement de structures de données complexes, veuillez patienter...'
  },
  errors: {
    parseFailed: 'Échec de l\'analyse : le contenu d\'entrée n\'est pas un format de sortie var_dump valide',
    invalidFormat: 'Format invalide'
  },
  footer: {
    about: {
      title: 'À propos de l\'outil',
      description: 'Il s\'agit d\'un outil de formatage de sortie PHP var_dump professionnel qui aide les développeurs à mieux comprendre et déboguer le code PHP. Prend en charge tous les types de données PHP et fournit une coloration syntaxique et une fonctionnalité de pliage interactive.'
    },
    features: {
      title: 'Fonctionnalités',
      items: [
        '• Prend en charge tous les types de données PHP',
        '• Affichage avec coloration syntaxique',
        '• Plier/déplier interactif',
        '• Design responsive',
        '• Entièrement gratuit à utiliser',
        '• Aucune inscription requise'
      ]
    },
    tech: {
      title: 'Stack technique',
      items: [
        '• Next.js 14',
        '• React 18',
        '• TypeScript',
        '• Tailwind CSS',
        '• Analyse côté client'
      ]
    },
    copyright: '© 2024 FormatVarDump. Tous droits réservés.',
    links: {
      privacy: 'Politique de confidentialité',
      terms: 'Conditions d\'utilisation',
      contact: 'Nous contacter'
    }
  }
}

// 德语翻译
const deTranslations: Translations = {
  common: {
    loading: 'Laden...',
    error: 'Fehler',
    success: 'Erfolg',
    cancel: 'Abbrechen',
    confirm: 'Bestätigen',
    copy: 'Kopieren',
    clear: 'Löschen',
    example: 'Beispiel laden',
    expand: 'Aufklappen',
    collapse: 'Einklappen',
    unknownType: 'Unbekannter Typ'
  },
  page: {
    title: 'PHP var_dump Formatter',
    description: 'Professioneller PHP-Debugging-Ausgabe-Formatter, macht Ihre var_dump-Ausgabe lesbarer',
    subtitle: 'Macht Ihre var_dump-Ausgabe lesbarer',
    features: ['Syntaxhervorhebung', 'Einklappen/Aufklappen', 'Typ-Erkennung', 'Responsive Design', 'Vollständig kostenlos']
  },
  input: {
    title: 'var_dump-Ausgabe eingeben',
    placeholder: 'Bitte fügen Sie den Inhalt Ihrer var_dump-Ausgabe ein...',
    tips: {
      title: '💡 Tipps:',
      items: [
        'Fügen Sie direkt den Ausgabeinhalt der PHP var_dump() Funktion ein',
        'Unterstützt alle PHP-Datentypen: string, number, boolean, array, object, NULL, etc.',
        'Unterstützt formatierte Anzeige von verschachtelten Arrays und Objekten',
        'Klicken Sie auf die Beispiel-Schaltfläche, um unterstützte Formate zu sehen'
      ]
    }
  },
  output: {
    title: 'Formatiertes Ergebnis',
    noData: 'Keine Daten',
    noDataDescription: 'Bitte geben Sie var_dump-Ausgabeinhalt links ein',
    parsedCount: '{count} Werte analysiert',
    copyJson: 'JSON kopieren',
    copyValues: 'Werte kopieren',
    supportedDataTypes: 'Unterstützte Datentypen'
  },
  dataTypes: {
    string: 'Zeichenkette',
    int: 'Ganzzahl',
    float: 'Gleitkommazahl',
    bool: 'Boolescher Wert',
    array: 'Array',
    object: 'Objekt',
    null: 'NULL',
    resource: 'Ressource'
  },
  instructions: {
    title: 'Anweisungen',
    steps: [
      'Verwenden Sie die var_dump() Funktion im PHP-Code, um Variablen auszugeben',
      'Kopieren Sie den Ausgabeinhalt in das linke Eingabefeld',
      'Das Tool analysiert und formatiert die Anzeige automatisch',
      'Klicken Sie auf Ein-/Aufklappen-Schaltflächen, um verschachtelte Strukturen anzuzeigen'
    ]
  },
  performance: {
    waiting: 'Warten auf Eingabeabschluss...',
    parsing: 'Daten analysieren...',
    inputChars: 'Eingabe: {count} Zeichen',
    parsedItems: 'Analysiert: {count} Elemente',
    processing: 'Komplexe Datenstrukturen verarbeiten, bitte warten...'
  },
  errors: {
    parseFailed: 'Analyse fehlgeschlagen: Eingabeinhalt ist kein gültiges var_dump-Ausgabeformat',
    invalidFormat: 'Ungültiges Format'
  },
  footer: {
    about: {
      title: 'Über das Tool',
      description: 'Dies ist ein professionelles PHP var_dump-Ausgabeformatierungstool, das Entwicklern hilft, PHP-Code besser zu verstehen und zu debuggen. Unterstützt alle PHP-Datentypen und bietet Syntaxhervorhebung und interaktive Faltfunktionalität.'
    },
    features: {
      title: 'Funktionen',
      items: [
        '• Unterstützt alle PHP-Datentypen',
        '• Syntaxhervorhebungsanzeige',
        '• Interaktives Ein-/Aufklappen',
        '• Responsive Design',
        '• Vollständig kostenlos zu verwenden',
        '• Keine Registrierung erforderlich'
      ]
    },
    tech: {
      title: 'Tech-Stack',
      items: [
        '• Next.js 14',
        '• React 18',
        '• TypeScript',
        '• Tailwind CSS',
        '• Client-seitige Analyse'
      ]
    },
    copyright: '© 2024 FormatVarDump. Alle Rechte vorbehalten.',
    links: {
      privacy: 'Datenschutzrichtlinie',
      terms: 'Nutzungsbedingungen',
      contact: 'Kontakt'
    }
  }
}

// 西班牙语翻译
const esTranslations: Translations = {
  common: {
    loading: 'Cargando...',
    error: 'Error',
    success: 'Éxito',
    cancel: 'Cancelar',
    confirm: 'Confirmar',
    copy: 'Copiar',
    clear: 'Limpiar',
    example: 'Cargar ejemplo',
    expand: 'Expandir',
    collapse: 'Contraer',
    unknownType: 'Tipo desconocido'
  },
  page: {
    title: 'Formateador PHP var_dump',
    description: 'Formateador profesional de salida de depuración PHP, hace que su salida var_dump sea más legible',
    subtitle: 'Hace que su salida var_dump sea más legible',
    features: ['Resaltado de sintaxis', 'Plegar/Desplegar', 'Reconocimiento de tipo', 'Diseño responsivo', 'Completamente gratuito']
  },
  input: {
    title: 'Entrada de salida var_dump',
    placeholder: 'Por favor pegue el contenido de su salida var_dump...',
    tips: {
      title: '💡 Consejos:',
      items: [
        'Pegue directamente el contenido de salida de la función PHP var_dump()',
        'Soporta todos los tipos de datos PHP: string, number, boolean, array, object, NULL, etc.',
        'Soporta visualización formateada de arrays y objetos anidados',
        'Haga clic en el botón de ejemplo para ver los formatos soportados'
      ]
    }
  },
  output: {
    title: 'Resultado formateado',
    noData: 'Sin datos',
    noDataDescription: 'Por favor ingrese el contenido de salida var_dump a la izquierda',
    parsedCount: '{count} valores analizados',
    copyJson: 'Copiar JSON',
    copyValues: 'Copiar valores',
    supportedDataTypes: 'Tipos de datos soportados'
  },
  dataTypes: {
    string: 'Cadena',
    int: 'Entero',
    float: 'Flotante',
    bool: 'Booleano',
    array: 'Array',
    object: 'Objeto',
    null: 'NULL',
    resource: 'Recurso'
  },
  instructions: {
    title: 'Instrucciones',
    steps: [
      'Use la función var_dump() en el código PHP para mostrar variables',
      'Copie el contenido de salida en el cuadro de entrada izquierdo',
      'La herramienta analizará y formateará la visualización automáticamente',
      'Haga clic en los botones plegar/desplegar para ver estructuras anidadas'
    ]
  },
  performance: {
    waiting: 'Esperando a que termine la entrada...',
    parsing: 'Analizando datos...',
    inputChars: 'Entrada: {count} caracteres',
    parsedItems: 'Analizado: {count} elementos',
    processing: 'Procesando estructuras de datos complejas, por favor espere...'
  },
  errors: {
    parseFailed: 'Falló el análisis: el contenido de entrada no es un formato de salida var_dump válido',
    invalidFormat: 'Formato inválido'
  },
  footer: {
    about: {
      title: 'Acerca de la herramienta',
      description: 'Esta es una herramienta profesional de formateo de salida PHP var_dump que ayuda a los desarrolladores a entender y depurar mejor el código PHP. Soporta todos los tipos de datos PHP y proporciona resaltado de sintaxis y funcionalidad de plegado interactivo.'
    },
    features: {
      title: 'Características',
      items: [
        '• Soporta todos los tipos de datos PHP',
        '• Visualización con resaltado de sintaxis',
        '• Plegar/desplegar interactivo',
        '• Diseño responsivo',
        '• Completamente gratuito de usar',
        '• No requiere registro'
      ]
    },
    tech: {
      title: 'Stack tecnológico',
      items: [
        '• Next.js 14',
        '• React 18',
        '• TypeScript',
        '• Tailwind CSS',
        '• Análisis del lado del cliente'
      ]
    },
    copyright: '© 2024 FormatVarDump. Todos los derechos reservados.',
    links: {
      privacy: 'Política de privacidad',
      terms: 'Términos de uso',
      contact: 'Contáctanos'
    }
  }
}

// 葡萄牙语翻译
const ptTranslations: Translations = {
  common: {
    loading: 'Carregando...',
    error: 'Erro',
    success: 'Sucesso',
    cancel: 'Cancelar',
    confirm: 'Confirmar',
    copy: 'Copiar',
    clear: 'Limpar',
    example: 'Carregar exemplo',
    expand: 'Expandir',
    collapse: 'Dobrar',
    unknownType: 'Tipo desconhecido'
  },
  page: {
    title: 'Formatador PHP var_dump',
    description: 'Formatador profissional de saída de depuração PHP, torna sua saída var_dump mais legível',
    subtitle: 'Torna sua saída var_dump mais legível',
    features: ['Destaque de sintaxe', 'Dobrar/Expandir', 'Reconhecimento de tipo', 'Design responsivo', 'Completamente gratuito']
  },
  input: {
    title: 'Entrada de saída var_dump',
    placeholder: 'Por favor cole o conteúdo da sua saída var_dump...',
    tips: {
      title: '💡 Dicas:',
      items: [
        'Cole diretamente o conteúdo de saída da função PHP var_dump()',
        'Suporta todos os tipos de dados PHP: string, number, boolean, array, object, NULL, etc.',
        'Suporta exibição formatada de arrays e objetos aninhados',
        'Clique no botão exemplo para ver os formatos suportados'
      ]
    }
  },
  output: {
    title: 'Resultado formatado',
    noData: 'Sem dados',
    noDataDescription: 'Por favor insira o conteúdo da saída var_dump à esquerda',
    parsedCount: '{count} valores analisados',
    copyJson: 'Copiar JSON',
    copyValues: 'Copiar valores',
    supportedDataTypes: 'Tipos de dados suportados'
  },
  dataTypes: {
    string: 'String',
    int: 'Inteiro',
    float: 'Ponto flutuante',
    bool: 'Booleano',
    array: 'Array',
    object: 'Objeto',
    null: 'NULL',
    resource: 'Recurso'
  },
  instructions: {
    title: 'Instruções',
    steps: [
      'Use a função var_dump() no código PHP para exibir variáveis',
      'Copie o conteúdo da saída na caixa de entrada esquerda',
      'A ferramenta analisará e formatará a exibição automaticamente',
      'Clique nos botões dobrar/expandir para ver estruturas aninhadas'
    ]
  },
  performance: {
    waiting: 'Aguardando conclusão da entrada...',
    parsing: 'Analisando dados...',
    inputChars: 'Entrada: {count} caracteres',
    parsedItems: 'Analisado: {count} itens',
    processing: 'Processando estruturas de dados complexas, aguarde...'
  },
  errors: {
    parseFailed: 'Falha na análise: conteúdo de entrada não é um formato de saída var_dump válido',
    invalidFormat: 'Formato inválido'
  },
  footer: {
    about: {
      title: 'Sobre a ferramenta',
      description: 'Esta é uma ferramenta profissional de formatação de saída PHP var_dump que ajuda desenvolvedores a entender e depurar melhor o código PHP. Suporta todos os tipos de dados PHP e fornece destaque de sintaxe e funcionalidade de dobramento interativo.'
    },
    features: {
      title: 'Recursos',
      items: [
        '• Suporta todos os tipos de dados PHP',
        '• Exibição com destaque de sintaxe',
        '• Dobrar/expandir interativo',
        '• Design responsivo',
        '• Completamente gratuito para usar',
        '• Não requer registro'
      ]
    },
    tech: {
      title: 'Stack tecnológico',
      items: [
        '• Next.js 14',
        '• React 18',
        '• TypeScript',
        '• Tailwind CSS',
        '• Análise do lado do cliente'
      ]
    },
    copyright: '© 2024 FormatVarDump. Todos os direitos reservados.',
    links: {
      privacy: 'Política de privacidade',
      terms: 'Termos de uso',
      contact: 'Entre em contato'
    }
  }
}

// 俄语翻译
const ruTranslations: Translations = {
  common: {
    loading: 'Загрузка...',
    error: 'Ошибка',
    success: 'Успех',
    cancel: 'Отмена',
    confirm: 'Подтвердить',
    copy: 'Копировать',
    clear: 'Очистить',
    example: 'Загрузить пример',
    expand: 'Развернуть',
    collapse: 'Свернуть',
    unknownType: 'Неизвестный тип'
  },
  page: {
    title: 'Форматтер PHP var_dump',
    description: 'Профессиональный форматтер отладочного вывода PHP, делает ваш вывод var_dump более читаемым',
    subtitle: 'Делает ваш вывод var_dump более читаемым',
    features: ['Подсветка синтаксиса', 'Сворачивание/Разворачивание', 'Распознавание типа', 'Адаптивный дизайн', 'Полностью бесплатно']
  },
  input: {
    title: 'Ввод вывода var_dump',
    placeholder: 'Пожалуйста, вставьте содержимое вашего вывода var_dump...',
    tips: {
      title: '💡 Советы:',
      items: [
        'Вставьте непосредственно содержимое вывода функции PHP var_dump()',
        'Поддерживает все типы данных PHP: string, number, boolean, array, object, NULL и т.д.',
        'Поддерживает форматированное отображение вложенных массивов и объектов',
        'Нажмите кнопку примера, чтобы увидеть поддерживаемые форматы'
      ]
    }
  },
  output: {
    title: 'Отформатированный результат',
    noData: 'Нет данных',
    noDataDescription: 'Пожалуйста, введите содержимое вывода var_dump слева',
    parsedCount: 'Проанализировано {count} значений',
    copyJson: 'Копировать JSON',
    copyValues: 'Копировать значения',
    supportedDataTypes: 'Поддерживаемые типы данных'
  },
  dataTypes: {
    string: 'Строка',
    int: 'Целое число',
    float: 'Число с плавающей точкой',
    bool: 'Булево значение',
    array: 'Массив',
    object: 'Объект',
    null: 'NULL',
    resource: 'Ресурс'
  },
  instructions: {
    title: 'Инструкции',
    steps: [
      'Используйте функцию var_dump() в PHP коде для вывода переменных',
      'Скопируйте содержимое вывода в левое поле ввода',
      'Инструмент автоматически проанализирует и отформатирует отображение',
      'Нажмите кнопки сворачивания/разворачивания для просмотра вложенных структур'
    ]
  },
  performance: {
    waiting: 'Ожидание завершения ввода...',
    parsing: 'Анализ данных...',
    inputChars: 'Ввод: {count} символов',
    parsedItems: 'Проанализировано: {count} элементов',
    processing: 'Обработка сложных структур данных, пожалуйста, подождите...'
  },
  errors: {
    parseFailed: 'Ошибка анализа: содержимое ввода не является действительным форматом вывода var_dump',
    invalidFormat: 'Неверный формат'
  },
  footer: {
    about: {
      title: 'О инструменте',
      description: 'Это профессиональный инструмент форматирования вывода PHP var_dump, который помогает разработчикам лучше понимать и отлаживать PHP код. Поддерживает все типы данных PHP и предоставляет подсветку синтаксиса и интерактивную функциональность сворачивания.'
    },
    features: {
      title: 'Функции',
      items: [
        '• Поддерживает все типы данных PHP',
        '• Отображение с подсветкой синтаксиса',
        '• Интерактивное сворачивание/разворачивание',
        '• Адаптивный дизайн',
        '• Полностью бесплатно в использовании',
        '• Не требует регистрации'
      ]
    },
    tech: {
      title: 'Технологический стек',
      items: [
        '• Next.js 14',
        '• React 18',
        '• TypeScript',
        '• Tailwind CSS',
        '• Клиентский анализ'
      ]
    },
    copyright: '© 2024 FormatVarDump. Все права защищены.',
    links: {
      privacy: 'Политика конфиденциальности',
      terms: 'Условия использования',
      contact: 'Связаться с нами'
    }
  }
}

// 阿拉伯语翻译
const arTranslations: Translations = {
  common: {
    loading: 'جاري التحميل...',
    error: 'خطأ',
    success: 'نجح',
    cancel: 'إلغاء',
    confirm: 'تأكيد',
    copy: 'نسخ',
    clear: 'مسح',
    example: 'تحميل مثال',
    expand: 'توسيع',
    collapse: 'طي',
    unknownType: 'نوع غير معروف'
  },
  page: {
    title: 'منسق PHP var_dump',
    description: 'منسق إخراج تصحيح PHP احترافي، يجعل إخراج var_dump أكثر قابلية للقراءة',
    subtitle: 'يجعل إخراج var_dump أكثر قابلية للقراءة',
    features: ['تمييز الصيغة', 'طي/توسيع', 'تعرّف النوع', 'تصميم متجاوب', 'مجاني تماماً']
  },
  input: {
    title: 'إدخال إخراج var_dump',
    placeholder: 'يرجى لصق محتوى إخراج var_dump...',
    tips: {
      title: '💡 نصائح:',
      items: [
        'الصق مباشرة محتوى إخراج دالة PHP var_dump()',
        'يدعم جميع أنواع البيانات PHP: string, number, boolean, array, object, NULL, إلخ',
        'يدعم عرض مصفوفات وكائنات متداخلة منسقة',
        'انقر على زر المثال لرؤية التنسيقات المدعومة'
      ]
    }
  },
  output: {
    title: 'النتيجة المنسقة',
    noData: 'لا توجد بيانات',
    noDataDescription: 'يرجى إدخال محتوى إخراج var_dump على اليسار',
    parsedCount: 'تم تحليل {count} قيمة',
    copyJson: 'نسخ JSON',
    copyValues: 'نسخ القيم',
    supportedDataTypes: 'أنواع البيانات المدعومة'
  },
  dataTypes: {
    string: 'سلسلة نصية',
    int: 'عدد صحيح',
    float: 'رقم عشري',
    bool: 'منطقي',
    array: 'مصفوفة',
    object: 'كائن',
    null: 'NULL',
    resource: 'مورد'
  },
  instructions: {
    title: 'التعليمات',
    steps: [
      'استخدم دالة var_dump() في كود PHP لإخراج المتغيرات',
      'انسخ محتوى الإخراج في صندوق الإدخال الأيسر',
      'ستقوم الأداة بتحليل وتنسيق العرض تلقائياً',
      'انقر على أزرار الطي/التوسيع لعرض الهياكل المتداخلة'
    ]
  },
  performance: {
    waiting: 'في انتظار اكتمال الإدخال...',
    parsing: 'تحليل البيانات...',
    inputChars: 'الإدخال: {count} حرف',
    parsedItems: 'تم التحليل: {count} عنصر',
    processing: 'معالجة هياكل البيانات المعقدة، يرجى الانتظار...'
  },
  errors: {
    parseFailed: 'فشل التحليل: محتوى الإدخال ليس تنسيق إخراج var_dump صالح',
    invalidFormat: 'تنسيق غير صالح'
  },
  footer: {
    about: {
      title: 'حول الأداة',
      description: 'هذه أداة تنسيق إخراج PHP var_dump احترافية تساعد المطورين على فهم وتصحيح كود PHP بشكل أفضل. تدعم جميع أنواع البيانات PHP وتوفر تمييز الصيغة ووظيفة الطي التفاعلية.'
    },
    features: {
      title: 'الميزات',
      items: [
        '• تدعم جميع أنواع البيانات PHP',
        '• عرض مع تمييز الصيغة',
        '• طي/توسيع تفاعلي',
        '• تصميم متجاوب',
        '• مجاني تماماً للاستخدام',
        '• لا يتطلب تسجيل'
      ]
    },
    tech: {
      title: 'المكدس التقني',
      items: [
        '• Next.js 14',
        '• React 18',
        '• TypeScript',
        '• Tailwind CSS',
        '• تحليل من جانب العميل'
      ]
    },
    copyright: '© 2024 FormatVarDump. جميع الحقوق محفوظة.',
    links: {
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الاستخدام',
      contact: 'اتصل بنا'
    }
  }
}

// 英文翻译
const enTranslations: Translations = {
  common: {
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    cancel: 'Cancel',
    confirm: 'Confirm',
    copy: 'Copy',
    clear: 'Clear',
    example: 'Load Example',
    expand: 'Expand',
    collapse: 'Collapse',
    unknownType: 'Unknown Type'
  },
  page: {
    title: 'PHP var_dump Formatter',
    description: 'Professional PHP debugging output formatter, making your var_dump output more readable',
    subtitle: 'Making your var_dump output more readable',
    features: ['Syntax Highlighting', 'Collapsible', 'Type Recognition', 'Responsive Design', 'Completely Free']
  },
  input: {
    title: 'Input var_dump Output',
    placeholder: 'Please paste your var_dump output content...',
    tips: {
      title: '💡 Tips:',
      items: [
        'Directly paste the output content of PHP var_dump() function',
        'Supports all PHP data types: string, number, boolean, array, object, NULL, etc.',
        'Supports formatted display of nested arrays and objects',
        'Click the example button to see supported formats'
      ]
    }
  },
  output: {
    title: 'Formatted Result',
    noData: 'No Data',
    noDataDescription: 'Please input var_dump output content on the left',
    parsedCount: 'Parsed {count} values',
    copyJson: 'Copy JSON',
    copyValues: 'Copy Values',
    supportedDataTypes: 'Supported Data Types'
  },
  dataTypes: {
    string: 'String',
    int: 'Integer',
    float: 'Float',
    bool: 'Boolean',
    array: 'Array',
    object: 'Object',
    null: 'NULL',
    resource: 'Resource'
  },
  instructions: {
    title: 'Instructions',
    steps: [
      'Use var_dump() function in PHP code to output variables',
      'Copy the output content to the left input box',
      'The tool will automatically parse and format the display',
      'Click fold/unfold buttons to view nested structures'
    ]
  },
  performance: {
    waiting: 'Waiting for input to complete...',
    parsing: 'Parsing data...',
    inputChars: 'Input: {count} characters',
    parsedItems: 'Parsed: {count} items',
    processing: 'Processing complex data structure, please wait...'
  },
  errors: {
    parseFailed: 'Parse failed: Input content is not a valid var_dump output format',
    invalidFormat: 'Invalid format'
  },
  footer: {
    about: {
      title: 'About Tool',
      description: 'This is a professional PHP var_dump output formatting tool that helps developers better understand and debug PHP code. Supports all PHP data types and provides syntax highlighting and interactive folding functionality.'
    },
    features: {
      title: 'Features',
      items: [
        '• Supports all PHP data types',
        '• Syntax highlighting display',
        '• Interactive fold/unfold',
        '• Responsive design',
        '• Completely free to use',
        '• No registration required'
      ]
    },
    tech: {
      title: 'Tech Stack',
      items: [
        '• Next.js 14',
        '• React 18',
        '• TypeScript',
        '• Tailwind CSS',
        '• Client-side parsing'
      ]
    },
    copyright: '© 2024 FormatVarDump. All rights reserved.',
    links: {
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
      contact: 'Contact Us'
    }
  }
}

// 翻译映射
const translations: Record<Language, Translations> = {
  zh: zhTranslations,
  en: enTranslations,
  ja: jaTranslations,
  ko: koTranslations,
  fr: frTranslations,
  de: deTranslations,
  es: esTranslations,
  pt: ptTranslations,
  ru: ruTranslations,
  ar: arTranslations
}

/**
 * 获取翻译文本
 * 提供类型安全的翻译键访问
 */
export function getTranslation(language: Language, key: TranslationKey): string | string[] {
  try {
    const keys = key.split('.')
    let value: any = translations[language]
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        // 如果找不到翻译，回退到中文
        value = translations.zh
        for (const fallbackKey of keys) {
          if (value && typeof value === 'object' && fallbackKey in value) {
            value = value[fallbackKey]
          } else {
            console.warn(`翻译键 "${key}" 在语言 "${language}" 和回退语言 "zh" 中都不存在`)
            return key // 返回原始键
          }
        }
      }
    }
    
    return value
  } catch (error) {
    console.error(`获取翻译失败: ${key} (${language})`, error)
    return key
  }
}

/**
 * 格式化翻译文本（支持占位符）
 * 提供类型安全的参数替换
 */
export function formatTranslation(language: Language, key: TranslationKey, params: TranslationParams = {}): string {
  try {
    let text = getTranslation(language, key)
    
    // 确保text是字符串
    if (Array.isArray(text)) {
      text = text.join('')
    }
    
    if (typeof text !== 'string') {
      console.warn(`翻译键 "${key}" 返回的不是字符串类型:`, typeof text)
      return key
    }
    
    // 替换占位符
    Object.entries(params).forEach(([placeholder, value]) => {
      const regex = new RegExp(`\\{${placeholder}\\}`, 'g')
      text = text.replace(regex, String(value))
    })
    
    return text
  } catch (error) {
    console.error(`格式化翻译失败: ${key} (${language})`, error)
    return key
  }
}

/**
 * 获取数组类型的翻译
 * 提供类型安全的数组翻译访问
 */
export function getTranslationArray(language: Language, key: ArrayTranslationKey): string[] {
  try {
    const value = getTranslation(language, key)
    
    if (Array.isArray(value)) {
      return value
    }
    
    console.warn(`翻译键 "${key}" 不是数组类型:`, typeof value)
    return []
  } catch (error) {
    console.error(`获取数组翻译失败: ${key} (${language})`, error)
    return []
  }
}

/**
 * 获取支持的语言列表
 */
export function getSupportedLanguages(): { code: Language; name: string; flag: string }[] {
  return [
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'ko', name: '한국어', flag: '🇰🇷' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' }
  ]
}

/**
 * 检测浏览器语言
 */
export function detectLanguage(): Language {
  if (typeof window === 'undefined') return 'zh'
  
  const browserLang = navigator.language.toLowerCase()
  
  // 按优先级检测语言
  if (browserLang.startsWith('zh')) {
    return 'zh'
  } else if (browserLang.startsWith('en')) {
    return 'en'
  } else if (browserLang.startsWith('ja')) {
    return 'ja'
  } else if (browserLang.startsWith('ko')) {
    return 'ko'
  } else if (browserLang.startsWith('fr')) {
    return 'fr'
  } else if (browserLang.startsWith('de')) {
    return 'de'
  } else if (browserLang.startsWith('es')) {
    return 'es'
  } else if (browserLang.startsWith('pt')) {
    return 'pt'
  } else if (browserLang.startsWith('ru')) {
    return 'ru'
  } else if (browserLang.startsWith('ar')) {
    return 'ar'
  }
  
  return 'zh' // 默认中文
}
