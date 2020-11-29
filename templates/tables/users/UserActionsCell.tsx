import {useState}  from "react";
import Link from "next/link";
import IconEye from "../../../atoms/IconEye";
import IconPencilAlt from "../../../atoms/IconPencilAlt";
import IconCog from "../../../atoms/IconCog";
import IconTrash from "../../../atoms/IconTrash";
import ConfirmDelete from "../../modal/ConfirmDeleteUser"

const UserActionsCell = (row: any): any =>
{
  const [boolean, setBoolean] = useState(false);
  const openModal = () => {
      return setBoolean(!boolean)
  }

  return (
    <>
      <ConfirmDelete open={boolean} info={row} close={openModal}/>
      <Link href={`/users/view/${row.id}`}>
        <a className="w-6 hover:text-gray-700 mr-1">
          <IconEye />
        </a>
      </Link>

      <Link href={`/users/changePassword/${row.id}`}>
        <a className="w-6 hover:text-gray-700 mr-1">
          <IconPencilAlt />
        </a>
      </Link>

      <Link href={`/users/update/${row.id}`}>
        <a className="w-6 hover:text-gray-700 mr-1">
          <IconCog />
        </a>
      </Link>
        <button className="w-6 hover:text-gray-700 mr-1 hover:cursor-pointer" onClick={openModal} type='button'>
          <IconTrash />
        </button>
    </>
  );
}

export default UserActionsCell