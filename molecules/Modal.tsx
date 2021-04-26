import React from "react";

const Modal = (props: any): any =>
{
	const {open, children} = props;

	return (
		<>
			{open && <div
                className="fixed h-screen w-screen items-center z-20 bg-transparent-black"
            >
			{children}
			</div>}
		</>
	);
};

export default Modal;
