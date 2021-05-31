import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import UserList from "../../../templates/users/UserList";
import { getUsers, resetUsers } from "../../../redux/users/actions";
import { resetQueryPagination } from "../../../redux/general/actions";
import withAuth from "../../../providers/withAuth";
import { INIT_STATE } from '../../../redux/general/reducers';

const IndexPage = ({dispatch, Users, General, query}): any =>
{
  const [loadPage, setLoadPage] = useState(true)

  useEffect(() => {
    if(loadPage)
    {
      dispatch(getUsers(query, INIT_STATE.nextQueryParamsPagination));
      setLoadPage(false)
    }
    else
    {
    dispatch(getUsers(query, General.nextQueryParamsPagination));
    }

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

