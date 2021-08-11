import classes from "./input.module.scss";

import { HTMLProps, ReactNode, FC } from "react";

export type Props = HTMLProps<HTMLInputElement> & {
	label?: string | ReactNode;
	touched?: boolean;
	defaultValue?: string;
};

const Input: FC<Props> = ({ label, touched = false, onChange, id, ...inputProps }) => {
	return (
		<div className={classes.container}>
			<label className={classes.label} htmlFor={id}>
				{label}
			</label>
			<input className={classes.input} type="text" id={id} {...inputProps} />
		</div>
	);
};

export default Input;
