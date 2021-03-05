import axios from 'axios'
import {apiResult} from '../api/apiResult'
import {getCookies, getNowTimestamp, getSession} from "./authSession";
import {config} from "../api/config";
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
		body = {}
	})
	{
		if (headers === null)
		{
			throw new Error('Token Expired')
		}
		const requestOptions: { [key: string]: any } = {
			method,
			url: `${url}${path}`,
			mode: 'cors',
			headers: Object.assign({}, headers)
		}
		if (typeof body === 'object' && Object.keys(body).length !== 0)
		{
			requestOptions.data = JSON.stringify(body)
		}

		try
		{
			const { minutesDifferenceToken, expires } = getSession();

			if (minutesDifferenceToken)
			{
				const now = getNowTimestamp();
				const totalPercentage = -(((+minutesDifferenceToken * 20) / 100) - +minutesDifferenceToken)
				const newExpires = expires - (totalPercentage*60);
				const isValid = newExpires < now;

				if (isValid)
				{
					const pathKeepAlive = config.apiGateway.routes.auth.keepAlive;
					const url = `${config.apiGateway.server.protocol}:${config.apiGateway.server.hostname}:${config.apiGateway.server.port}`;

					const options: { [key: string]: any } = {
						url: `${url}/${pathKeepAlive}`,
						method: "POST",
						mode: requestOptions.mode,
						headers: requestOptions.headers
					};

					console.log(options);
					const res1 = await axios(options);
					console.log('res1');
					console.log(res1);
				}
			}

			const res = await axios(requestOptions);
			const {data} = res
			if (HTTP_SUCCESS_STATUS.includes(res.status))
			{
				return apiResult(data.data)
			}
			else if (HTTP_ERROR_STATUS.includes(res.status))
			{
				const error = data.message || 'Internal Server Error'
				throw new Error(error)
			}
			else
			{
				throw new Error('Network response was not ok')
			}
		} catch (e)
		{
			console.log(e);
			const {message} = e.response.data
			throw new Error(message)
		}
	}
}

export default HttpRequest;
