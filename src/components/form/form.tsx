import classes from "./form.module.scss";
import { useEffect, useState } from "react";
import { AlertBox, Button, Input } from "components";
import { FieldError, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type Values = {
	name: string;
	email: string;
	password: string;
	passwordConfirm: string;
};

const schema = yup.object().shape({
	name: yup.string().required(),
	email: yup.string().email().required("Enter your email"),
	password: yup.string().required("Enter your password").min(6, "Password is too small"),
	passwordConfirm: yup.string().oneOf([yup.ref("password"), null], "Passwords must match"),
});

const Form = () => {
	const [problems, setProblems] = useState<Array<FieldError | undefined>>([]);
	const [result, setResult] = useState<Values>();
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitted },
	} = useForm<Values>({ resolver: yupResolver(schema) });

	const onSubmit = (values: Values) => {
		setResult(values);
	};

	useEffect(() => {
		if (errors && isSubmitted) {
			setProblems([errors.email, errors.name, errors.password, errors.passwordConfirm]);
		}
	}, [isSubmitted, errors]);

	return (
		<div className={classes.container}>
			{isSubmitted && problems.some((p) => !!p) && <AlertBox problemsList={problems} />}
			<form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
				<h1 className={classes.title}>Create account</h1>
				<Input {...register("name")} label="Your name" type="text" />
				<Input {...register("email")} label="Email" type="email" />
				<Input
					{...register("password")}
					label="Password"
					type="password"
					placeholder="At least 6 characters"
					info="Passwords must be at least 6 characters."
				/>
				<Input {...register("passwordConfirm")} label="Re-enter password" type="password" />
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
			{result && !problems.some((p) => !!p) && (
				<div className={classes.result}>
					<div>
						<pre>{JSON.stringify(result, null, 2)}</pre>
					</div>
				</div>
			)}
		</div>
	);
};

export default Form;
