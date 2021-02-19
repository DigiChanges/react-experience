import {Fragment, useState} from "react";
import {useDispatch} from 'react-redux';
import Router from 'next/router';
import {selectedUser} from '../../../redux/users/actions';
import IconEye from "../../../atoms/Icons/IconEye";
import IconPencilAlt from "../../../atoms/Icons/IconPencilAlt";
import IconCog from "../../../atoms/Icons/IconCog";
import IconTrash from "../../../atoms/Icons/IconTrash";
import ConfirmDelete from "../../modal/ConfirmDeleteUser"


const UserActionsCell = (user: any): any =>
{

	const dispatch = useDispatch()

	const [boolean, setBoolean] = useState(false);
	const openModal = () =>
	{
		return setBoolean(!boolean)
	}

	const navigateToPath = (path: string) =>
	{
		dispatch(selectedUser(user.id))
		Router.push(path)
	}

	const setSelectedUserToRemove = () =>
	{
		dispatch(selectedUser(user.id))
		openModal()
	}

	return (
		<Fragment>
			<ConfirmDelete
				open={boolean}
				close={openModal}/>
			<button
				className="w-6 hover:text-gray-700 mr-1 focus:outline-none"
				onClick={() => navigateToPath(`/users/view/${user.id}`)}
				type='button'>
				<IconEye/>
			</button>
			<button
				className="w-6 hover:text-gray-700 mr-1 focus:outline-none"
				onClick={() => navigateToPath(`/users/changePassword/${user.id}`)}
				type='button'>
				<IconPencilAlt/>
			</button>
			<button
				className="w-6 hover:text-gray-700 mr-1 focus:outline-none"
				onClick={() => navigateToPath(`/users/update/${user.id}`)}
				type='button'>
				<IconCog/>
			</button>
			<button
				className="w-6 hover:text-gray-700 mr-1 focus:outline-none"
				onClick={setSelectedUserToRemove}
				type='button'>
				<IconTrash/>
			</button>
		</Fragment>
	);
}

export default UserActionsCell
