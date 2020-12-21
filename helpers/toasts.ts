import { toast, Slide } from 'react-toastify'
import { ToastStyle } from '../assets/customStyles/ToastStyle'
import { notificationTypes } from '../entities/notification'

const tBody = (type:string) => ({
	position: toast.POSITION.TOP_RIGHT,
	transition: Slide,
	style: ToastStyle(type)
})

export const showToast = (type, msg) => {
	switch (type) {
		case notificationTypes.SUCCESS:
			return toast.success(msg, tBody(type))
		case notificationTypes.INFO:
			return toast.info(msg, tBody(type))
		case notificationTypes.WARNING:
			return toast.warning(msg, tBody(type))
		case notificationTypes.ERROR:
			return toast.error(msg, tBody(type))
		default:
			break;
	}
}