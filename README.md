# PHP var_dump 格式化工具

一个专业的PHP var_dump输出格式化工具，使用Next.js和Tailwind CSS构建，支持语法高亮、折叠展开、类型识别等功能。

## 功能特性

- 🎨 **语法高亮** - 支持所有PHP数据类型的语法高亮显示
- 📁 **折叠展开** - 交互式折叠/展开嵌套数组和对象
- 🔍 **类型识别** - 自动识别并标记数据类型
- 📱 **响应式设计** - 完美适配各种设备屏幕
- ⚡ **实时解析** - 输入即解析，无需等待
- 🆓 **完全免费** - 无需注册，直接使用

## 支持的数据类型

- `string` - 字符串
- `int` - 整数
- `float` - 浮点数
- `bool` - 布尔值
- `array` - 数组（支持嵌套）
- `object` - 对象（支持嵌套）
- `NULL` - 空值
- `resource` - 资源

## 技术栈

- **Next.js 14** - React框架
- **TypeScript** - 类型安全
- **Tailwind CSS** - 样式框架
- **客户端解析** - 无需服务器，保护隐私
- **多语种支持** - 支持10种语言，基于Context API的现代化架构

## 快速开始

1. 安装依赖
```bash
npm install
```

2. 启动开发服务器
```bash
npm run dev
```

3. 打开浏览器访问 `http://localhost:3000`

## 使用方法

1. 在PHP代码中使用 `var_dump()` 函数输出变量
2. 复制输出的内容到工具输入框
3. 工具会自动解析并格式化显示
4. 点击折叠/展开按钮查看嵌套结构

## 示例

```php
<?php
$data = [
    'name' => 'John Doe',
    'age' => 30,
    'hobbies' => ['reading', 'coding'],
    'address' => [
        'street' => '123 Main St',
        'city' => 'New York'
    ]
];

var_dump($data);
?>
```

## 构建部署

```bash
# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

## 许可证

MIT License
