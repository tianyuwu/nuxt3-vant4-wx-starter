// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'zh-CN',
      },
      link: [],
      script: [],
    }
  },
  // 自定义配置项
  runtimeConfig: {
    // 只在服务端可以访问的配置项
    apiSecret: 'api-secret',
    // 可以暴露给客户端使用的配置项
    public: {}
  },
  modules: [
    '@unocss/nuxt',
    '@vant/nuxt',
    '@vueuse/nuxt'
  ],
  css: [
    '@unocss/reset/tailwind.css',
  ],
  postcss: {
    plugins: {
      autoprefixer: {
        remove: false
      },
      'postcss-100vh-fix': {},
      'postcss-pxtorem': {
        rootValue({ file }: any) {
          return file.indexOf('vant') !== -1 ? 37.5 : 100
        },
        propList: ['*'],
        exclude: /(node_module)/,
        selectorBlackList: ['html', '.rem-ignore']
      }  
    }
  },
  nitro: {
    devProxy: {
      '/api': {
        target: 'http://127.0.0.1:8907', // 这里是接口地址
        changeOrigin: true,
        // prependPath: true,
      },
    },
    routeRules: {
      '/api/**': {
        proxy: 'http://127.0.0.1:8907/**',
      },
    },
  },
  sourcemap: {
    server: true,
    client: false,
  }
})
