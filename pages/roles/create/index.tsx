import { useEffect } from 'react';
import { connect } from 'react-redux';
import { IRolePayload } from '../../../interfaces/role';
import { createRole } from '../../../redux/roles/actions';
import RoleCreate from '../../../templates/roles/RoleCreate';
import withAuth from '../../../providers/withAuth';
import { getPermissions } from '../../../redux/auth/actions';

const IndexPage = ({dispatch, Auth}) =>
{
  const createAction = (payload: IRolePayload) =>
	{
		dispatch(createRole(payload));
	}

  useEffect(() => {
    dispatch(getPermissions());
  }, []);

  return <RoleCreate permissionsList={Auth.permissionsList} createAction={createAction}/>;
};

IndexPage.getInitialProps = ({dispatch, Auth}) => ({dispatch, Auth});

export default connect((state) => state)(withAuth(IndexPage));