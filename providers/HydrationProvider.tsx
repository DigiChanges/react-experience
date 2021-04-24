import React, {PropsWithChildren, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {setDataAfterReloading} from "../redux/auth/actions";
import {getSession} from "../helpers/AuthSession";

const HydrationProvider: React.FC<PropsWithChildren<any>> = ({children}) =>
{
	const dispatch = useDispatch();
	const auth  = useSelector((store : any) => store.Auth);

	useEffect(() =>
	{
		const cookies = getSession();

		if (!auth.user && cookies?.user)
		{
			dispatch(setDataAfterReloading(cookies.user))
		}
	}, []);

	return <>
		{children}
	</>
}

export default HydrationProvider;