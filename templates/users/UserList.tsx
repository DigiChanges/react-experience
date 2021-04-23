import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useRouter } from "next/router";
import IconPlus from "../../atoms/Icons/Stroke/IconPlus";
import TitleWithButton from "../../molecules/TitleWithButton";
import FilterSort from "../../organisms/FilterSort";
import FilterFactory from "../../helpers/FilterFactory";
import Link from "next/link";
import MediaObject from "../../molecules/MediaObject";
import Title from "../../atoms/Title";
import Button from "../../atoms/Button";
import IconArrowCircleLeft from "../../atoms/Icons/Solid/IconArrowCircleLeft";
import { removeUser, resetUsers } from "../../redux/users/actions";
import { openModal, resetQueryPagination } from "../../redux/general/actions";
import IconEye from "../../atoms/Icons/Stroke/IconEye";
import IconPencilAlt from "../../atoms/Icons/Stroke/IconPencilAlt";
import UserRemove from "./UserRemove";
import IconTrash from "../../atoms/Icons/Stroke/IconTrash";

const UserList = ({ usersList, query, viewMore }) =>
{
  const router = useRouter();
	const dispatch = useDispatch();
  const [showScroll, setShowScroll] = useState(false);

  const openConfirmDelete = (id: string, lastName:  string, firstName: string): void =>
	{
		const modalData = {
			idSelected: id,
			open: true,
			text: <UserRemove id={id} lastName={lastName} firstName={firstName}/>,
			action: removeUser
		}

		dispatch(openModal(modalData));
  };

  const actionCreateButton = () => {
    return router.push("/users/create");
  }

  const onClickFilter = (search: string, filterBy: string, orderBy: string, sort: 'asc' | 'desc') =>
	{
		dispatch(resetUsers());
		dispatch(resetQueryPagination());

    const uriParam = FilterFactory.getUriParam({ search, filterBy, orderBy, sort });

    router.push(`/users/list?${uriParam}`, undefined, { shallow: false });
  }

  const checkScrollTop = () =>
	{
    if (!showScroll && window.pageYOffset > 300) {
      setShowScroll(true)
    }
    else if (showScroll && window.pageYOffset <= 300) {
      setShowScroll(false)
    }
  };

  if (typeof window !== "undefined")
  {
		window.addEventListener('scroll', checkScrollTop)
	}

  const scrollTop = () =>
	{
		if (typeof window !== "undefined") {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
  };

  return (
    <section className="mx-4 -mt-4 ">
      <TitleWithButton
        className="dg-section-title"
        title="Users"
        labelButtonName="Create User"
        icon={IconPlus}
        buttonAction={actionCreateButton}
      />
      {/*<div className="flex flex-col justify-between my-4">*/}
        <FilterSort actionFilter={onClickFilter} filterQuery={query} />
      {/*</div>*/}
        <div className="dg-grid-3x3">
        {usersList && usersList.map((user, i) => (
							<MediaObject
								className="dg-media-object"
                                key={i}
							>
							<div className="flex-col w-10 h-10 bg-white text-black justify-center content-center rounded-full">{' '}</div>
							<div className="flex-col justify-center content-center ml-3">
                                <Title titleType="h6" className="hover:transform hover:scale-125"><a href={`/users/view/${user.id}`}>{user.firstName}{' '}{user.lastName}</a></Title>
								{user.email}
							</div>
							<div className="flex flex-col ml-auto">
								<div className="h-6 w-6 my-1">
									<button
										className="w-6 hover:text-gray-700 mr-1 focus:outline-none"
										onClick={() => router.push(`/users/update/${user.id}`)}
									>
										<IconPencilAlt/>
									</button>
								</div>
								<div className="h-6 w-6 my-1">
									<button
										className="w-6 hover:text-gray-700 mr-1 focus:outline-none"
										onClick={() => router.push(`/users/changePassword/${user.id}`)}
									>
										<IconEye/>
									</button>
								</div>
								<div className="h-6 w-6 my-1">
									<button
										className="w-6 hover:text-gray-700 mr-1 focus:outline-none"
										onClick={() => openConfirmDelete(user.id, user.lastName, user.firstName)}
										type='button'
									>
										<IconTrash/>
								</button>
								</div>
							</div>
						</MediaObject>

        ))}
        </div>



        <div className="flex justify-center w-3/4 mt-10">
          <Button onClick={viewMore} className="w-32 h-10 bg-main-gray-500 hover:bg-main-gray-400 rounded-xl text-white font-bold text-sm mx-auto">
            View More
					</Button>
          <Button onClick={scrollTop} className={'h-10 w-10 transform rotate-90 text-main-gray-250 ' + (showScroll ? 'flex' : 'hidden')} >
            <IconArrowCircleLeft />
          </Button>
        </div>
    </section>
  );
};

export default UserList;
