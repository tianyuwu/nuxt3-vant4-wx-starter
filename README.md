# Nuxt 3 Vant Starter

本项目是在官方模板下进行了一些通用功能的配置和集成，主要包括以下：

- [x] 集成Vant
- [x] 集成unocss
- [x] 集成postcss-pxtorem，自动将px单位转换为rem单位以进行移动端适配
- [x] 实现了微信授权登录及鉴权流程(使用cookie管理登录态)

了解更多信息可查看官方[Nuxt 3 文档](https://nuxt.com/docs/getting-started/introduction)。


## 安装

确保用以下命令安装了依赖:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## 运行开发环境

运行如下命令可运行开发环境，项目会运行在http://localhost:3000

```bash
npm run dev
```

## 构建生产环境

构建生产环境应用使用如下命令:

```bash
npm run build
```

本地预览生产环境构建：

```bash
npm run preview
```

更多构建信息可查看[deployment documentation](https://nuxt.com/docs/getting-started/deployment)。
