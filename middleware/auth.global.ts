export default defineNuxtRouteMiddleware(async (to, from) => {
  if (to.meta.requiresAuth) {
    const token = useCookie('Authorization')
    if(!token.value) {
      return navigateTo({
        path: '/login',
        query: { redirect: to.fullPath, ...to.query },
      })
    }
  }
})
