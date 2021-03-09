import React, {useState} from "react";
import RolesTable from "../../../templates/tables/roles/RolesTable";
import ConfirmDeleteRole from "../../../templates/modal/ConfirmDeleteRole";
import IconPlus from "../../../atoms/Icons/Stroke/IconPlus";
import Link from "next/link";

const RolesPage = (): any =>
{
	const [booleanConfirmDelete, setBooleanConfirmDelete] = useState(false);

	const openConfirmDelete = (): any =>
	{
		setBooleanConfirmDelete(!booleanConfirmDelete);
	};

	return (
		<>
			<div className="container mx-auto w-auto h-auto md:w-full md:h-screen flex flex-col justify-between">
				<RolesTable/>
				{booleanConfirmDelete ? (
					<ConfirmDeleteRole close={openConfirmDelete}/>
				) : null}
				<div className="flex justify-center items-center md:justify-end md:items-end pr-8 mb-8"> {/* TODO: REMOVE THIS BUTTON*/}
					<Link href={"/roles/create"}>
						<button
							className="p-0 w-12 h-12 bg-red-600 rounded-full hover:bg-red-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
								<IconPlus/>
						</button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default RolesPage;