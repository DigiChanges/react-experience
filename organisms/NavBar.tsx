import React from "react";
import IconBurger from "../atoms/Icons/Stroke/IconBurger";
import Image from "../atoms/Image";


// const { user } = useSelector(store => store.Auth);

export default function NavBar() {
  return (
    <nav className="grid grid-cols-3 gap-2 justify-items-stretch p-5 shadow-md text-white " >

      <div className="justify-self-start col-span-2 font-medium text-xl ">
        <Image image={"/logonav.png"} className="inline" />
        DIGICHANGES</div>

      <div className="justify-self-end self-center ">
        {/* TODO agregar userview correctamente */}
        {/* <UserView ¿¿¿??? /> */}
        {/* // const { user } = useSelector(store => store.Auth); */}
        <span className="">Usuario    </span>
        <IconBurger />
      </div>
    </nav>
  )
}

