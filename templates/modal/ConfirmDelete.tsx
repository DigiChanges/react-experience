import React from "react";
import { useDispatch } from 'react-redux';
import Modal from "../../molecules/Modal";
import { IModalData } from "../../redux/general/reducers";
import { closeModal } from "../../redux/general/actions";
import Button from "../../atoms/Button";
import ButtonConfirm from "../../molecules/ButtonConfirm";
import ButtonClose from "../../molecules/ButtonClose";
import IconCross from "../../atoms/Icons/Stroke/IconCross";
import IconExclamation from "../../atoms/Icons/Stroke/IconExclamation";

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
				<div className="dg-full-center-flex">
					<div className="dg-rounded-small-box flex flex-col justify-between">
							<div className="w-full flex justify-end">
								<Button
									className="dg-link w-6"
									buttonType="button"
									onClick={onHandleCloseModal}
								>
									<IconCross/>
								</Button>
							</div>
							<div className="flex w-full justify-center">
								<span className="text-red-500 w-12">
									<IconExclamation/>
								</span>
							</div>
						<div className="flex w-full justify-center align-middle">
							{text}
							</div>
							<div className="flex justify-around ">
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
		</Modal>
	);
};

export default ConfirmDelete;
