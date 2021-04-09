import {
	START_GENERAL_LOADING,
	STOP_GENERAL_LOADING,
	SHOW_GENERAL_NOTIFICATION,
	RESET_QUERY_PAGINATION,
	NEXT_QUERY_PAGINATION
} from './constants'
import _ from "lodash";

export interface GeneralActions
{
	type: string
	payload: any | null
}

export const startGeneralLoading = (): GeneralActions => ({
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

export const resetQueryPagination = (): GeneralActions => ({
  type: RESET_QUERY_PAGINATION,
  payload: null
})

export const nextQueryPagination = (pagination: any): GeneralActions =>
{
	const uriParam = _.last(pagination.nextUrl.split("?"));

	return {
	  type: NEXT_QUERY_PAGINATION,
		payload: uriParam
	}
}
