import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCreate from "../../../templates/users/UserCreate";
import {getRoles} from "../../../redux/roles/actions";
import {getPermissions} from "../../../redux/auth/actions";
import {createUser} from "../../../redux/users/actions";
import {IUserPayload} from "../../../interfaces/user";

const IndexPage: React.FC<void> = () =>
{
  const dispatch = useDispatch();
  const { permissionsList } = useSelector((store : any) => store.Auth);
  const { rolesList } = useSelector((store : any) => store.Roles);

  const createAction = (payload: IUserPayload) =>
	{
		dispatch(createUser(payload));
	}

	useEffect(() => {
    dispatch(getRoles());
    dispatch(getPermissions());
  }, []);

  return <UserCreate permissionsList={permissionsList} rolesList={rolesList} createAction={createAction}/>;
};

export default IndexPage;
