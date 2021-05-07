import {showGeneralNotification} from "./actions";
import {notification, notificationTypes} from "../../entities";

export const showSuccessNotification = (msg: string) =>
  showGeneralNotification(notification(notificationTypes.SUCCESS, msg));

export const showErrorNotification = (msg: string) =>
  showGeneralNotification(notification(notificationTypes.ERROR, msg));
