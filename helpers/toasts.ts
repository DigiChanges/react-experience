import {toast, Slide} from 'react-toastify'
import {ToastStyle} from '../assets/customStyles/ToastStyle'
import {notificationTypes} from '../entities/notification'

const tBody = (type: string) => ({
	position: toast.POSITION.TOP_RIGHT,
	transition: Slide,
	style: ToastStyle(type)
});

const getToast = {
	[notificationTypes.SUCCESS]: toast.success,
	[notificationTypes.INFO]: toast.info,
	[notificationTypes.WARNING]: toast.warning,
	[notificationTypes.ERROR]: toast.error
}

export const showToast = (type: string, msg: string) => (getToast[type](msg, tBody(type)))
