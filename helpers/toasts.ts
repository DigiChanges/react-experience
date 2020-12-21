import { toast, Slide } from 'react-toastify'
import { ToastStyle } from '../assets/customStyles/ToastStyle'
import { notificationTypes } from '../entities/notification'

const tBody = (type:string) => ({
	position: toast.POSITION.TOP_RIGHT,
	transition: Slide,
	style: ToastStyle(type)
})

const getToast = (type:string, msg:string) => ({
	[notificationTypes.SUCCESS]: toast.success(msg, tBody(type)),
	[notificationTypes.INFO]: toast.info(msg, tBody(type)),
	[notificationTypes.WARNING]: toast.warning(msg, tBody(type)),
	[notificationTypes.ERROR]: toast.error(msg, tBody(type))
})

export const showToast = (type: string, msg: string) => {
	return getToast(type, msg)[type]
}