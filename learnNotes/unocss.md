# UnoCSS 学习指南

## 🚀 简介

UnoCSS 是一个即时的原子化 CSS 引擎，具有高性能和灵活性。它采用"按需生成"的方式，只生成你实际使用的 CSS。

## 📚 基本概念

### 1. 原子化 CSS
UnoCSS 使用原子化 CSS 的方法，每个类名对应一个或少数几个 CSS 属性。

```html
<!-- 传统 CSS -->
<div class="button">Button</div>

<!-- UnoCSS 原子化 -->
<div class="bg-blue-500 text-white px-4 py-2 rounded">Button</div>
```

## 🎯 核心语法

### 1. 尺寸单位

```css
/* 数字直接对应 rem，1 = 0.25rem = 4px */
w-4        /* width: 1rem */
h-8        /* height: 2rem */
p-2        /* padding: 0.5rem */
m-6        /* margin: 1.5rem */

/* 特殊单位 */
w-1/2      /* width: 50% */
w-full     /* width: 100% */
w-screen   /* width: 100vw */
h-screen   /* height: 100vh */
```

### 2. 颜色系统

```css
/* 基础颜色 */
text-red-500     /* 红色文字 */
bg-blue-600      /* 蓝色背景 */
border-green-400 /* 绿色边框 */

/* 颜色透明度 */
bg-red-500/50    /* 50% 透明度 */
text-blue-600/75 /* 75% 透明度 */

/* 任意值 */
text-[#ff0000]   /* 自定义颜色 */
bg-[rgb(255,0,0)] /* RGB 颜色 */
```

### 3. 间距系统

```css
/* Padding */
p-4        /* padding: 1rem */
px-4       /* padding-left: 1rem; padding-right: 1rem */
py-2       /* padding-top: 0.5rem; padding-bottom: 0.5rem */
pt-3       /* padding-top: 0.75rem */
pr-4       /* padding-right: 1rem */
pb-5       /* padding-bottom: 1.25rem */
pl-6       /* padding-left: 1.5rem */

/* Margin */
m-4        /* margin: 1rem */
mx-auto    /* margin-left: auto; margin-right: auto */
my-2       /* margin-top: 0.5rem; margin-bottom: 0.5rem */
mt-4       /* margin-top: 1rem */
-mt-4      /* margin-top: -1rem (负值) */
```

## 🔥 常用快捷缩写

### 1. 布局相关

```css
/* Flexbox */
flex           /* display: flex */
flex-col       /* flex-direction: column */
flex-row       /* flex-direction: row */
flex-wrap      /* flex-wrap: wrap */
items-center   /* align-items: center */
justify-center /* justify-content: center */
justify-between /* justify-content: space-between */
flex-1         /* flex: 1 1 0% */

/* Grid */
grid           /* display: grid */
grid-cols-3    /* grid-template-columns: repeat(3, minmax(0, 1fr)) */
col-span-2     /* grid-column: span 2 / span 2 */
row-span-2     /* grid-row: span 2 / span 2 */

/* Position */
relative       /* position: relative */
absolute       /* position: absolute */
fixed          /* position: fixed */
sticky         /* position: sticky */
top-0          /* top: 0 */
right-0        /* right: 0 */
z-10          /* z-index: 10 */
```

### 2. 外观样式

```css
/* 边框 */
border         /* border-width: 1px */
border-2       /* border-width: 2px */
border-solid   /* border-style: solid */
border-dashed  /* border-style: dashed */
rounded        /* border-radius: 0.25rem */
rounded-lg     /* border-radius: 0.5rem */
rounded-full   /* border-radius: 9999px */

/* 阴影 */
shadow         /* box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1) */
shadow-lg      /* box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1) */
shadow-none    /* box-shadow: 0 0 #0000 */

/* 透明度 */
opacity-50     /* opacity: 0.5 */
opacity-75     /* opacity: 0.75 */
opacity-100    /* opacity: 1 */
```

### 3. 文字样式

```css
/* 字体大小 */
text-xs        /* font-size: 0.75rem */
text-sm        /* font-size: 0.875rem */
text-base      /* font-size: 1rem */
text-lg        /* font-size: 1.125rem */
text-xl        /* font-size: 1.25rem */
text-2xl       /* font-size: 1.5rem */

/* 字体粗细 */
font-thin      /* font-weight: 100 */
font-normal    /* font-weight: 400 */
font-medium    /* font-weight: 500 */
font-bold      /* font-weight: 700 */

/* 文本对齐 */
text-left      /* text-align: left */
text-center    /* text-align: center */
text-right     /* text-align: right */

/* 行高 */
leading-none   /* line-height: 1 */
leading-tight  /* line-height: 1.25 */
leading-normal /* line-height: 1.5 */
leading-loose  /* line-height: 2 */
```

### 4. 响应式前缀

```css
/* 断点前缀 */
sm:text-lg     /* @media (min-width: 640px) */
md:flex-row    /* @media (min-width: 768px) */
lg:grid-cols-4 /* @media (min-width: 1024px) */
xl:text-2xl    /* @media (min-width: 1280px) */
```

### 5. 状态前缀

```css
/* 伪类 */
hover:bg-blue-600   /* :hover */
focus:ring-2        /* :focus */
active:bg-blue-700  /* :active */
disabled:opacity-50 /* :disabled */
first:mt-0          /* :first-child */
last:mb-0           /* :last-child */

/* 组合使用 */
hover:scale-105 transition-transform /* 悬停时放大并添加过渡 */
```

## 🎨 高级特性

### 1. 属性化模式 (Attributify)

```html
<!-- 传统方式 -->
<div class="bg-blue-500 text-white p-4 rounded-lg shadow-lg">

<!-- 属性化方式 -->
<div 
  bg="blue-500" 
  text="white" 
  p="4" 
  rounded="lg" 
  shadow="lg">
```

### 2. 变体组 (Variant Groups)

```html
<!-- 传统方式 -->
<div class="hover:bg-blue-500 hover:text-white hover:scale-105">

<!-- 变体组方式 -->
<div class="hover:(bg-blue-500 text-white scale-105)">
```

### 3. 任意值语法

```css
/* 任意数值 */
w-[123px]      /* width: 123px */
h-[50vh]       /* height: 50vh */
top-[13px]     /* top: 13px */

/* 任意CSS属性 */
[writing-mode:vertical-lr]  /* writing-mode: vertical-lr */
[mask-type:luminance]       /* mask-type: luminance */
```

### 4. 图标使用 (preset-icons)

```html
<!-- 使用 Iconify 图标 -->
<div class="i-carbon-settings"></div>
<div class="i-mdi-home"></div>
<div class="i-heroicons-user-solid"></div>
```

## 🛠️ 项目配置最佳实践

### 1. 快捷方式 (Shortcuts) 配置

```typescript
// unocss.config.ts
export default defineConfig({
  shortcuts: [
    // 按钮样式
    ['btn', 'px-4 py-2 rounded cursor-pointer transition-colors'],
    ['btn-primary', 'btn bg-blue-500 text-white hover:bg-blue-600'],
    ['btn-secondary', 'btn bg-gray-200 text-gray-800 hover:bg-gray-300'],
    
    // 卡片样式
    ['card', 'bg-white rounded-lg shadow-md p-6'],
    ['card-hover', 'card hover:shadow-lg transition-shadow'],
    
    // 布局快捷方式
    ['center', 'flex items-center justify-center'],
    ['flex-col-center', 'flex flex-col items-center justify-center'],
  ],
})
```

### 2. 主题配置

```typescript
// unocss.config.ts
export default defineConfig({
  theme: {
    colors: {
      primary: '#3b82f6',
      secondary: '#64748b',
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
    },
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['Fira Code', 'monospace'],
    },
  },
})
```

## 💡 最佳实践

### 1. 组件化思维

```vue
<!-- 好的做法：创建可复用的组件 -->
<template>
  <button :class="buttonClasses">
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  variant: { type: String, default: 'primary' },
  size: { type: String, default: 'md' }
})

const buttonClasses = computed(() => [
  'btn', // 基础样式
  `btn-${props.variant}`, // 变体样式
  `btn-${props.size}` // 尺寸样式
])
</script>
```

### 2. 响应式设计

```html
<!-- 移动优先的响应式设计 -->
<div class="
  grid grid-cols-1 gap-4
  sm:grid-cols-2 sm:gap-6
  md:grid-cols-3 md:gap-8
  lg:grid-cols-4
  xl:gap-12
">
  <!-- 内容 -->
</div>
```

### 3. 性能优化

```typescript
// 配置 safelist 避免重要样式被清除
export default defineConfig({
  safelist: [
    'prose',
    'prose-sm',
    'prose-lg',
    // 动态生成的类名
    ...Array.from({ length: 100 }, (_, i) => `w-${i}`),
  ],
})
```

### 4. 开发时提示

```json
// settings.json (VS Code)
{
  "unocss.root": "unocss.config.ts",
  "editor.quickSuggestions": {
    "strings": true
  }
}
```

## 🔧 常用组合模式

### 1. 卡片组件

```html
<div class="
  bg-white rounded-lg shadow-md p-6
  hover:shadow-lg transition-shadow duration-300
  border border-gray-200
">
  <!-- 卡片内容 -->
</div>
```

### 2. 输入框样式

```html
<input class="
  w-full px-3 py-2 
  border border-gray-300 rounded-md
  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
  placeholder-gray-400
">
```

### 3. 加载状态

```html
<div class="
  animate-spin rounded-full h-8 w-8
  border-b-2 border-blue-500
"></div>
```

### 4. 网格布局

```html
<div class="
  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
  gap-4 md:gap-6 lg:gap-8
  p-4 md:p-6 lg:p-8
">
  <!-- 网格项目 -->
</div>
```

## 📝 调试技巧

### 1. 开发工具

```bash
# 开发时查看生成的 CSS
npm run dev

# 查看 UnoCSS 检查器
# 访问 /__unocss
```

### 2. 样式调试

```html
<!-- 添加调试边框 -->
<div class="border border-red-500 border-dashed">
  调试元素
</div>

<!-- 背景色调试 -->
<div class="bg-red-100">
  背景调试
</div>
```

## 🎯 项目实战示例

基于你的扩展项目，这里是一些实用的样式组合：

### 1. 弹窗样式

```html
<!-- popup/index.vue -->
<div class="
  w-80 h-96 p-4
  bg-white rounded-lg shadow-xl
  flex flex-col
">
  <header class="
    flex items-center justify-between
    pb-4 border-b border-gray-200
  ">
    <h1 class="text-lg font-semibold text-gray-800">扩展标题</h1>
    <button class="
      w-6 h-6 rounded-full
      hover:bg-gray-100 transition-colors
      flex items-center justify-center
    ">×</button>
  </header>
  
  <main class="flex-1 py-4 overflow-y-auto">
    <!-- 内容区域 -->
  </main>
  
  <footer class="
    pt-4 border-t border-gray-200
    flex justify-end space-x-2
  ">
    <button class="btn btn-secondary">取消</button>
    <button class="btn btn-primary">确定</button>
  </footer>
</div>
```

### 2. 侧边栏样式

```html
<!-- sidePanel/index.vue -->
<div class="
  h-screen w-full
  bg-gray-50 flex flex-col
  border-l border-gray-200
">
  <header class="
    h-16 px-6 
    bg-white border-b border-gray-200
    flex items-center justify-between
  ">
    <h1 class="text-xl font-bold text-gray-800">侧边栏</h1>
  </header>
  
  <nav class="p-4 space-y-2">
    <a class="
      block px-4 py-2 rounded-lg
      text-gray-700 hover:bg-white hover:shadow-sm
      transition-all duration-200
    ">导航项目</a>
  </nav>
  
  <main class="flex-1 p-6 overflow-y-auto">
    <!-- 主要内容 -->
  </main>
</div>
```

这份指南涵盖了 UnoCSS 的核心概念和实用技巧，建议你在实际项目中多练习这些组合，逐步建立自己的样式库。记住，UnoCSS 的强大之处在于它的灵活性和即时性，你可以快速尝试不同的样式组合！
