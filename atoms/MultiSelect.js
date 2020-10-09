import * as React from "react";
import { Formik, Form, Field } from "formik";
import { TrendingUpTwoTone } from "@material-ui/icons";

const MultiSelect = ({ options, value }) => {
  const [currentSelection, setCurrentSelection] = React.useState([]);

  const [openMulti, setOpenMulti] = React.useState(false);

  const getAllUnselected = () => {
    return options.filter(
      (item) => currentSelection.indexOf(item.value) === -1
    );
  };
  const getAllSelected = () => {
    return options.filter(
      (item) => currentSelection.indexOf(item.value) !== -1
    );
  };
  const deleteSelected = (value) => {
    setCurrentSelection(currentSelection.filter((pos) => pos !== value));
  };

  const selectOnChange = (value) => {
    setCurrentSelection([...currentSelection, value]);
  };
  const switchMulti = () => {
    if (openMulti) {
      return setOpenMulti(false);
    }
    return setOpenMulti(true);
  };

  console.log(currentSelection);
  return (
    <div className="w-full flex flex-col items-center h-auto mx-auto">
      <div className="w-full">
        <div className="flex flex-col items-center relative">
          <div className="w-full  ">
            <div className=" p-1 flex border border-gray-700 bg-gray-800 rounded ">
              <div className="flex flex-auto flex-wrap">
                {currentSelection
                  ? getAllSelected().map((opt) => {
                      return (
                        <div className="w-auto flex items-center bg-gray-700 rounded-full mr-1 mb-1 border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2 hover:border-grey  shadow">
                          <div className="text-xs font-normal leading-none max-w-full flex-initial">
                            {opt.key}
                          </div>
                          <div className="flex flex-auto flex-row-reverse">
                            <div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="100%"
                                height="100%"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="feather feather-x cursor-pointer hover:text-gray-400 rounded-full w-4 h-4 ml-2"
                                onClick={() => {
                                  deleteSelected(opt.value);
                                }}
                              >
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                              </svg>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  : null}

                <div className="flex-1 h-5">
                  <input
                    placeholder=""
                    className="bg-transparent p-1 px-2 appearance-none outline-none w-full  text-gray-300"
                  />
                </div>
              </div>
              <div className="text-gray-300 w-8 h-auto py-1 pl-2 pr-1 border-l flex items-center border-gray-200 ">
                <button
                  className="cursor-pointer w-10 h-auto text-gray-600 outline-none focus:outline-none"
                  onClick={switchMulti}
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-chevron-up w-4 h-auto"
                  >
                    <polyline points="18 15 12 9 6 15"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="absolute shadow  bg-blue-600 w-full left-0 rounded">
            {openMulti ? (
              <select
                name="optionSelect"
                className="w-full h-full bg-red-600 overflow-y-auto "
                onChange={(evt) => {
                  selectOnChange(evt.target.value);
                }}
                multiple={true}
              >
                {currentSelection.length > 0
                  ? getAllUnselected().map((s) => (
                      <option
                        key={s.value}
                        value={s.value}
                        className="bg-gray-800 text-gray-100 text-center "
                      >
                        {s.key}
                      </option>
                    ))
                  : options.map((s) => (
                      <option
                        key={s.value}
                        value={s.value}
                        className="bg-gray-800 text-gray-100 text-center"
                      >
                        {s.key}
                      </option>
                    ))}
              </select>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiSelect;
