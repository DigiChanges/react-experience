import React, { useEffect } from "react";
import { connect } from 'react-redux';
import UserList from "../../../templates/users/UserList";
import { getUsers, resetUsers } from "../../../redux/users/actions";
import { resetQueryPagination } from "../../../redux/general/actions";
import withAuth from "../../../providers/withAuth";

const IndexPage = ({dispatch, Users, General, query}): any =>
{
  useEffect(() => {
    dispatch(getUsers(query, General.nextQueryParamsPagination));

    return () => {
      dispatch(resetUsers());
      dispatch(resetQueryPagination());
    };
  }, [query]);

  const viewMore = (): void => {
    dispatch(getUsers(query, General.nextQueryParamsPagination));
  }

  return (
    <>
      <UserList viewMore={viewMore} usersList={Users.usersList} query={query} />
    </>
  );
}

IndexPage.getInitialProps = ({dispatch, Users, General, query}) => ({dispatch, Users, General, query});

export default connect((state) => state)(withAuth(IndexPage));

