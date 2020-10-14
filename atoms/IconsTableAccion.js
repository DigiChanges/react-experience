import {Fragment}  from "react";
import IconTrash from "./IconTrash";
import IconPencilAlt from "./IconPencilAlt";
import IconCog from "./IconCog";
import IconEye from "./IconEye";

const IconsTableAction = ({userId, openChangePass, openConfirmDelete}) => {
    console.log('row', userId)
    return (
        <Fragment>
            <IconEye />
            <IconPencilAlt userId={userId}/>
            <IconCog />
            <IconTrash open={openConfirmDelete} />
        </Fragment>
    );
};

export default IconsTableAction;
