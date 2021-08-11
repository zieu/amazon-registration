import { AlertBox, Button, Input } from "components";
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
				<Input
					label="Password"
					type="password"
					placeholder="At least 6 characters"
					info="Passwords must be at least 6 characters."
				/>
				<Input label="Re-enter password" type="passwordConfirm" />
				<Button>Create your Amazon account</Button>
				<p className={classes.paragraph}>
					By creating an account, you agree to Amazon's <br />
					<a href="/">Conditions of Use</a> and <a href="/">Privacy Notice</a>.
				</p>
				<div className="divider" style={{ marginTop: 18 }}></div>
				<p className={classes.option}>
					Already have an account? <a href="/">Sign-In ›</a>
				</p>
			</form>
		</div>
	);
};

export default Form;
