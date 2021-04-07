import React, { useEffect } from "react";
import UserList from "../../../templates/users/UserList";
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import * as queryString from "querystring";
import { getUsers } from "../../../redux/users/actions";

const UsersListPage = ({ query }): any => {
  // console.log('UsersListPage', query)

  const dispatch = useDispatch()
  const { usersList, nextQueryParamsPagination } = useSelector(state => state.Users);
  // const router = useRouter();

  useEffect(() => {
    // const _query = query ? queryString.stringify(query) : null;
    dispatch(getUsers(query, nextQueryParamsPagination));
  }, [query]);

  return (
    <>
      <UserList usersList={usersList} query={query} />
    </>
  );
};

UsersListPage.getInitialProps = async ({ query }) => {
  console.log('query', query);

  return { query };
}

export default UsersListPage;
