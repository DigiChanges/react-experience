import { 
  START_GENERAL_LOADING,
  STOP_GENERAL_LOADING,
  SHOW_GENERAL_NOTIFICATION
} from './constants'

export interface GeneralActions {
  type: string
  payload: {} | null
}

export const startGeneralLoading = (): GeneralActions => ({ 
  type: START_GENERAL_LOADING,
  payload: null
})

export const stopGeneralLoading = () => ({ 
  type: STOP_GENERAL_LOADING,
  payload: null
})

export const showGeneralNotification = (notification: {}) => ({ 
  type: SHOW_GENERAL_NOTIFICATION, 
  payload: notification 
})
  