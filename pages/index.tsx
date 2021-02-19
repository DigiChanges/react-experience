import {useEffect} from 'react';
import {useRouter} from "next/router";
import {useSelector} from 'react-redux'

const HomePage = (): any =>
{

	const router = useRouter()
	const {startPathname} = useSelector(state => state.Paths)

	useEffect(() =>
	{
		if (startPathname &&
			startPathname !== '/' &&
			startPathname !== '/login')
		{
			router.replace(startPathname)
		}
		else
		{
			router.replace('/dashboard')
		}
	})

	return (
		'Redirecting...'
	)
}

export default HomePage
