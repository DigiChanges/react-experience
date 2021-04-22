import React from "react";
import { useDispatch } from 'react-redux';
import Modal from "../../molecules/Modal";
import { IModalData } from "../../redux/general/reducers";
import { closeModal } from "../../redux/general/actions";
import Button from "../../atoms/Button";
import ButtonConfirm from "../../molecules/ButtonConfirm";
import ButtonClose from "../../molecules/ButtonClose";

const ConfirmDelete: React.FC<IModalData> = ({open, idSelected,	text, action}): any =>
{
	const dispatch = useDispatch();

	const onHandleCloseModal = () =>
	{
		dispatch(closeModal())
	}

	const onHandleDeleteUser = () =>
	{
		dispatch(action(idSelected))
		dispatch(closeModal())
	}

	return (
		<Modal open={open}>
			<div
				className="fixed top-0 left-0 h-screen w-full flex items-center justify-center"
				style={{background: "rgba(0,0,0,0.5)"}}
			>
				<div className="container mx-auto h-full flex justify-center items-center">
					<div className="w-1/3">
						<div className="bg-gray-800 p-6 rounded-lg border-teal  border-t-12  mb-6  shadow-lg">
							<div className="text-right ">
								<Button
									className="flex shadow-kx1 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg text-center"
									buttonType="button"
									onClick={onHandleCloseModal}
								>
									X
								</Button>
							</div>
							<div className="w-1/4 ml-5 w-1/2  text-red-500 ">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>
							{text}
							<div className="mt-10 flex justify-around ">
								<ButtonClose
									onClick={onHandleCloseModal}
								>
									Cancel
								</ButtonClose>
								<ButtonConfirm
									onClick={onHandleDeleteUser}
								>
									Save
								</ButtonConfirm>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Modal>
	);
};

export default ConfirmDelete;
