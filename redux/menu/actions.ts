import { TOGGLE_SIDEBAR } from './constants'
import {ReduxActions} from "../../interfaces/default";

export const setShowSidebar = (): ReduxActions => ({
  type: TOGGLE_SIDEBAR,
	payload: null
})
