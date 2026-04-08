# Vercel 首次上线清单

这个项目当前按 `Vite + React + BrowserRouter` 的静态托管方式上线。

## 1. 推送到 GitHub

1. 在 GitHub 创建一个新的 `public` 仓库，推荐名称：`bauhaus-portfolio`
2. 不要在 GitHub 初始化 README、`.gitignore` 或 license，避免和本地仓库冲突
3. 在本地关联远端：

```bash
git remote add origin <your-github-repo-url>
git branch -M main
git push -u origin main
```

## 2. 在 Vercel 导入仓库

1. 登录 Vercel
2. 点击 `Add New Project`
3. 选择 GitHub 仓库 `bauhaus-portfolio`
4. 确认以下构建参数：
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: 默认即可

## 3. 路由刷新不 404

项目使用 `BrowserRouter`，所以必须保留仓库根目录下的 `vercel.json`。

它会把这些页面的直链和刷新都回退到 `index.html`：

- `/`
- `/works`
- `/about`
- `/works/:id`

## 4. 首次部署后检查

部署完成后，用 Vercel 提供的 `*.vercel.app` 域名检查：

1. 首页能打开
2. `/works` 能打开
3. `/about` 能打开
4. 随便打开一个 `/works/:id`
5. 刷新作品详情页不 404
6. 图片、SVG、视频都能正常加载

## 5. 当前上线风险

当前项目可以上线，但媒体资源偏重。正式公开前建议优先压缩：

- 首屏图片
- 首屏视频/GIF
- 10MB 以上的大 PNG / GIF / MP4

如果后续视频继续增多，建议把重视频迁到 CDN 或对象存储。
