import { useRouter } from 'next/router'
import { removeSession } from '../../helpers/authSession'

const Logout = () => {
  
  const router = useRouter()

  removeSession()
  router.replace('/login')

  return (
    <div>Logging Out</div>
  )
}

export default Logout
