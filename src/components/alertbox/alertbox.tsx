import { FC } from "react";
import classes from "./alertbox.module.scss";
import alertIcon from "assets/alert.svg";

type Props = {
	problemsList: Array<string>;
};

const Alertbox: FC<Props> = ({ problemsList }) => {
	return (
		<div className={classes.alertbox}>
			<img src={alertIcon} alt="alert" width="30" />
			<div>
				<h3>There was a problem</h3>
				<ul>
					{problemsList.map((problem) => (
						<li>{problem}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Alertbox;
