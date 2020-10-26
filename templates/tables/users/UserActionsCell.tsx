import React  from "react";
import Link from "next/link";
import IconEye from "../../../atoms/IconEye";
import IconPencilAlt from "../../../atoms/IconPencilAlt";
import IconCog from "../../../atoms/IconCog";
import IconTrash from "../../../atoms/IconTrash";

const UserActionsCell = (row) =>
{
  return (
    <>
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

      <Link href={`/users/delete/${row.id}`}>
        <a className="w-6 hover:text-gray-700 mr-1">
          <IconTrash />
        </a>
      </Link>
    </>
  );
}

export default UserActionsCell