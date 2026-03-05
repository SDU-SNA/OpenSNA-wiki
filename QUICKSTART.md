# 快速启动指南

## 前置要求

- Node.js 18+
- pnpm (推荐) 或 npm

## 安装 pnpm

```bash
npm install -g pnpm
```

## 启动项目

### 1. 安装依赖

```bash
pnpm install
```

### 2. 启动开发服务器

```bash
pnpm dev
```

访问 http://localhost:5173 查看网站。

### 3. 构建生产版本

```bash
pnpm build
```

构建产物在 `wiki/.vitepress/dist/` 目录。

### 4. 预览构建结果

```bash
pnpm preview
```

## 下一步

- 查看 [STRUCTURE.md](./STRUCTURE.md) 了解项目结构
- 查看 [docs/implementation-guide.md](./docs/implementation-guide.md) 学习如何自定义
- 编辑 `wiki/` 目录下的 Markdown 文件开始写文档

## 常见问题

### 端口被占用

如果 5173 端口被占用，VitePress 会自动使用下一个可用端口。

### 热更新不生效

尝试重启开发服务器，或清除缓存：

```bash
rm -rf wiki/.vitepress/cache
pnpm dev
```

### 构建失败

检查是否有语法错误或配置问题，查看终端错误信息。
