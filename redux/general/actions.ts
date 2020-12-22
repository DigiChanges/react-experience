import { 
  START_GENERAL_LOADING,
  STOP_GENERAL_LOADING,
  SHOW_GENERAL_NOTIFICATION
} from './constants'

export const startGeneralLoading = () => ({ type: START_GENERAL_LOADING })
export const stopGeneralLoading = () => ({ type: STOP_GENERAL_LOADING })

export const showGeneralNotification = notification => 
  ({ type: SHOW_GENERAL_NOTIFICATION, payload: notification })
  