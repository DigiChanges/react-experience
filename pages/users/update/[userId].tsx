import React, {useEffect}  from "react";
import UserUpdate from "../../../templates/users/UserUpdate";
import { useDispatch, useSelector } from 'react-redux'
import { unselectedUser } from '../../../redux/users/actions';
import { getRoles } from '../../../redux/roles/actions';
const IndexPage = (): any =>
{
    
  const dispatch = useDispatch()
  const { userSelected } = useSelector( state => state.Users );
  const { rolesList } = useSelector( state => state.Roles );
  const { permissions } = useSelector( store => store.Auth );

  useEffect(() => {
    //unmount component
    return () => {
      dispatch( unselectedUser() );
      dispatch( getRoles() );   
    }
  }, [])
    return (
        <UserUpdate userSelected={userSelected} rolesList={rolesList} permissions={permissions} />
    )
};

export default IndexPage;
