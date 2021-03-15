import React, {useState} from "react";
import Button from "../../atoms/Button";
import UsersTable from "../tables/users/UsersTable";
import ConfirmDeleteUser from "../modal/ConfirmDeleteUser";
import Link from "next/link";
import IconPlus from "../../atoms/Icons/Stroke/IconPlus";
import {Field, Formik, Form } from "formik";
import Label from "../../atoms/Label";
import SearchInput from "../../atoms/SearchInput";
import TitleWithButton from "../../molecules/TitleWithButton";
import {useRouter} from "next/router";

const UserList = () =>
{
	const router = useRouter();
	const [booleanConfirmDelete, setBooleanConfirmDelete] = useState(false);

	const openConfirmDelete = (): any =>
	{
		setBooleanConfirmDelete(!booleanConfirmDelete);
	};

	const actionCreateButton = () =>
	{
		return router.push("/users/create");
	}

	return (
		<div className="flex flex-col justify-between">
				<Formik initialValues={{
						search: "",
						filterBy: "",
						orderBy: "desc",
					}}
					onSubmit={async (values) => {
						// const { search, filterBy, orderBy } = values;

						console.log(values);

						// dispatch(
						//   createUser(
						//     search,
						//     filterBy,
						//     orderBy,
						//   )
						// );
					}}>
					<Form className="flex flex-col lg:flex-row justify-between w-full text-main-gray-300 cursor-pointer">
						<Field
							name="search"
							type="search"
							id="search"
							// className="w-full h-8 bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base  hover:border-grey px-2 py-2 rounded shadow"
							placeholder={"Search by... "}
							component={SearchInput}
						/>
						<Label
							htmlFor="roles"
							className="font-bold text-gray-400 block mb-2"
						>
							Search By
						</Label>
						<Button
							className="shadow-kx1 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg text-center"
							buttonType="submit"
							buttonClick="none"
						>
									Save
						</Button>
					</Form>
				</Formik>
				<TitleWithButton
					title="Users"
					labelButtonName="Create User"
					icon={IconPlus}
					buttonAction={actionCreateButton}
				/>
				<UsersTable/>
				{booleanConfirmDelete ? (
					<ConfirmDeleteUser close={openConfirmDelete}/>
				) : null}
			</div>
	);
};

export default UserList;
