import { Fragment, useState }  from "react";
import { useDispatch } from 'react-redux';
import Router from 'next/router';
import Link from "next/link";
import { selectedUser } from '../../../redux/users/actions';
import IconEye from "../../../atoms/IconEye";
import IconPencilAlt from "../../../atoms/IconPencilAlt";
import IconCog from "../../../atoms/IconCog";
import IconTrash from "../../../atoms/IconTrash";
import ConfirmDelete from "../../modal/ConfirmDeleteUser"


const UserActionsCell = (user: any): any => {

  console.log('lala', user)





  const dispatch = useDispatch()

  const [boolean, setBoolean] = useState(false);
  const openModal = () => {
      return setBoolean(!boolean)
  }

  const setSelectedUser = () => {
    dispatch( selectedUser(user.id) )
    Router.push(`/users/view/${user.id}`)
  }

  return (
    <Fragment>
      <ConfirmDelete open={boolean} info={ user } close={openModal}/>
      {/* <Link href={`/users/view/${user.id}`}>
        <a className="w-6 hover:text-gray-700 mr-1" onClick={ () => console.log('asdf') }>
          <IconEye />
        </a>
      </Link> */}
      <button 
        className="w-6 hover:text-gray-700 mr-1 focus:outline-none" 
        onClick={ setSelectedUser }>
        <IconEye />
      </button>

      <Link href={`/users/changePassword/${user.id}`}>
        <a className="w-6 hover:text-gray-700 mr-1">
          <IconPencilAlt />
        </a>
      </Link>

      <Link href={`/users/update/${user.id}`}>
        <a className="w-6 hover:text-gray-700 mr-1">
          <IconCog />
        </a>
      </Link>
        <button className="w-6 hover:text-gray-700 mr-1 hover:cursor-pointer" onClick={openModal} type='button'>
          <IconTrash />
        </button>
    </Fragment>
  );
}

export default UserActionsCell