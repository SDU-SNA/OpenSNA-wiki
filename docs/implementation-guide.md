# Wiki 网站实施指南

## 快速开始

### 1. 初始化项目

```bash
# 创建项目目录
mkdir my-wiki
cd my-wiki

# 初始化 package.json
pnpm init

# 安装 VitePress
pnpm add -D vitepress vue

# 初始化 VitePress
pnpm vitepress init
```

初始化时的选项建议：
- 文档目录：`docs` 或 `wiki`
- 站点标题：你的项目名称
- 站点描述：简短描述
- 主题：Default Theme + Customization

### 2. 项目结构

```
my-wiki/
├── docs/                      # 文档目录
│   ├── .vitepress/           # VitePress 配置
│   │   ├── config.ts         # 配置文件
│   │   └── theme/            # 主题自定义
│   │       ├── index.ts      # 主题入口
│   │       └── custom.css    # 自定义样式
│   ├── guide/                # 指南文档
│   │   ├── index.md
│   │   └── getting-started.md
│   ├── api/                  # API 文档
│   ├── public/               # 静态资源
│   │   ├── favicon.ico
│   │   └── logo.png
│   └── index.md              # 首页
├── package.json
└── README.md
```

### 3. 配置文件 (docs/.vitepress/config.ts)

```typescript
import { defineConfig } from 'vitepress'

export default defineConfig({
  // 站点基本信息
  lang: 'zh-CN',
  title: '我的项目文档',
  description: '这是一个基于 VitePress 的文档网站',
  
  // 最后更新时间
  lastUpdated: true,
  
  // 主题配置
  themeConfig: {
    // Logo
    logo: '/logo.png',
    
    // 顶部导航
    nav: [
      { text: '指南', link: '/guide/' },
      { text: 'API', link: '/api/' },
      { 
        text: '更多',
        items: [
          { text: 'GitHub', link: 'https://github.com/your-repo' },
          { text: '更新日志', link: '/changelog' }
        ]
      }
    ],
    
    // 侧边栏
    sidebar: {
      '/guide/': [
        {
          text: '开始',
          items: [
            { text: '介绍', link: '/guide/' },
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '安装', link: '/guide/installation' }
          ]
        },
        {
          text: '进阶',
          items: [
            { text: '配置', link: '/guide/configuration' },
            { text: '部署', link: '/guide/deployment' }
          ]
        }
      ],
      '/api/': [
        {
          text: 'API 参考',
          items: [
            { text: '概览', link: '/api/' },
            { text: '核心 API', link: '/api/core' }
          ]
        }
      ]
    },
    
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-repo' }
    ],
    
    // 编辑链接
    editLink: {
      pattern: 'https://github.com/your-repo/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },
    
    // 页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Your Name'
    },
    
    // 搜索
    search: {
      provider: 'local',
      options: {
        // 中文分词支持
        miniSearch: {
          options: {
            processTerm: (term) => {
              const segmenter = new Intl.Segmenter('zh', { granularity: 'word' })
              if (!segmenter) return term
              return Array.from(segmenter.segment(term))
                .map(({ segment }) => segment)
            }
          }
        }
      }
    },
    
    // 目录配置
    outline: {
      level: [2, 3],
      label: '本页目录'
    },
    
    // 文档页脚
    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  }
})
```

### 4. 首页配置 (docs/index.md)

```markdown
---
layout: home

hero:
  name: 我的项目
  text: 简洁、强大、高效
  tagline: 一个令人惊叹的项目描述
  image:
    src: /logo.png
    alt: 项目 Logo
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/getting-started
    - theme: alt
      text: 查看 GitHub
      link: https://github.com/your-repo

features:
  - icon: 🚀
    title: 快速高效
    details: 基于 Vite 构建，开发体验极佳，构建速度飞快
  - icon: 📝
    title: Markdown 驱动
    details: 使用 Markdown 编写文档，专注内容创作
  - icon: 🎨
    title: 主题定制
    details: 基于 Vue 3，可以轻松定制主题和组件
  - icon: 🔍
    title: 全文搜索
    details: 内置搜索功能，支持中文分词
  - icon: 📱
    title: 响应式设计
    details: 完美适配各种设备，移动端体验优秀
  - icon: ⚡
    title: 静态站点
    details: 生成静态 HTML，部署简单，SEO 友好
---
```

### 5. 自定义主题 (docs/.vitepress/theme/index.ts)

```typescript
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册全局组件
    // app.component('MyComponent', MyComponent)
  }
}
```

### 6. 自定义样式 (docs/.vitepress/theme/custom.css)

```css
:root {
  /* 品牌色 */
  --vp-c-brand: #3b82f6;
  --vp-c-brand-light: #60a5fa;
  --vp-c-brand-lighter: #93c5fd;
  --vp-c-brand-dark: #2563eb;
  --vp-c-brand-darker: #1d4ed8;
  
  /* 自定义提示框颜色 */
  --vp-custom-block-tip-text: var(--vp-c-brand);
  --vp-custom-block-tip-border: rgba(59, 130, 246, 0.25);
  --vp-custom-block-tip-bg: rgba(59, 130, 246, 0.05);
}

/* 首页 Hero 渐变色 */
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: linear-gradient(120deg, #3b82f6, #8b5cf6);
}

/* 自定义样式 */
.vp-doc a {
  text-decoration: none;
}

.vp-doc a:hover {
  text-decoration: underline;
}
```

### 7. package.json 脚本

```json
{
  "name": "my-wiki",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vitepress dev docs",
    "build": "vitepress build docs",
    "preview": "vitepress preview docs"
  },
  "devDependencies": {
    "vitepress": "^1.6.4",
    "vue": "^3.5.0"
  }
}
```

## 进阶功能

### 1. 添加 Markdown 插件

```bash
pnpm add -D markdown-it-footnote
```

```typescript
// config.ts
import footnote from 'markdown-it-footnote'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(footnote)
    }
  }
})
```

### 2. 集成 UI 组件库 (Naive UI)

```bash
pnpm add -D naive-ui @css-render/vue3-ssr
```

```typescript
// theme/index.ts
import DefaultTheme from 'vitepress/theme'
import { NButton, NCard } from 'naive-ui'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('NButton', NButton)
    app.component('NCard', NCard)
  }
}
```

### 3. 自定义 Vue 组件

创建 `docs/.vitepress/theme/components/MyComponent.vue`:

```vue
<template>
  <div class="my-component">
    <h3>{{ title }}</h3>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<style scoped>
.my-component {
  padding: 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
}
</style>
```

在 Markdown 中使用：

```markdown
<MyComponent title="示例">
这是组件内容
</MyComponent>
```

### 4. 添加代码组

```markdown
::: code-group

```js [config.js]
export default {
  name: 'my-app'
}
```

```ts [config.ts]
export default {
  name: 'my-app'
} as const
```

:::
```

### 5. 自定义容器

```markdown
::: tip 提示
这是一个提示
:::

::: warning 警告
这是一个警告
:::

::: danger 危险
这是一个危险提示
:::

::: details 点击展开
这是详细内容
:::
```

## 部署指南

### Vercel 部署

1. 将代码推送到 GitHub
2. 在 Vercel 导入项目
3. 构建配置：
   - Build Command: `pnpm build`
   - Output Directory: `docs/.vitepress/dist`
4. 部署

### Netlify 部署

1. 将代码推送到 GitHub
2. 在 Netlify 导入项目
3. 构建配置：
   - Build Command: `pnpm build`
   - Publish Directory: `docs/.vitepress/dist`
4. 部署

### GitHub Pages 部署

创建 `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
          
      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8
          
      - name: Install dependencies
        run: pnpm install
        
      - name: Build
        run: pnpm build
        
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs/.vitepress/dist
```

配置 `config.ts`:

```typescript
export default defineConfig({
  base: '/your-repo-name/', // GitHub Pages 需要
  // ...
})
```

## 最佳实践

### 1. 文档组织

- 按功能模块划分目录
- 使用清晰的文件命名
- 保持目录层级不超过 3 层
- 为每个目录创建 `index.md`

### 2. 图片管理

- 图片放在 `docs/public/images/` 目录
- 使用相对路径引用：`/images/example.png`
- 压缩图片以提高加载速度
- 为图片添加 alt 文本

### 3. 链接管理

- 内部链接使用相对路径：`[链接](/guide/getting-started)`
- 外部链接会自动添加图标
- 避免使用 `.md` 后缀

### 4. SEO 优化

- 为每个页面添加 frontmatter 描述
- 使用语义化的标题结构
- 配置 sitemap
- 添加 Open Graph 标签

### 5. 性能优化

- 启用代码分割
- 压缩图片资源
- 使用 CDN 加速
- 启用浏览器缓存

## 常见问题

### Q: 如何添加自定义域名？

A: 在 `docs/public/` 目录下创建 `CNAME` 文件，内容为你的域名。

### Q: 如何支持多语言？

A: 参考 VitePress 官方文档的 [国际化](https://vitepress.dev/guide/i18n) 章节。

### Q: 如何添加评论功能？

A: 可以集成 Giscus、Gitalk 等评论系统。

### Q: 构建速度慢怎么办？

A: 
- 减少不必要的插件
- 优化图片大小
- 使用增量构建
- 考虑使用 Algolia 搜索替代本地搜索

## 参考资源

- [VitePress 官方文档](https://vitepress.dev/)
- [VitePress 示例](https://github.com/vuejs/vitepress/tree/main/docs)
- [Awesome VitePress](https://github.com/logicspark/awesome-vitepress)
