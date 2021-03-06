import { TOGGLE_SIDEBAR } from './constants'
import {ReduxAction} from "../../interfaces/default";

const INIT_STATE = {
  showSidebar: true,
}

export type State = {
  showSidebar: boolean,
}

const Menu = (state: State = INIT_STATE, action: ReduxAction) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { ...state, showSidebar: !state.showSidebar }

    default:
      return { ...state }
  }
}

export default Menu
