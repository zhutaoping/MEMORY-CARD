import React, { MouseEventHandler } from "react";
import classes from "./Button.module.css";

type Props = {
	onClick?: MouseEventHandler;
	type?: "submit" | "reset" | "button" | undefined;
	children?: React.ReactNode;
};

const Button = ({ type, onClick, children }: Props) => {
	return (
		<button
			className={classes.button}
			type={type || "button"}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
