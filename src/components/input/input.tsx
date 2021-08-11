import classes from "./input.module.scss";
import infoIcon from "assets/info.svg";
import { forwardRef, HTMLProps, ReactNode } from "react";

export type Props = HTMLProps<HTMLInputElement> & {
	label?: string | ReactNode;
	touched?: boolean;
	defaultValue?: string;
	info?: string;
};

const Input = forwardRef<any, Props>(({ label, touched = false, onChange, id, info, ...inputProps }, ref) => {
	return (
		<div className={classes.container}>
			<label className={classes.label} htmlFor={id}>
				{label}
			</label>
			<input className={classes.input} type="text" id={id} ref={ref} {...inputProps} />
			{info && (
				<span className={classes.info}>
					<img src={infoIcon} height="18" alt="info" /> {info}
				</span>
			)}
		</div>
	);
});

export default Input;
