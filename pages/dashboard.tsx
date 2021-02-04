import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux'
import Content from '../templates/content';
import {getPermissions} from "../redux/auth/actions";

const IndexPage = (): any =>
{
	const dispatch = useDispatch();

	useEffect(() =>
	{
		dispatch(getPermissions());
	}, []);

	return (
		<>
			<Content/>
		</>);
};

export default IndexPage;
