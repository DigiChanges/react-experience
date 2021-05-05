import React, { useEffect } from "react";
import { connect } from 'react-redux';
import UserList from "../../../templates/users/UserList";
import { getUsers, resetUsers } from "../../../redux/users/actions";
import { resetQueryPagination } from "../../../redux/general/actions";
import withAuth from "../../../providers/withAuth";
// import wrapper from '../../../redux/store';
// import { END } from 'redux-saga';

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

// IndexPage.getStaticProps = wrapper.getStaticProps(
//   async (props: any) => {
//     // regular stuff
//     console.log('GET STATIC')
//     props.store.dispatch(getUsers(props.query, props.store.General?.nextQueryParamsPagination));
//     // end the saga
//     props.store.dispatch(END);
//     await props.store.sagaTask.toPromise();
//   }
// );

IndexPage.getInitialProps = ({store, dispatch, Users, General, query}) =>
{
  // store.dispatch(getUsers(query, General?.nextQueryParamsPagination));

  return {dispatch, Users, General, query};
} // ({dispatch, Users, General, query});

export default connect((state) => state)(withAuth(IndexPage));

