# Vite for Extension - 基于Vue 3的浏览器扩展开发模板

## 项目介绍

这是一个使用 Vue 3 + TypeScript + Vite 构建的浏览器扩展开发模板。该模板提供了一个完整的开发环境，用于快速开发基于Chrome浏览器的扩展程序，支持弹出窗口(Popup)、选项页面(Options)和侧边栏(Side Panel)等多种扩展功能。

## 技术栈

- **前端框架**: Vue 3 (使用 `<script setup>` 语法)
- **开发语言**: TypeScript
- **构建工具**: Vite 6.x
- **样式处理**: SCSS
- **代码规范**: ESLint

## 功能特性

- 📦 基于 Manifest V3 的Chrome扩展
- 🔥 支持热更新的开发环境
- 🛠️ 完整的TypeScript支持
- 🧩 模块化的项目结构
- 🔄 自动生成manifest.json文件
- 📋 支持多种扩展页面类型：
  - Popup (弹出窗口)
  - Options (选项页面)
  - Side Panel (侧边栏)
  - Background (后台脚本)

## 安装与使用

### 前置条件

- Node.js (推荐 v18 或更高版本)
- npm 或 yarn

### 安装依赖

```bash
npm install
```

或者使用 yarn：

```bash
yarn
```

### 开发模式

启动开发服务器：

```bash
npm run dev
```

这将执行以下操作：
1. 清理dist目录
2. 设置开发环境变量
3. 构建项目
4. 启动多个开发服务
5. 生成manifest.json文件
6. 监听文件变化并自动更新

### 构建生产版本

```bash
npm run build:extension
```

构建完成后，扩展文件将生成在 `dist` 目录中。

## 项目结构
├── scripts/                # 构建脚本
│   ├── build-manifest.ts   # 生成manifest.json
│   ├── prepare.ts          # 开发环境准备
│   └── utils.ts            # 工具函数
├── src/
│   ├── assets/             # 静态资源
│   ├── background/         # 后台脚本
│   ├── components/         # 公共组件
│   ├── icons/              # 扩展图标
│   ├── manifest.ts         # 扩展配置
│   ├── options/            # 选项页面
│   ├── popup/              # 弹出窗口
│   └── sidePanel/          # 侧边栏
├── vite.config.ts          # Vite主配置
├── vite.config.background.ts # 后台脚本配置
└── vite.config.content.ts  # 内容脚本配置

-------


## 开发指南

### 修改扩展信息

在 `src/manifest.ts` 文件中修改扩展的名称、版本、描述和权限等信息。

### 添加新页面

1. 在 `src` 目录下创建新的目录
2. 添加 `index.html`、`index.vue` 和 `main.ts` 文件
3. 在 `vite.config.ts` 中添加新页面的入口
4. 在 `src/manifest.ts` 中添加相应的配置

### 后台脚本开发

在 `src/background/index.ts` 中编写后台脚本逻辑，支持与扩展其他部分的通信。

## 调试与测试

### 在Chrome中加载扩展

1. 构建扩展：`npm run build:extension`
2. 打开Chrome浏览器，进入扩展管理页面 (`chrome://extensions/`)
3. 启用开发者模式
4. 点击"加载已解压的扩展程序"，选择项目的 `dist` 目录

### 开发模式下的调试

开发模式下，可以使用Vue DevTools和Chrome DevTools进行调试：

- 对于弹出窗口和选项页面，右键点击并选择"检查"打开DevTools
- 对于后台脚本，在扩展管理页面点击"背景页"链接

## 许可证

[MIT](LICENSE)

## 相关资源

- [Vue 3 文档](https://vuejs.org/)
- [Vite 文档](https://vitejs.dev/)
- [Chrome 扩展开发文档](https://developer.chrome.com/docs/extensions/)
- [TypeScript 文档](https://www.typescriptlang.org/)