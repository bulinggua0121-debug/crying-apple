# Crying Apple

一个用于批量处理《集合啦！动物森友会》设计截图的本地工具项目。

## 项目结构

- `index.html`：页面入口
- `style.css`：页面样式
- `script.js`：交互逻辑与图片处理逻辑
- `electron/main.js`：桌面应用窗口入口
- `.github/workflows/build-desktop.yml`：GitHub Actions 自动打包流程

## 网页版使用方式

1. 直接用浏览器打开 `index.html`
2. 拖入截图文件夹，或点击上传文件夹
3. 点击“开始标注”生成结果
4. 点击“下载图片”保存输出

## 输入要求

- 当前仅支持原始截图尺寸为 `1280x720`
- 非该尺寸的图片会在处理时提示错误

## 本地桌面开发

```bash
npm install
npm run dev
```

## GitHub Actions 自动打包

项目已经配置好 GitHub Actions，会自动生成：

- macOS 的 `.dmg`
- Windows 的 `.exe`

触发方式：

- 在 GitHub 的 `Actions` 页面手动运行 `Build Desktop Apps`
- 或者推送形如 `v1.0.0` 的 tag 自动触发

打包完成后可以在对应 workflow 的 `Artifacts` 里下载：

- `macos-dmg`
- `windows-builds`

## 上传静态网页时至少保留

- `index.html`
- `style.css`
- `script.js`
