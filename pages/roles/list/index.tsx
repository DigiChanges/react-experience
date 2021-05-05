import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getRoles, resetRoles } from "../../../redux/roles/actions";
import { resetQueryPagination } from "../../../redux/general/actions";
import RoleList from "../../../templates/roles/RoleList";

const RolesListPage = ({ query }): any => {
  const dispatch = useDispatch();
  const { rolesList } = useSelector((state : any) => state.Roles);
  const { nextQueryParamsPagination } = useSelector((state : any) => state.General);

  useEffect(() => {
		console.log('render', query)
    dispatch(getRoles(query, nextQueryParamsPagination));

    return () => {
      dispatch(resetRoles());
      dispatch(resetQueryPagination())
    };
  }, [query]);

  const viewMore = (): void => {
    dispatch(getRoles(query, nextQueryParamsPagination));
  }

  return (
    <>
			<div>RENDER</div>
      {/*<RoleList viewMore={viewMore} rolesList={rolesList} query={query} />*/}
    </>
  );
}

RolesListPage.getInitialProps = ({ query }) => ({ query })

export default RolesListPage;
