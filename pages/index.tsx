import { useEffect }  from 'react';
import { useSelector } from  'react-redux'
import { useRouter } from "next/router";

const HomePage = (): any => {

  const router = useRouter()
  const { startPathname } = useSelector(state => state.Paths)

  useEffect(() => {
    if (startPathname && 
        startPathname !== '/' &&
        startPathname !== '/login') {
      router.replace( startPathname )
    } else {
      router.replace('/users')
    }
  })

  return (
    'Redirecting...'
  )
}

export default HomePage
