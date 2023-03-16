<script lang="ts" setup>
import { useLocalStorage } from '@vueuse/core'

const { router, query } = usePageRoute()
const { code } = query

/**
 * 跳转到授权页
 * @param callbackUrl 授权后回跳页
 */
function jump2Auth(callbackUrl: string) {
  
  useClientFetch('/api/wx/auth', {
    params: {
      redirect_url: callbackUrl,
    },
  }).then((authUrl: any) => {
    if (process.env.NODE_ENV === 'development') {
      window.location.href = callbackUrl + '?code=test'
    } else {
      window.location.href = authUrl
    }
  })
}

/**
 * 登录
 * @param code
 */
function login(code: string) {
  const loading = showLoadingToast({
    message: '登录中...',
    forbidClick: true,
    loadingType: 'spinner',
  })
  useClientFetch('/api/wx/auth', {
    method: 'POST',
    params: {
      code,
    },
  }).then((res) => {
    console.log(res)
    const store = useLocalStorage('land-page', '')
    const redirect = store.value || '/'
    router.replace(redirect)
  }).finally(()=>{
    loading.close()
  })
}

onMounted(() => {
  // 3.如果有code，则已经授权，调用登录接口
  if (code) {
    login(code as string)
  } else {
    // 1.记录上一个页面的地址, 方便授权后回来能跳回
    const { redirect } = query

    console.log(redirect)

    if (redirect) {
      useLocalStorage('land-page', redirect)
    }
    // 2.跳转授权
    const callbackUrl = window.location.origin + window.location.pathname
    jump2Auth(callbackUrl)
  }
})
</script>
