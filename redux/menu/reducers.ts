import { TOGGLE_SIDEBAR } from './constants'
import { MenuActions } from './actions';

const INIT_STATE = {
  showSidebar: true,
}

type State = {
  showSidebar: boolean,
}

const Menu = (state: State = INIT_STATE, action: MenuActions) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { ...state, showSidebar: !state.showSidebar }

    default:
      return { ...state }
  }
}

export default Menu
