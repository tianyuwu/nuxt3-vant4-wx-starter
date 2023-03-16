import type { NitroFetchRequest, NitroFetchOptions } from 'nitropack'
import type { FetchResponse } from 'ofetch'
import type { UseFetchOptions } from 'nuxt/dist/app/composables/fetch'

function transFormResponse({ response }: any) {
  // 处理后端携带了错误码响应的数据
  if (response._data && response._data.code) return Promise.reject(response._data)

  // response._data = {
  //   ...response._data.data,
  // }
}

/**
 * 封装$fetch用于客户端请求
 * @param request
 * @param opts
 * @returns
 */
export function useClientFetch(
  request: NitroFetchRequest,
  opts?: NitroFetchOptions<any> & { hideErrorToast?: Boolean },
) {
  return new Promise((resolve, reject) => {
    $fetch<FetchResponse<any>>(request, {
      onResponse: transFormResponse,
      ...opts,
    })
      .then((data) => {
        resolve(data)
      })
      .catch((err) => {
        if (!opts?.hideErrorToast) {
          showToast(err.msg || '服务器错误，请稍后再试')
        }

        reject(err)
      })
  })
}

/**
 * 抽离useFetch的通用配置
 * @param request
 * @param opts
 * @returns
 */
export function useMyFetch(request: NitroFetchRequest, opts?: UseFetchOptions<any>) {
  return useFetch(request, {
    onResponse: transFormResponse,
    ...opts,
  })
}

useMyFetch.get = (request: NitroFetchRequest, opts?: UseFetchOptions<any>) => {
  return useMyFetch(request, {
    method: 'get',
    ...opts,
  })
}

useMyFetch.post = (request: NitroFetchRequest, opts?: UseFetchOptions<any>) => {
  return useMyFetch(request, {
    method: 'post',
    ...opts,
  })
}
