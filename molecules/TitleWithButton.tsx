import React from "react";
import Button from "../atoms/Button";
import Title from "../atoms/Title";
import { useRouter } from 'next/router'
import ButtonIcon from "./ButtonIcon";

const TitleWithButton = ({title, icon, labelButtonName, buttonAction}): any =>
{
	return (
		<>
			<section className="flex flex-row justify-between pt-6">
				<Title className="" titleType="h4">
					{title}
				</Title>
				<ButtonIcon
					icon={icon}
					buttonClick={buttonAction}
					labelName={labelButtonName}
				/>
			</section>
		</>
	);
};

export default TitleWithButton;
