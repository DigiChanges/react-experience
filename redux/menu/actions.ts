import { TOGGLE_SIDEBAR } from './constants'
import {ReduxAction} from "../../interfaces/default";

export const setShowSidebar = (): ReduxAction => ({
  type: TOGGLE_SIDEBAR,
	payload: null
})
