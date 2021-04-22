import {
	START_GENERAL_LOADING,
	STOP_GENERAL_LOADING,
	SHOW_GENERAL_NOTIFICATION,
	RESET_QUERY_PAGINATION,
	NEXT_QUERY_PAGINATION, OPEN_MODAL_DATA, CLOSE_MODAL_DATA
} from './constants'
import _ from "lodash";
import {ReduxActions} from "../../interfaces/default";
import {IModalData} from "./reducers";

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

export const openModal = (modalData: IModalData): ReduxActions => ({
  type: OPEN_MODAL_DATA,
  payload: {modalData}
})

export const closeModal = (): ReduxActions => ({
  type: CLOSE_MODAL_DATA,
  payload: null
})
