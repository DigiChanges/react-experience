import React  from "react";
import IconLockOpen from "../../../atoms/IconLockOpen";
import IconLockClosed from "../../../atoms/IconLockClosed";

const UserStateCell = (row: any): any => {

  return (
    <>
        {row.enable ?
            <div className="w-6 text-green-600 hover:text-green-800 mr-1">
              <IconLockOpen />
            </div>
              :
            <div className="w-6 text-red-500 mr-1 hover:text-red-800">
              <IconLockClosed />
            </div>
        }
    </>
  );
}

export default UserStateCell;

