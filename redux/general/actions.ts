import {
	START_GENERAL_LOADING,
	STOP_GENERAL_LOADING,
	SHOW_GENERAL_NOTIFICATION,
	RESET_QUERY_PAGINATION,
	NEXT_QUERY_PAGINATION
} from './constants'
import _ from "lodash";
import {ReduxActions} from "../../interfaces/default";

export const startGeneralLoading = (): ReduxActions => ({
	type: START_GENERAL_LOADING,
	payload: null
})

export const stopGeneralLoading = () => ({
	type: STOP_GENERAL_LOADING,
	payload: null
})

export const showGeneralNotification = (notification: any) => ({
	type: SHOW_GENERAL_NOTIFICATION,
	payload: notification
})

export const resetQueryPagination = (): ReduxActions => ({
  type: RESET_QUERY_PAGINATION,
  payload: null
})

export const nextQueryPagination = (pagination: any): ReduxActions =>
{
	const uriParam = _.last(pagination.nextUrl.split("?"));

	return {
	  type: NEXT_QUERY_PAGINATION,
		payload: uriParam
	}
}
