import { START_GENERAL_LOADING, STOP_GENERAL_LOADING, SHOW_GENERAL_NOTIFICATION } from './constants';
import { GeneralActions } from './actions';

const INIT_STATE = {
  isLoading: false,
  notification: null
}

type State = { isLoading: boolean, notification: any | null }

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

    default: return { ...state }
  }
}

export default General
