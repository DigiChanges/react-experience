import axios from 'axios'
import { apiResult } from '../api/apiResult'
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
const HTTP_ERROR_STATUS = [400, 401, 403, 404, 412, 500, 501]

class HttpRequest
{
  static async request({
    url = '',
    method = 'POST',
    headers,
    path = '',
    body= {}
  }) {
    if (headers === null) throw new Error('Token Expired')
    const requestOptions: {[key: string]: any} = {
      method,
      url: `${url}${path}`,
      mode: 'cors',
      headers: Object.assign({}, headers)
    }
    if (typeof body === 'object' && Object.keys(body).length !== 0) {
      requestOptions.data = JSON.stringify(body)
    }

    try {
      const res = await axios(requestOptions)
      const { data } = res
      if (HTTP_SUCCESS_STATUS.includes(res.status)) {
        return apiResult( data.data )
      } else if (HTTP_ERROR_STATUS.includes(res.status)) {
        const error = data.message || 'Internal Server Error'
        throw new Error(error)
      } else {
        throw new Error('Network response was not ok')
      }
    } catch (e) {
      const { message } = e.response.data
      throw new Error(message)
    }
  }
}

export default HttpRequest;
