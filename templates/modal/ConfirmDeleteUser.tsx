import React  from "react";

const ConfirmDelete = ({ close }: any): any =>
{
  let booleanXquit = true;

  return (
    <>
      <div
        className="fixed top-0 left-0 h-screen w-full flex items-center justify-center"
        style={{ background: "rgba(0,0,0,0.5)" }}
      >
      <div className="container mx-auto h-full flex justify-center items-center">
        <div className="w-1/3">
          <div className="bg-gray-800 p-6 rounded-lg border-teal  border-t-12  mb-6  shadow-lg">
            {booleanXquit ? (
              <div className="text-right ">
                <button onClick={close} className="text-lg">
                  x
                </button>
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
            <p className="font-hairline text-5xl text-gray-400 mb-4 text-center">
              Are you sure you want to delete the user *
            </p>

            <div className="mt-10 flex justify-around ">
              <button
                className="flex shadow-kx1 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg text-center"
                onClick={close}
                type="button"
              >
                <span className="mr-2">Close</span>
              </button>

              <button
                className="flex shadow-kx1 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg text-center"
                type="submit"
                onClick={() => console.log("props.user")}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default ConfirmDelete;
