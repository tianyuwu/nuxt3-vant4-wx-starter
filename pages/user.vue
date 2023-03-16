<script setup lang="ts">
const { router } = usePageRoute()

definePageMeta({
  requiresAuth: true,
})

function logout() {
  const authInfo = useCookie('Authorization')
  authInfo.value = ''
  router.push('/')
}
</script>

<template>
  <div>我的，需要登录后访问</div>
  <div class="flex justify-around">
    <van-button type="primary" @click="logout()">退出账号</van-button>
    <van-button  @click="$router.push('/')">返回首页</van-button>
  </div> 
</template>

<style></style>
