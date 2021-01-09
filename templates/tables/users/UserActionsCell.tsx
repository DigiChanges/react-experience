import { Fragment, useState }  from "react";
import { useDispatch } from 'react-redux';
import Router from 'next/router';
import Link from "next/link";
import { 
  selectedUser, 
  selectedUserToRemove, 
  selectedUserToUpdate 
} from '../../../redux/users/actions';
import IconEye from "../../../atoms/IconEye";
import IconPencilAlt from "../../../atoms/IconPencilAlt";
import IconCog from "../../../atoms/IconCog";
import IconTrash from "../../../atoms/IconTrash";
import ConfirmDelete from "../../modal/ConfirmDeleteUser"


const UserActionsCell = (user: any): any => {

  const dispatch = useDispatch()

  const [boolean, setBoolean] = useState(false);
  const openModal = () => {
      return setBoolean(!boolean)
  }

  const setSelectedUser = () => {
    dispatch( selectedUser(user.id) )
    //TODO REMOVE user.id from path
    Router.push(`/users/view/${user.id}`)
  }

  const setSelectedUserToRemove = () => {
    dispatch( selectedUserToRemove(user.id) )
    openModal()
  }

  const setSelectedUserToUpdate = () => {
    dispatch( selectedUserToUpdate(user.id) )
    //TODO REMOVE user.id from path
    Router.push(`/users/update/${user.id}`)
  }

  return (
    <Fragment>
      <ConfirmDelete 
        open={boolean} 
        close={openModal}/>
      <button 
        className="w-6 hover:text-gray-700 mr-1 focus:outline-none" 
        onClick={ setSelectedUser }
        type='button'>
        <IconEye />
      </button>
      <Link href={`/users/changePassword/${user.id}`}>
        <a className="w-6 hover:text-gray-700 mr-1">
          <IconPencilAlt />
        </a>
      </Link>

      <button 
        className="w-6 hover:text-gray-700 mr-1 focus:outline-none" 
        onClick={ setSelectedUserToUpdate }
        type='button'>
        <IconCog />
      </button>

      <button 
        className="w-6 hover:text-gray-700 mr-1 focus:outline-none" 
        onClick={ setSelectedUserToRemove } 
        type='button'>
          <IconTrash />
      </button>
    </Fragment>
  );
}

export default UserActionsCell