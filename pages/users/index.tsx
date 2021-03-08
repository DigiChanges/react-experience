import React, {useEffect} from "react";
import {useRouter} from "next/router";

const UsersIndexPage = (): any =>
{
	const router = useRouter();

	useEffect(() =>
	{
			router.replace('/users/list')
	})

	return (
		<>
			<div>
				Redirecting...
			</div>
		</>
	);
};

export default UsersIndexPage;
