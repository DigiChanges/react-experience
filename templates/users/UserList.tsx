import React, { useState } from "react";
import { useRouter } from "next/router";
import UsersTable from "../tables/users/UsersTable";
import ConfirmDeleteUser from "../modal/ConfirmDeleteUser";
import IconPlus from "../../atoms/Icons/Stroke/IconPlus";
import TitleWithButton from "../../molecules/TitleWithButton";
import FilterSort from "../../organisms/FilterSort";
import FilterFactory from "../../helpers/FilterFactory";
import MediaObject from "../../molecules/MediaObject";
import Title from "../../atoms/Title";
import Button from "../../atoms/Button";
import IconArrowCircleLeft from "../../atoms/Icons/Solid/IconArrowCircleLeft";

const UserList = ({ usersList, query }) => {
  const router = useRouter();
  const [booleanConfirmDelete, setBooleanConfirmDelete] = useState(false);

  const openConfirmDelete = (): any => {
    setBooleanConfirmDelete(!booleanConfirmDelete);
  };

  const actionCreateButton = () => {
    return router.push("/users/create");
  }

  const onClickFilter = (search: string, filterBy: string, orderBy: string, sort: 'asc' | 'desc') => {
    const uriParam = FilterFactory.getUriParam({ search, filterBy, orderBy, sort });

    router.push(`/users/list?${uriParam}`, undefined, { shallow: false });
  }

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 300) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 300) {
      setShowScroll(false)
    }
  };

  window.addEventListener('scroll', checkScrollTop)

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const nextPagination = (page: string,) => {
    console.log({ page })
    // const uriPage = FilterFactory.getUriParam({page})

    //   router.push(`/users/list?${uriPage}`);
  };

  return (
    <>
      <div className="flex flex-col justify-between">
        <FilterSort actionFilter={onClickFilter} />
        <TitleWithButton
          title="Users"
          labelButtonName="Create User"
          icon={IconPlus}
          buttonAction={actionCreateButton}
        />

      </div>
      <section className="w-full">
        <div className="text-gray-500 bg-gray-900 flex flex-row items-center flex-wrap w-full justify-start">
          {usersList && usersList.map((user, i) => (
            <MediaObject key={i} className="md:max-w-xs w-full md:w-1/2 p-2 bg-main-gray-600 h-18 rounded-lg mx-1 my-1 flex items-center font-semibold text-sm text-main-gray-250">
              <div className="flex-col w-10 h-10 bg-white text-black justify-center content-center rounded-full">a</div>
              <div className="flex-col justify-center content-center ml-3">
                <Title titleType="h6" className="h-6 font-bold">{user.firstName}{' '}{user.lastName}</Title>
                {user.email}
              </div>
            </MediaObject>
          ))}
          <div className="flex justify-center w-3/4 mt-10">
            <Button buttonClick={nextPagination} className="w-32 h-10 bg-gray-800 rounded-xl text-white font-bold text-sm mx-auto">
              View more
            </Button>
            <Button buttonClick={scrollTop} className={'h-10 w-10 transform rotate-90 text-main-gray-250 ' + (showScroll ? 'flex' : 'hidden')} >
              <IconArrowCircleLeft />
            </Button>
          </div>
        </div>
      </section>

      {booleanConfirmDelete ? (
        <ConfirmDeleteUser close={openConfirmDelete} />
      ) : null}
    </>
  );
};

export default UserList;
