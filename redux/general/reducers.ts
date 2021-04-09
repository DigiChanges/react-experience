import {
	START_GENERAL_LOADING,
	STOP_GENERAL_LOADING,
	SHOW_GENERAL_NOTIFICATION,
	RESET_QUERY_PAGINATION, NEXT_QUERY_PAGINATION
} from './constants';
import {GeneralActions} from './actions';

const INIT_STATE = {
	isLoading: false,
	notification: null,
	nextQueryParamsPagination: "pagination[limit]=2&pagination[offset]=0",
}

type State = {
	isLoading: boolean,
	notification: any | null,
	nextQueryParamsPagination: string
}

const General = (state: State = INIT_STATE, action: GeneralActions) =>
{
	switch (action.type)
	{
		case START_GENERAL_LOADING:
			return {...state, notification: null, isLoading: true}

		case STOP_GENERAL_LOADING:
			return {...state, isLoading: false}

		case SHOW_GENERAL_NOTIFICATION:
			return {...state, isLoading: false, notification: {...action.payload}}

		case RESET_QUERY_PAGINATION:
			return {...state, nextQueryParamsPagination: INIT_STATE.nextQueryParamsPagination}

		case NEXT_QUERY_PAGINATION:
			return {...state, nextQueryParamsPagination: action.payload}

		default:
			return {...state}
	}
}

export default General
