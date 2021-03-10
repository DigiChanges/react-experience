import React from "react";
import IconSearch from "./Icons/Stroke/IconSearch";

const SearchInput = ({ ...props}): any =>
{
	return (
		<>
			<div className="relative mr-6 my-2">
				<input onChange={e => props.form.setFieldValue(props.field.name, e.target.value)}
					type="search"
					className="w-full shadow rounded pl-10 "
					placeholder={props.placeholder}
				/>
				<div className="absolute w-100/10 left-0 top-0 mt-2 ml-3 text-purple-lighter">
					<IconSearch/>
				</div>
			</div>
		</>
	)
}

export default SearchInput;
