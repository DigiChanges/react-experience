import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Button from "../../atoms/Button";
import Modal from "../../molecules/Modal";
import { removeUser, unselectedUser } from '../../redux/users/actions'

const ConfirmDelete = ({ open, close }: any): any => {

  const dispatch = useDispatch()
  const booleanXquit = true;

  const { userSelected } = useSelector( state => state.Users )

  useEffect(() => {
    setOpenModal(open);
  }, [open]);

  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => {
    close();
    dispatch( unselectedUser() )
    setOpenModal(!openModal);
  };

  const onHandleDeleteUser = () => {
    dispatch( removeUser(userSelected.id) )
    closeModal()
  } 

  return (
    <Modal open={openModal}>
      <div
        className="fixed top-0 left-0 h-screen w-full flex items-center justify-center"
        style={{ background: "rgba(0,0,0,0.5)" }}
      >
        <div className="container mx-auto h-full flex justify-center items-center">
          <div className="w-1/3">
            <div className="bg-gray-800 p-6 rounded-lg border-teal  border-t-12  mb-6  shadow-lg">
              {booleanXquit ? (
                <div className="text-right ">
                  <Button buttonClick={closeModal} buttonClass="text-lg" buttonType="button">
                    x
                  </Button>
                </div>
              ) : null}
              <div className="ml-1/4 w-1/2  text-red-500 ">
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
              {userSelected ? (
                <p className="font-hairline text-5xl text-gray-400 mb-4 text-center">
                  Are you sure delete user: 
                  <br/>
                  <span className='text-2xl'>
                    { `${ userSelected.id } - ${userSelected.lastName} ${userSelected.firstName}` }
                  </span>
                </p>
              ) : <p>No user selected</p>}

              <div className="mt-10 flex justify-around ">
                <Button buttonClass="flex shadow-kx1 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg text-center"
                  buttonClick={closeModal} buttonType="button">
                  <span className="mr-2">Close</span>
                </Button>

                <Button buttonClass="flex shadow-kx1 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg text-center"
                  buttonType="button" buttonClick={ onHandleDeleteUser }> 
                  Delete
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmDelete;
