/** 
 * 路由相关功能逻辑
 */
export default function() {
  const router = useRouter()
  const { currentRoute } = router
  const { query, params } = unref(currentRoute)

  return {
    router,
    query,
    params
  }
}