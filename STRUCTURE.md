# 项目结构说明

```
OpenSNA-wiki/
├── docs/                          # 项目调研和实施文档
│   ├── wiki-research.md          # BIThesis-wiki 技术调研
│   ├── implementation-guide.md   # 实施指南
│   └── comparison.md             # 技术方案对比
│
├── wiki/                          # VitePress 文档源文件
│   ├── .vitepress/               # VitePress 配置目录
│   │   ├── config.mts            # 主配置文件
│   │   └── theme/                # 主题自定义
│   │       ├── index.ts          # 主题入口
│   │       └── custom.css        # 自定义样式
│   │
│   ├── guide/                    # 指南文档
│   │   ├── index.md              # 介绍页面
│   │   └── getting-started.md    # 快速开始
│   │
│   ├── api/                      # API 文档
│   │   └── index.md              # API 概览
│   │
│   ├── public/                   # 静态资源目录
│   │   └── .gitkeep              # (添加 logo.png, favicon.ico 等)
│   │
│   └── index.md                  # 首页
│
├── .gitignore                    # Git 忽略配置
├── package.json                  # 项目依赖配置
├── README.md                     # 项目说明
└── STRUCTURE.md                  # 本文件
```

## 目录说明

### docs/
存放项目调研文档和实施指南，不会被构建到最终网站中。

### wiki/
VitePress 文档源文件目录，所有文档内容都在这里编写。

### wiki/.vitepress/
VitePress 配置和主题自定义文件。

### wiki/guide/
用户指南文档，包括介绍、快速开始等内容。

### wiki/api/
API 参考文档。

### wiki/public/
静态资源目录，存放图片、字体等文件。构建时会被复制到输出目录根路径。

## 开发流程

1. 安装依赖：`pnpm install`
2. 启动开发服务器：`pnpm dev`
3. 编辑 `wiki/` 目录下的 Markdown 文件
4. 浏览器自动刷新预览更改
5. 构建生产版本：`pnpm build`
6. 预览构建结果：`pnpm preview`

## 添加新页面

1. 在相应目录下创建 `.md` 文件
2. 在 `wiki/.vitepress/config.mts` 中更新 `sidebar` 配置
3. 如需添加到导航栏，更新 `nav` 配置

## 自定义主题

- 修改 `wiki/.vitepress/theme/custom.css` 调整样式
- 在 `wiki/.vitepress/theme/index.ts` 中注册全局组件
- 创建 Vue 组件放在 `wiki/.vitepress/theme/components/` 目录
