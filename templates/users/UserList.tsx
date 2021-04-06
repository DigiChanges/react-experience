import React, {useState} from "react";
import {useRouter} from "next/router";
import UsersTable from "../tables/users/UsersTable";
import ConfirmDeleteUser from "../modal/ConfirmDeleteUser";
import IconPlus from "../../atoms/Icons/Stroke/IconPlus";
import TitleWithButton from "../../molecules/TitleWithButton";
import FilterSort from "../../organisms/FilterSort";
import FilterFactory from "../../helpers/FilterFactory";

const UserList = ({usersList, query}) =>
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

	const onClickFilter = (search: string, filterBy: string, orderBy: string, sort: 'asc' | 'desc') =>
	{
		const uriParam = FilterFactory.getUriParam({search, filterBy, orderBy, sort});

		router.push(`/users/list?${uriParam}`, undefined, {shallow: false});
	}

	return (
		<div className="flex flex-col justify-between">
			<FilterSort actionFilter={onClickFilter}/>
			<TitleWithButton
				title="Users"
				labelButtonName="Create User"
				icon={IconPlus}
				buttonAction={actionCreateButton}
			/>
			<UsersTable usersList={usersList} query={query}/>
			{booleanConfirmDelete ? (
				<ConfirmDeleteUser close={openConfirmDelete}/>
			) : null}
		</div>
	);
};

export default UserList;
