import {Fragment}  from "react";
import IconLockOpen from "../../../atoms/IconLockOpen";
import IconLockClosed from "../../../atoms/IconLockClosed";

const UserStateColumn = (row) => {

  return (
    <Fragment>
      {row.enable ? <IconLockOpen /> : <IconLockClosed />}
    </Fragment>
  );
}

export default UserStateColumn;

