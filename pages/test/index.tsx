import React, { useEffect, useState } from "react";
import { getUsers } from "../../redux/users/actions";
import { useDispatch, useSelector } from 'react-redux';
import MediaObject from "../../molecules/MediaObject";
import Title from "../../atoms/Title";
import Button from "../../atoms/Button";
import IconArrowCircleLeft from "../../atoms/Icons/Solid/IconArrowCircleLeft";

const Test = (): any => {
  const dispatch = useDispatch();
  const { usersList } = useSelector((state) => state.Users)

  useEffect(() => {
    dispatch(getUsers())
  }, []);

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
  return (
    <>
      <section className="lg:w-3/4">
        <div className="text-gray-500 bg-gray-900 flex flex-row items-center flex-wrap sm:m-3 lg:w-4/5 justify-start ml-6">
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
            <Button buttonClick="none" className="w-32 h-10 bg-gray-800 rounded-xl text-white font-bold text-sm mx-auto">
              View more
            </Button>
            <Button buttonClick={scrollTop} className={'h-10 w-10 transform rotate-90 text-main-gray-250 ' + (showScroll ? 'flex' : 'hidden')} >
              <IconArrowCircleLeft />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Test;
