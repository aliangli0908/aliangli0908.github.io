# Aliang Li · 李阿亮 | 双语学术个人主页

本文件夹是 **完整的 GitHub Pages 版本**。将文件夹内部所有内容上传到 GitHub 仓库 `aliangli0908/aliangli0908.github.io` 的根目录，即可发布/更新：

- 主页地址：https://aliangli0908.github.io/
- 上传页面：https://github.com/aliangli0908/aliangli0908.github.io/upload/main

> **本版更新：** 中文主页和中文版论文栏目不再出现“英文简历 [pdf]”；英文版首页和 Publications 仍保留 CV [pdf] 链接。切换语言时 CV 入口同步显示/隐藏。

## 上传方法

1. 如果下载的是 ZIP，先解压，再**打开解压后的文件夹**。
2. 全选文件夹**里面**的内容（包括 `assets/` 和 `files/`），直接拖到 GitHub 的 Upload files 页面。**不要上传 ZIP 本身；不要多加一层外层文件夹。**
3. GitHub 识别上传完成后点击 **Commit changes**。同一路径/文件名的旧文件可以直接被替换，**不必删除整个仓库**，否则会丢失原有设置。
4. 现有 GitHub Pages 配置保持 `Deploy from a branch`、`main`、`/(root)` 即可。部署完成后用 `Ctrl+F5` 刷新网址。

> 本包与之前的网站目录结构一致。最安全的全量更新方法是直接覆盖，不建议先删除 GitHub 仓库（repository）。上传不会把 Git 提交历史清空。

## 完整文件说明

- `index.html`：中英文主页，已移除姓名声波文字说明和教育经历栏目
- `styles.css`：白底、黑灰字的极简学术排版
- `script.js` 和 `site-data.js`：中英文切换、论文、学术报告、筛选等功能；英文原题保留；中文页国内会议名称为中文、国外会议名称为英文
- `assets/`：声波图和 favicon（仅黑白灰）
- `files/cv/Aliang_Li_CV.pdf`：你最后指定的 **Aliang Li_CV.pdf**，原样保存，只提供 PDF；**仅英文页面显示 CV 链接，中文页面不显示**
- `files/papers/`：六篇原始论文 PDF，论文标题后有对应的 `[pdf]` 链接
- `.nojekyll`：可选的 GitHub Pages 设置文件（隐藏文件，Windows 可能不显示）

## 正式公开的注意事项

Public 仓库中的网站和 PDF 对所有访问者公开。请确认这六份期刊 PDF 的公开分享授权（尤其是出版商排版版的自存档政策），以及 CV 中信息适合公开；不允许公开的版本应替换为作者稿或 DOI 链接。
