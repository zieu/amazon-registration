import { FC } from "react";
import classes from "./alertbox.module.scss";
import alertIcon from "assets/alert.svg";
import { FieldError } from "react-hook-form";

type Props = {
	problemsList: Array<FieldError | undefined>;
};

const Alertbox: FC<Props> = ({ problemsList }) => {
	return (
		<div className={classes.alertbox}>
			<img src={alertIcon} alt="alert" width="30" />
			<div>
				<h3>There was a problem</h3>
				<ul>{problemsList.map((problem, index) => problem && <li key={index}>{problem.message}</li>)}</ul>
			</div>
		</div>
	);
};

export default Alertbox;
