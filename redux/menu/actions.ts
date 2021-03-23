import { TOGGLE_SIDEBAR } from './constants'

export interface MenuActions {
  type: string,
}

export const setShowSidebar = (): MenuActions => ({
  type: TOGGLE_SIDEBAR,
})
