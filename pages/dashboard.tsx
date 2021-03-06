import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux'
import Content from '../templates/content';
import {setCurrentPathname} from '../redux/paths/actions'
import {useRouter} from 'next/router'

const IndexPage = (): any =>
{
	const dispatch = useDispatch();
	const router = useRouter()

	useEffect(() =>
	{
		const setCurrentPath = dispatch(setCurrentPathname(router.pathname))
		return () => {
			setCurrentPath
		}
	}, []);

	return (
		<>
			<Content/>
		</>);
};

export default IndexPage;
