export default defineNuxtPlugin(async (NuxtApp) => {
  // nuxtApp包含的属性可看文档 https://nuxt.com/docs/guide/going-further/internals

  return {
    // 提供一些全局的provider
    provide: {
      hello: (msg: string) => `Hello ${msg}!`,
    },
  }
})
