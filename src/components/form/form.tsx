import { AlertBox } from "components";
import classes from "./form.module.scss";

const probs = ["prob1", "prob2"];

const Form = () => {
	return (
		<div className={classes.container}>
			<AlertBox problemsList={probs} />
			<form className={classes.form}></form>
		</div>
	);
};

export default Form;
