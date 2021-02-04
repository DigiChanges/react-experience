import React from 'react';
import Link from 'next/link';

const size = 4
const color = 'gray-500'

const SideBarSubItem = ({theKey, name, path, icon}) =>
{
	const Icon: any = icon;

	return (
		<Link href={path} key={theKey}>
			<a className="flex flex-row items-center justify-center h-6 transform hover:translate-y-2 hover:translate-x-0 md:hover:translate-x-2 md:hover:translate-y-0 transition-transform ease-in duration-200 text-gray-400 hover:text-gray-600">
				{(Icon ? <span className="inline-flex flex-grow items-center justify-center md:justify-start h-6 w-12 text-lg text-gray-300">
            <Icon size={size} color={color}/>
          </span> : <span className="inline-flex flex-grow items-center justify-center h-6 w-12 text-lg text-gray-300"/>)}
				<span className="text-sm font-medium hidden md:block justify-start md:justify-start">
            {name}
          </span>
			</a>
		</Link>
	)
}

export default SideBarSubItem;
