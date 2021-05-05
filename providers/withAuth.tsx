import { getSession } from '../helpers/AuthSession';
import PrivateLayout from '../templates/layout/PrivateLayout';
import Login from '../templates/login';
import { setDataAfterReloading } from '../redux/auth/actions';

const withAuth = Component => {
  const Auth = (props) => {

        const session = getSession();

        if (!props.Auth.user && session.user)
		{
			props.dispatch(setDataAfterReloading(session.user))
		}

         // If user is not logged in, return login component
        if (!session.token) {
            return (
              <Login/>
            )
        }

    // If user is logged in, return original component
    return (
      <PrivateLayout>
        <Component {...props} />
      </PrivateLayout>
    );
  };

  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withAuth;