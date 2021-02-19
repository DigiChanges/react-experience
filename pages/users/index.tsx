import React, {useState} from "react";
import UsersTable from "../../templates/tables/users/UsersTable";
import ConfirmDeleteUser from "../../templates/modal/ConfirmDeleteUser";
import IconPlus from "../../atoms/Icons/IconPlus";
import Link from "next/link";

const UsersPage = (): any =>
{

	const [booleanConfirmDelete, setBooleanConfirmDelete] = useState(false);

	const openConfirmDelete = (): any =>
	{
		setBooleanConfirmDelete(!booleanConfirmDelete);
	};

	return (
		<>
			<div className="container mx-auto w-full h-full md:h-screen flex flex-col justify-between">
				<UsersTable/>
				{booleanConfirmDelete ? (
					<ConfirmDeleteUser close={openConfirmDelete}/>
				) : null}
				<div className="flex justify-end items-end pr-8 mb-8">
					<Link href="/users/create">
						<button
							className="p-0 w-16 h-16 bg-red-600 rounded-full hover:bg-red-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
							<IconPlus/>
						</button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default UsersPage;
