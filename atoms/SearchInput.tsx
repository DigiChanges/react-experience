import React from "react";
import IconSearch from "./Icons/Stroke/IconSearch";

const SearchInput = ({ ...props}): any =>
{
	const propClassName = props.className ?? '';
	const className = `w-full shadow rounded pl-10  ${propClassName}`;

	return (
		<>
			<div className="relative mr-1 my-2 flex-grow">
				<input onChange={e => props.form.setFieldValue(props.field.name, e.target.value)}
					type="search"
					className={className}
					placeholder={props.placeholder}
				  value={props.field.value}
				/>
				<div className="absolute w-100/4 lg:w-100/10 left-0 top-0 mt-2 ml-3 text-purple-lighter">
					<IconSearch/>
				</div>
			</div>
		</>
	)
}

export default SearchInput;
