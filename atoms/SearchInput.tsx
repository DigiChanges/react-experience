import React from "react";
import IconSearch from "./Icons/Stroke/IconSearch";

const SearchInput = ({ ...props }): any => {
  const propClassName = props.className ?? '';
  const className = `w-full shadow rounded pl-10  ${propClassName}`;

  return (
    <>
      <div className="relative mr-1 my-2 flex-grow w-58">
        <input onChange={e => props.form.setFieldValue(props.field.name, e.target.value)}
          type="search"
          className={className}
          placeholder={props.placeholder}
          value={props.field.value}
        />
        <div className="absolute w-5 lg:w-100/10 left-0 top-0 mt-2 mb-1 ml-3 text-main-gray-400">
          <IconSearch />
        </div>
      </div>
    </>
  )
}

export default SearchInput;
