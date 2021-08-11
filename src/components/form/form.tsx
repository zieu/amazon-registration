import { AlertBox } from "components";
import Input from "components/input";
import classes from "./form.module.scss";

const probs = ["prob1", "prob2"];

const Form = () => {
	return (
		<div className={classes.container}>
			<AlertBox problemsList={probs} />
			<form className={classes.form}>
				<h1 className={classes.title}>Create account</h1>
				<Input label="Your name" type="text" />
				<Input label="Email" type="email" />
				<Input label="Password" type="password" />
			</form>
		</div>
	);
};

export default Form;
