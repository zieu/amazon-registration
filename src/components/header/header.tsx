import classes from "./header.module.scss";
import logo from "assets/logo.svg";

const Header = () => {
	return (
		<div className={classes.header}>
			<img width="103" height="31" src={logo} alt="amazon logo" />
		</div>
	);
};

export default Header;
