import { START_PATHNAME } from './constants'

export interface PathActions {
  type: string,
  payload: string
}

export const setStartPathname = (pathname: string): PathActions => ({ 
  type: START_PATHNAME, 
  payload: pathname 
})
