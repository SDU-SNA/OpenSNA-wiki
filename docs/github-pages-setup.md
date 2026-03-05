# GitHub Pages 部署指南

## 已完成的配置

### 1. CI/CD 工作流
已创建 `.github/workflows/deploy.yml` 文件，配置了自动部署流程：
- ✅ 在 main 分支推送时自动触发
- ✅ 使用 pnpm 安装依赖
- ✅ 构建 VitePress 文档
- ✅ 自动部署到 GitHub Pages

### 2. VitePress 配置
已在 `wiki/.vitepress/config.mts` 中添加：
```typescript
base: '/OpenSNA-wiki/',
```

## 需要在 GitHub 上完成的设置

### 步骤 1: 启用 GitHub Pages

1. 访问仓库：https://github.com/SDU-SNA/OpenSNA-wiki
2. 点击 **Settings** (设置)
3. 在左侧菜单找到 **Pages**
4. 在 **Build and deployment** 部分：
   - **Source**: 选择 `GitHub Actions`
   - 不要选择 "Deploy from a branch"

### 步骤 2: 推送代码

当网络恢复后，运行：

```bash
git push
```

这将触发 GitHub Actions 工作流自动构建和部署。

### 步骤 3: 查看部署状态

1. 在仓库页面点击 **Actions** 标签
2. 查看 "部署文档" 工作流的运行状态
3. 等待构建完成（通常需要 1-2 分钟）

### 步骤 4: 访问网站

部署成功后，访问：
```
https://sdu-sna.github.io/OpenSNA-wiki/
```

## 工作流说明

### 触发条件
- 推送到 main 分支时自动触发

### 构建步骤
1. 检出代码
2. 设置 Node.js 20
3. 设置 pnpm 8
4. 安装依赖 (`pnpm install`)
5. 构建文档 (`pnpm build`)
6. 上传构建产物
7. 部署到 GitHub Pages

### 权限配置
工作流已配置必要的权限：
- `contents: read` - 读取仓库内容
- `pages: write` - 写入 Pages
- `id-token: write` - 身份验证

## 本地测试

在推送前，可以本地测试构建：

```bash
# 安装依赖
pnpm install

# 构建
pnpm build

# 预览构建结果
pnpm preview
```

访问 http://localhost:4173/OpenSNA-wiki/ 查看效果。

## 常见问题

### Q: 部署失败怎么办？

A: 检查 Actions 标签页的错误日志：
1. 点击失败的工作流运行
2. 查看具体的错误信息
3. 常见问题：
   - 依赖安装失败：检查 package.json
   - 构建失败：检查 VitePress 配置
   - 权限问题：确保 Pages 设置正确

### Q: 页面样式丢失？

A: 确保 `base` 配置正确：
- 配置文件：`wiki/.vitepress/config.mts`
- 配置项：`base: '/OpenSNA-wiki/'`
- 注意：仓库名大小写要匹配

### Q: 如何更新网站？

A: 只需推送到 main 分支：
```bash
git add .
git commit -m "docs: 更新文档"
git push
```

GitHub Actions 会自动重新构建和部署。

### Q: 如何禁用自动部署？

A: 有两种方式：
1. 删除 `.github/workflows/deploy.yml` 文件
2. 在工作流文件中添加 `if: false` 条件

## 自定义域名（可选）

如果要使用自定义域名：

1. 在 `wiki/public/` 目录创建 `CNAME` 文件
2. 文件内容为你的域名，例如：`docs.opensna.org`
3. 在域名提供商处配置 DNS：
   - 类型：CNAME
   - 名称：docs（或其他子域名）
   - 值：sdu-sna.github.io
4. 在 GitHub Pages 设置中配置自定义域名

## 部署到其他平台

如果不使用 GitHub Pages，可以部署到：

### Vercel
1. 导入 GitHub 仓库
2. 构建命令：`pnpm build`
3. 输出目录：`wiki/.vitepress/dist`
4. 不需要 base 配置

### Netlify
1. 导入 GitHub 仓库
2. 构建命令：`pnpm build`
3. 发布目录：`wiki/.vitepress/dist`
4. 不需要 base 配置

## 提交记录

相关提交：
- `5b12105` - ci: 添加 GitHub Pages 自动部署工作流
- `69b6510` - config: 配置 GitHub Pages 的 base 路径
