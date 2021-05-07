import React, {useEffect} from "react";
import {useRouter} from "next/router";

const RolesIndexPage = (): any =>
{
	const router = useRouter();

	useEffect(() =>
	{
        router.replace('/roles/list')
	})

	return (
		<>
			<div>
				Redirecting...
			</div>
		</>
	);
};

export default RolesIndexPage;
