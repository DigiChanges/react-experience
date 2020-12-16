import { 
  START_GENERAL_LOADING,
  STOP_GENERAL_LOADING,
  SHOW_GENERAL_MESSAGE,
  DISMISS_GENERAL_MESSAGE
} from './constants'

export const startGeneralLoading = () => ({ type: START_GENERAL_LOADING })
export const stopGeneralLoading = () => ({ type: STOP_GENERAL_LOADING })

export const showGeneralMessage = message => 
  ({ type: SHOW_GENERAL_MESSAGE, payload: message })

export const dismissGeneralMessage = () => ({ type: DISMISS_GENERAL_MESSAGE })