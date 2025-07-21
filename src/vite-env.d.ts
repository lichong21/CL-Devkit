/// <reference types="vite/client" />

declare module '*.css' {
  const content: any;
  export default content;
}

declare module '@arco-design/web-vue/dist/arco.css';

// UnoCSS 类型声明
declare module 'virtual:uno.css' {
  const css: string;
  export default css;
} 