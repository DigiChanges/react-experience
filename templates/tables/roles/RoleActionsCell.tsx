import { Fragment, useState }  from "react";
import { useDispatch } from 'react-redux';
import Router from 'next/router';
import { selectedRole } from '../../../redux/roles/actions';
import IconEye from "../../../atoms/IconEye";
import IconPencilAlt from "../../../atoms/IconPencilAlt";
import IconTrash from "../../../atoms/IconTrash";
import ConfirmDelete from "../../modal/ConfirmDeleteUser"


const RoleActionsCell = (role: any): any => {

  const dispatch = useDispatch()

  const [boolean, setBoolean] = useState(false);
  const openModal = () => {
      return setBoolean(!boolean)
  }

  const navigateToPath = (path: string) => {
    dispatch( selectedRole(role.id) )
    Router.push( path )
  }

  const setSelectedRoleToRemove = () => {
    dispatch( selectedRole(role.id) )
    openModal()
  }

  return (
    <Fragment>
      <ConfirmDelete 
        open={boolean} 
        close={openModal}/>
      <button 
        className="w-6 hover:text-gray-700 mr-1 focus:outline-none" 
        onClick={ () => navigateToPath(`/roles/view/${role.id}`) }
        type='button'>
        <IconEye />
      </button>
      <button 
        className="w-6 hover:text-gray-700 mr-1 focus:outline-none" 
        onClick={ () => navigateToPath(`/roles/update/${role.id}`) }
        type='button'>
        <IconPencilAlt />
      </button>
      <button 
        className="w-6 hover:text-gray-700 mr-1 focus:outline-none" 
        onClick={ setSelectedRoleToRemove } 
        type='button'>
          <IconTrash />
      </button>
    </Fragment>
  );
}

export default RoleActionsCell
