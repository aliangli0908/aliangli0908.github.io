# 李阿亮 / Aliang Li — 双语学术个人主页（GitHub Pages 发布版）

这是一个纯静态网站：`index.html`、`styles.css`、`site-data.js`、`script.js` 和相关资源已经全部包含在内，不需要 Node.js、数据库或构建命令。

## 免费托管（首次部署）

1. 前往 https://github.com/signup 创建 GitHub Free 账户，完成邮箱验证。
2. 新建 **Public** 仓库，名称必须是 `<你的 GitHub 用户名>.github.io`。你的用户名是 `aliangli0908`，仓库名应为 **`aliangli0908.github.io`**。不要勾选自动生成 README（压缩包里已经有 README）。
3. 解压此 ZIP，将**解压目录内的文件和文件夹**（不是 ZIP 文件，也不是外层目录）拖入 GitHub 的上传界面。确保 `index.html` 在仓库根目录，可以直接看到 `index.html`、`styles.css`、`script.js`、`site-data.js`、`assets/`、`files/`。`.nojekyll` 是可选的隐藏文件，没上传它也可以正常显示本站。
4. 上传文件后，在下方提交更改（Commit changes）。
5. 进入仓库 `Settings → Pages → Build and deployment`，`Source` 选择 `Deploy from a branch`，`Branch` 选择 `main` 和 `/(root)`，保存。
6. 访问 `https://aliangli0908.github.io/`，测试 `https://aliangli0908.github.io/?lang=zh` 和 `https://aliangli0908.github.io/?lang=en` 两个页面，检查论文链接与英文 CV。

官方说明： https://docs.github.com/en/pages/quickstart

## 文件和功能

- **`index.html`** 必须在仓库根目录，不要再多包一层文件夹。
- **`assets/name-waveform.png`**：名字声波图。
- **`files/cv/Aliang_Li_CV.pdf`**：用户指定的英文 CV PDF（原样拷贝，不提供 Word）。
- **`files/papers/`**：6 篇上传的论文 PDF；对应论文后的 `[pdf]` 可打开文件。
- **`site-data.js`**：学术内容、研究方向、论文列表和资源链接。
- **`script.js`**：中英双语显示与交互逻辑。
- **`styles.css`**：视觉样式。
- **`.nojekyll`**：可选的 GitHub Pages 静态站点标记。

## 正式公开前务必阅读

- **版权授权**：6 篇论文 PDF 中包含期刊排版或数据库下载版本。只有在出版社/期刊的自存档政策允许公开传播时，才应上传这些版本到公开仓库。否则请在 `site-data.js` 中把对应条目的 `links` 改成合法可公开的作者稿或 DOI 链接，并删除 `files/papers/` 中相应 PDF。`Public` 仓库内的所有内容都可以被其他人访问及下载。
- **隐私**：公开仓库不是私密备份。仔细检查 CV 以及页面上的邮件、任职信息是否愿意公开；切勿上传身份证、密码、手机号码等敏感信息。
- **发表信息**：网站显示 2026 年《语言学论丛》论文的实际标题《哈尼语递进性差比式构式研究》；英文 CV 保持你提供的 PDF 原文，不做自动改动。
- **SEO/检索**：此版本已去除原稿 `noindex, nofollow` 元标签。但 Google/Bing/百度收录仍不保证，尤其 GitHub Pages 在中国大陆的访问质量因网络而异。

## 后续更新

1. 修改相应网页文件或论文 PDF。
2. 在 GitHub 仓库 `Add file → Upload files` 上传并覆盖对应文件，提交修改。
3. GitHub Pages 会根据配置自动重新部署。

若将来绑定独立域名，可以在 `Settings → Pages → Custom domain` 中配置。
