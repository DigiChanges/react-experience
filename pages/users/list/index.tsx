import React, { useEffect } from "react";
import UserList from "../../../templates/users/UserList";
import {useDispatch, useSelector} from 'react-redux';
import {getUsers} from "../../../redux/users/actions";

const UsersListPage = ({query}): any =>
{
	const dispatch = useDispatch()
	const {usersList, nextQueryParamsPagination} = useSelector(state => state.Users);

  useEffect(() => {
    dispatch(getUsers(query, nextQueryParamsPagination));
  }, [query]);

  return (
    <>
      <UserList usersList={usersList} query={query} />
    </>
  );
};

UsersListPage.getInitialProps = async ({query}) => {
	return {query};
}

export default UsersListPage;
