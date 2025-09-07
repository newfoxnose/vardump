/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 自定义颜色主题，适合代码高亮
        'php-orange': '#F97316',
        'php-blue': '#3B82F6',
        'php-green': '#10B981',
        'php-red': '#EF4444',
        'php-purple': '#8B5CF6',
        'php-yellow': '#F59E0B',
        'php-gray': '#6B7280',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
}
