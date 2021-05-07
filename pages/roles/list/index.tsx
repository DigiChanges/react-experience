import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { getRoles, resetRoles } from "../../../redux/roles/actions";
import { resetQueryPagination } from "../../../redux/general/actions";
import RoleList from "../../../templates/roles/RoleList";
import withAuth from '../../../providers/withAuth';

const IndexPage = ({dispatch, Roles, General, query}): any =>
{
  useEffect(() => {
    dispatch(getRoles(query, General.nextQueryParamsPagination));

    return () => {
      dispatch(resetRoles());
      dispatch(resetQueryPagination())
    };
  }, [query]);

  const viewMore = (): void => {
    dispatch(getRoles(query, General.nextQueryParamsPagination));
  }

  return (
    <>
      <RoleList viewMore={viewMore} rolesList={Roles.rolesList} query={query} />
    </>
  );
}

IndexPage.getInitialProps = ({dispatch, Roles, General, query}) => ({dispatch, Roles, General, query});

export default connect((state) => state)(withAuth(IndexPage));
