import React, {PropsWithChildren} from "react";

interface ButtonProps extends PropsWithChildren<any> {
  buttonType?: "button" | "submit" | "reset";
  props?: any;
}

const Button: React.FC<ButtonProps> = ({ children, buttonType = 'button', ...props}) =>
{
	return (
		<button
			type={buttonType ?? "button"}
			{...props}
		>
			{children}
		</button>
	)
}

export default Button