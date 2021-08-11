import classes from "./input.module.scss";
import infoIcon from "assets/info.svg";
import { HTMLProps, ReactNode, FC } from "react";

export type Props = HTMLProps<HTMLInputElement> & {
	label?: string | ReactNode;
	touched?: boolean;
	defaultValue?: string;
	info?: string;
};

const Input: FC<Props> = ({ label, touched = false, onChange, id, info, ...inputProps }) => {
	return (
		<div className={classes.container}>
			<label className={classes.label} htmlFor={id}>
				{label}
			</label>
			<input className={classes.input} type="text" id={id} {...inputProps} />
			{info && (
				<span className={classes.info}>
					<img src={infoIcon} height="18" alt="info" /> {info}
				</span>
			)}
		</div>
	);
};

export default Input;
