import React from "react";
import classes from "./Card.module.css";

type Props = {
	className: string;
	children?: React.ReactNode;
};

const Card = ({ className, children }: Props) => {
	return <div className={`${classes.card} ${className}`}>{children}</div>;
};

export default Card;
