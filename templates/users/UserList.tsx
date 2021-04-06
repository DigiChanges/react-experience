import React, { useEffect } from "react";
import Button from "../../atoms/Button";
// import UsersTable from "../tables/users/UsersTable";
// import Link from "next/link";
import IconPlus from "../../atoms/Icons/Stroke/IconPlus";
import { Field, Formik, Form } from "formik";
import Label from "../../atoms/Label";
import SearchInput from "../../atoms/SearchInput";
import TitleWithButton from "../../molecules/TitleWithButton";
import { getUsers } from "../../redux/users/actions";
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from "next/router";
import MediaObject from "../../molecules/MediaObject";

//copypaste rancio 💀
// const asyncFn = ({ pageSize, offset }: any): Promise<Result> =>
// new Promise((resolve) => {
//   setTimeout(() => {
//     resolve({
//       total: dataSource.length,
//       list: dataSource.slice(offset, offset + pageSize),
//     });
//   }, 1000);
//   });

const UserList = () => {

  const dispatch = useDispatch();
  const { usersList } = useSelector((state) => state.Users)

  useEffect(() => {
    dispatch(getUsers())
  }, []);

  //another rancid code fragment
  // const containerRef = useRef<HTMLDivElement>(null);
  // const { data, loading, loadingMore, reload, loadMore, noMore } = useRequest(
  //   (d: Result | undefined) =>
  //     asyncFn({
  //       offset: d?.list?.length || 0,
  //       pageSize: 6,
  //     }),
  //   {
  //     loadMore: true,
  //     ref: containerRef,
  //     isNoMore: (d) => (d ? d.list.length >= d.total : false),
  //   },
  // );

  // const { list = [] } = data || {};
  //end rancid code


  const router = useRouter();

  const actionCreateButton = () => {
    return router.push("/users/create");
  }

  return (
    <div className="container">
      <Formik initialValues={{
        search: "",
        filterBy: "",
        orderBy: "desc",
      }}
        onSubmit={async (values) => {
          // const { search, filterBy, orderBy } = values;

          console.log(values);

          // dispatch(
          //   createUser(
          //     search,
          //     filterBy,
          //     orderBy,
          //   )
          // );
        }}>
        <Form className="flex flex-col lg:flex-row justify-between w-full text-main-gray-300 cursor-pointer">
          <Field
            name="search"
            type="search"
            id="search"
            // className="w-full h-8 bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base  hover:border-grey px-2 py-2 rounded shadow"
            placeholder={"Search by... "}
            component={SearchInput}
          />
          <Label
            htmlFor="roles"
            className="font-bold text-gray-400 block mb-2"
          >
            Search By
						</Label>
          <Button
            className="shadow-kx1 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg text-center"
            buttonType="submit"
            buttonClick="none"
          >
            Save
						</Button>
        </Form>
      </Formik>
      <TitleWithButton
        title="Users"
        labelButtonName="Create User"
        icon={IconPlus}
        buttonAction={actionCreateButton}
      />


      {/* <div ref={containerRef} className="flex flex-wrap text-white overflow-y-auto h-128"> */}
      {/* <button type="button" onClick={reload} disabled={loading} className="w-full">
        {loading ? 'loading' : 'Reload'}
      </button> */}


      {/* users.map*/}
      {usersList && usersList.map((user, i) => (
        <MediaObject key={i} className="bg-main-gray-600 h-18 rounded-lg p-3 w-1/2">
          {user.lastName}
        </MediaObject>
      ))}

      {/* {!noMore && (
          <button type="button" onClick={loadMore} disabled={loadingMore}>
            {loadingMore ? 'Loading more...' : 'Click to load more'}
          </button>
        )} */}

      {/* {noMore && <span>No more data</span>} */}
      {/* que si data es un array vacio, no te de la opcion de cargar mas */}
      {/*
        <span style={{ fontSize: 12 }}>total: {data?.total}</span> */}

    </div>
    // </div>
  );
};

export default UserList;
