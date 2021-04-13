import React, { useEffect } from "react";
import UserList from "../../../templates/users/UserList";
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, resetUsers } from "../../../redux/users/actions";
import { resetQueryPagination } from "../../../redux/general/actions";

const UsersListPage = ({ query }): any => {
  const dispatch = useDispatch();
  const { usersList } = useSelector(state => state.Users);
  const { nextQueryParamsPagination } = useSelector(state => state.General);

  useEffect(() => {
    dispatch(getUsers(query, nextQueryParamsPagination));

    return () => {
      dispatch(resetUsers());
      dispatch(resetQueryPagination());
    };
  }, [query]);

  const viewMore = (): void => {
    dispatch(getUsers(query, nextQueryParamsPagination));
  }

  return (
    <>
      <UserList viewMore={viewMore} usersList={usersList} query={query} />
    </>
  );
}

UsersListPage.getInitialProps = ({ query }) => ({ query })

export default UsersListPage;
