import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCreate from "../../../templates/users/UserCreate";
import {getRoles} from "../../../redux/roles/actions";
import {getPermissions} from "../../../redux/auth/actions";
import {createUser} from "../../../redux/users/actions";
import moment from "moment";

const IndexPage: React.FC<any> = () =>
{
  const dispatch = useDispatch();
  const { permissionsList } = useSelector((store) => store.Auth);
  const { rolesList } = useSelector((store) => store.Roles);

  const createAction = (values: any) =>
	{
		const {
            firstName,
            lastName,
            email,
            birthday,
            documentType,
            documentNumber,
            gender,
            phone,
						country,
						address,
            password,
            passwordConfirmation,
            permissions,
            roles,
          } = values;

		dispatch(createUser(
			firstName,
			lastName,
			email,
			moment(birthday).format('dd/mm/y').toString(),
      documentType.label,
      documentNumber,
      gender,
      phone,
			country.label,
			address,
			password,
			passwordConfirmation,
			permissions.map((permission: any) => permission.label),
			roles.map((role) => role.value)
		));
	}

	useEffect(() => {
    dispatch(getRoles());
    dispatch(getPermissions());
  }, []);

  return <UserCreate permissionsList={permissionsList} rolesList={rolesList} createAction={createAction}/>;
};

export default IndexPage;
