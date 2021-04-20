import {START_PATHNAME, SET_CURRENT_PATHNAME} from './constants'
import {ReduxActions} from "../../interfaces/default";

export const setStartPathname = (pathname: string): ReduxActions => ({
	type: START_PATHNAME,
	payload: pathname
})

export const setCurrentPathname = (pathname: string): ReduxActions => ({
	type: SET_CURRENT_PATHNAME,
	payload: pathname
})
