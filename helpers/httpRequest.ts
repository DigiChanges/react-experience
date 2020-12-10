/*
2xx Success
200 OK
201 Created
204 No Content
4xx Client errors
401 Unauthorized
403 Forbidden
404 Not Found
412 Precondition Failed
5xx Server errors
500 Internal Server Error
501 Not Implemented
*/
const HTTP_SUCCESS_STATUS = [200, 201, 204]
const HTTP_ERROR_STATUS = [401, 403, 404, 412, 500, 501]
const DEFAULT_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
}
class HttpRequest {

  static async request({
    url = null,
    method = 'POST',
    headers = {},
    path = '',
    body = {}
  }) {
    const requestOptions: {[key: string]: any} = {
      method: method,
      mode: 'cors',
      headers: Object.assign({}, headers)
    }
    if (typeof body === 'object' && Object.keys(body).length !== 0) {
      requestOptions.body = JSON.stringify(body)
    }
    const URL = `${url}${path}`
    const res = await fetch(URL, requestOptions)
    let data
    try {
      data = await res.json()
    } catch (err) {
      data = []
    }
    if (HTTP_SUCCESS_STATUS.includes(res.status)) {
      return Promise.resolve({ status: res.status, data })
    } else if (HTTP_ERROR_STATUS.includes(res.status)) {
      const error: {[key: string]: any} = new Error(data.message || 'Internal Server Error')
      error.status = res.status
      return Promise.reject(error)
    } else {
      throw new Error('Network response was not ok')
    }
  }
}
export { HttpRequest }