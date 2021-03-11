import React, {useState} from "react";
import UsersTable from "../../../templates/tables/users/UsersTable";
import ConfirmDeleteUser from "../../../templates/modal/ConfirmDeleteUser";
import IconPlus from "../../../atoms/Icons/Stroke/IconPlus";
import Link from "next/link";
import SearchInput from "../../../atoms/SearchInput";
import Label from "../../../atoms/Label";
import Select from "../../../atoms/Select";
import {Field, Form, Formik } from "formik";
import Button from "../../../atoms/Button";

const UsersListPage = (): any =>
{
	const [booleanConfirmDelete, setBooleanConfirmDelete] = useState(false);

	const openConfirmDelete = (): any =>
	{
		setBooleanConfirmDelete(!booleanConfirmDelete);
	};

	return (
		<>
			<div className="flex flex-col justify-between">
				{/*<div className="flex flex-row justify-between w-full text-main-gray-300 cursor-pointer"> /!* We need to refactor on molecule *!/*/}
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
				{/*</div>*/}
				<UsersTable/>
				{booleanConfirmDelete ? (
					<ConfirmDeleteUser close={openConfirmDelete}/>
				) : null}
				<div className="flex justify-end items-end pr-8 mb-8"> {/* TODO: REMOVE THIS BUTTON*/}
					<Link href={"/users/create"}>
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

export default UsersListPage;
