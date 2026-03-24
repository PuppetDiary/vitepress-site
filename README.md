# 个人随笔系统

基于 VitePress 构建的静态网站，支持音乐、电影、书籍、运动、旅游等多个领域的内容记录。

## 快速开始

```bash
# 安装依赖
npm install

# 本地开发
npm run docs:dev

# 构建生产版本
npm run docs:build

# 预览构建结果
npm run docs:preview
```

## 创建新随笔

```bash
npm run new
```

## 项目结构

```
docs/                   # VitePress 文档目录
├── music/             # 音乐模块
├── movies/            # 电影模块
├── books/             # 书籍模块
├── sports/            # 运动模块
├── travel/            # 旅游模块
└── logs/              # 三级日志系统
    ├── index.md       # 一级：系统全局日志
    ├── modules/       # 二级：模块状态日志
    └── details/       # 三级：详细修改日志
```

## 部署

推送代码到 GitHub 后，GitHub Actions 会自动构建并部署到 GitHub Pages。

## 技术栈

- VitePress - 静态站点生成器
- Vue 3 - 渐进式 JavaScript 框架
- Markdown - 内容编写格式
