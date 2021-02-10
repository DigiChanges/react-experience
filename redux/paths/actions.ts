import {START_PATHNAME, SET_CURRENT_PATHNAME} from './constants'

export interface PathActions
{
	type: string,
	payload: string
}

export const setStartPathname = (pathname: string): PathActions => ({
	type: START_PATHNAME,
	payload: pathname
})

export const setCurrentPathname = (pathname: string): PathActions => ({
	type: SET_CURRENT_PATHNAME,
	payload: pathname
})
