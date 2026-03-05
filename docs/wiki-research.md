# BIThesis-wiki 技术调研报告

## 项目概述

BIThesis-wiki 是一个基于 VitePress 构建的文档网站，为北京理工大学 LaTeX 模板提供在线文档支持。

## 技术栈

### 核心框架
- **VitePress 1.6.4**: 基于 Vite 和 Vue 3 的静态站点生成器
- **Vue 3.5.29**: 用于自定义组件开发
- **TypeScript 5.9.3**: 类型安全的开发体验

### UI 组件库
- **Naive UI 2.43.2**: 提供丰富的 Vue 3 组件
- **@css-render/vue3-ssr**: 支持 SSR 的 CSS 渲染

### Markdown 增强
- **markdown-it-footnote**: 脚注支持
- **gray-matter**: 解析 frontmatter

### 代码质量工具
- **ESLint 9**: 代码检查
- **Prettier 3**: 代码格式化
- **TypeScript ESLint**: TypeScript 代码规范

## 项目结构

```
BIThesis-wiki-main/
├── wiki/                          # 文档源文件目录
│   ├── .vitepress/               # VitePress 配置
│   │   ├── config.mts            # 主配置文件
│   │   ├── theme/                # 主题自定义
│   │   │   ├── index.ts          # 主题入口
│   │   │   ├── custom.css        # 自定义样式
│   │   │   ├── Layout.vue        # 布局组件
│   │   │   └── *.vue             # 自定义组件
│   │   ├── naive-ui-adapter/     # Naive UI 适配器
│   │   └── util.ts               # 工具函数
│   ├── guide/                    # 指南文档
│   ├── faq/                      # 常见问题（59个文件）
│   ├── news/                     # 更新日志
│   ├── video/                    # 视频教程
│   ├── assets/                   # 图片资源
│   ├── public/                   # 静态资源
│   └── index.md                  # 首页
├── assets/                       # 项目资源
├── package.json                  # 依赖配置
└── README.md                     # 项目说明
```

## 核心功能特性

### 1. 导航配置
- **顶部导航**: 文档指南、疑难杂症、在线模板、模板下载、加入讨论、GitHub
- **侧边栏**: 按目录分组，支持多级嵌套
- **面包屑导航**: 自动生成上一页/下一页链接

### 2. 首页设计
- Hero 区域：品牌名称、标语、操作按钮
- Features 区域：特性展示（3个卡片）
- 自定义渐变色主题

### 3. 搜索功能
- 本地搜索（local provider）
- 中文分词支持（Intl.Segmenter）

### 4. Markdown 增强
- 脚注支持
- 自定义链接渲染
- 锚点生成优化
- Frontmatter 元数据

### 5. 主题定制
- 自定义品牌色（BIThesis 绿色）
- 外部链接图标自定义
- 响应式设计
- 暗色模式支持

### 6. 构建优化
- 自动生成 sitemap
- 页面重定向支持
- 编辑链接（GitHub）
- 最后更新时间

### 7. 自定义组件
- `BITSetupExample.vue`: 设置示例
- `Contribution.vue`: 贡献者展示
- `FAQList.vue`: FAQ 列表
- `OpenIn.vue` / `OpenInAll.vue`: 打开方式
- `TemplateList.vue`: 模板列表

## 部署方式

项目支持多种部署平台：
- **Vercel**: 主要部署平台
- **Netlify**: 备用部署平台

## 开发命令

```bash
# 安装依赖
pnpm install

# 本地开发（热重载）
pnpm dev

# 构建生产版本
pnpm build

# 预览构建结果
pnpm preview

# 代码格式化
pnpm format

# 代码检查
pnpm lint:prettier
```

## 配置要点

### VitePress 配置 (config.mts)

```typescript
export default defineConfig({
  lang: 'zh-CN',
  title: '站点标题',
  description: '站点描述',
  
  // SEO 优化
  head: [
    // favicon, og:image 等
  ],
  
  // 主题配置
  themeConfig: {
    nav: [],        // 顶部导航
    sidebar: {},    // 侧边栏
    search: {},     // 搜索配置
    editLink: {},   // 编辑链接
    footer: {},     // 页脚
  },
  
  // Markdown 配置
  markdown: {
    config: (md) => {
      // 插件配置
    }
  },
  
  // 构建钩子
  buildEnd(site) {},
  transformPageData(page, context) {},
})
```

### 主题自定义 (theme/index.ts)

```typescript
import DefaultTheme from 'vitepress/theme'
import { Layout, enhanceApp } from '../naive-ui-adapter/theme'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp,
}
```

## 适用场景

这个技术栈适合：
- ✅ 技术文档网站
- ✅ 产品使用手册
- ✅ 开源项目文档
- ✅ 知识库/Wiki
- ✅ 博客网站
- ✅ 需要中文搜索的文档

## 优势分析

1. **性能优秀**: Vite 驱动，开发体验流畅
2. **SEO 友好**: 静态站点生成，利于搜索引擎收录
3. **易于维护**: Markdown 编写，Git 版本控制
4. **主题灵活**: 基于 Vue 3，可深度定制
5. **部署简单**: 静态文件，支持多种托管平台
6. **中文支持**: 内置中文分词搜索
7. **组件丰富**: 可使用 Vue 生态组件

## 建议的实施步骤

### 第一阶段：基础搭建
1. 初始化 VitePress 项目
2. 配置基本导航和侧边栏
3. 创建首页和基础页面结构
4. 设置品牌色和基础样式

### 第二阶段：内容迁移
1. 组织文档目录结构
2. 编写/迁移 Markdown 文档
3. 添加图片和静态资源
4. 配置搜索功能

### 第三阶段：功能增强
1. 开发自定义 Vue 组件
2. 集成 UI 组件库（如需要）
3. 添加 Markdown 插件
4. 优化 SEO 配置

### 第四阶段：部署上线
1. 配置构建脚本
2. 选择部署平台
3. 设置 CI/CD
4. 配置域名和 HTTPS

## 注意事项

1. **包管理器**: 项目使用 pnpm，建议保持一致
2. **Node 版本**: 建议使用 Node 18+ 
3. **图片优化**: 注意图片大小，影响加载速度
4. **中文路径**: 避免使用中文文件名，影响 URL
5. **构建时间**: 文档较多时构建可能较慢
6. **搜索限制**: 本地搜索对大型文档站点可能不够用

## 参考资源

- [VitePress 官方文档](https://vitepress.dev/)
- [Vue 3 文档](https://vuejs.org/)
- [Naive UI 文档](https://www.naiveui.com/)
- [BIThesis-wiki 源码](https://github.com/BITNP/BIThesis-wiki)
- [BIThesis-wiki 在线预览](https://bithesis.bitnp.net)
