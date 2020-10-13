import {Fragment}  from "react";
import IconTrash from "./IconTrash";
import IconPencilAlt from "./IconPencilAlt";
import IconCog from "./IconCog";
import IconEye from "./IconEye";

const IconsTableAction = ({openUpdate, openChangePass, openConfirmDelete}) => {
  return (
    <Fragment>
      <IconEye />
      <IconPencilAlt open={openChangePass} />
      <IconCog open={openUpdate} />
      <IconTrash open={openConfirmDelete} />
    </Fragment>
  );
};

export default IconsTableAction;
