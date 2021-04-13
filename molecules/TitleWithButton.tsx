import React from "react";
import Title from "../atoms/Title";
import ButtonIcon from "./ButtonIcon";

const TitleWithButton = ({ title, icon, labelButtonName, buttonAction, className }): any => {
  return (
    <>
      <section className="flex flex-row justify-between">
        <Title className={className} titleType="h4">
          {title}
        </Title>
        <ButtonIcon
          icon={icon}
          onClick={buttonAction}
          labelName={labelButtonName}
        />
      </section>
    </>
  );
};

export default TitleWithButton;
