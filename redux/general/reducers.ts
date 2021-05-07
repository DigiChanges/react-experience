import {
	START_GENERAL_LOADING,
	STOP_GENERAL_LOADING,
	SHOW_GENERAL_NOTIFICATION,
	RESET_QUERY_PAGINATION,
	NEXT_QUERY_PAGINATION,
	OPEN_MODAL_DATA, CLOSE_MODAL_DATA
} from './constants';
import {ReduxAction} from "../../interfaces/default";

const INIT_STATE = {
	isLoading: false,
	notification: null,
	nextQueryParamsPagination: "pagination[limit]=3&pagination[offset]=0",
	modalData: null,
}

export interface IModalData
{
	open: boolean;
	idSelected: string;
	text: JSX.Element;
	action: any;
}

export interface State
{
	isLoading: boolean,
	notification: any | null,
	nextQueryParamsPagination: string,
	modalData: IModalData | null
}

const General = (state: State = INIT_STATE, action: ReduxAction) =>
{
	switch (action.type)
	{
		case START_GENERAL_LOADING:
			return { ...state, notification: null, isLoading: true }

		case STOP_GENERAL_LOADING:
			return { ...state, isLoading: false }

		case SHOW_GENERAL_NOTIFICATION:
			return { ...state, isLoading: false, notification: {...action.payload} }

		case RESET_QUERY_PAGINATION:
			return { ...state, nextQueryParamsPagination: INIT_STATE.nextQueryParamsPagination }

		case NEXT_QUERY_PAGINATION:
			return { ...state, nextQueryParamsPagination: action.payload }

		case OPEN_MODAL_DATA:
			return { ...state, modalData: action.payload.modalData }

		case CLOSE_MODAL_DATA:
			return { ...state, modalData: action.payload }

		default:
			return { ...state }
	}
}

export default General;
