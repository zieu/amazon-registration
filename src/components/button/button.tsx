import classes from "./button.module.scss";
import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
type Props = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Button: FC<Props> = ({ children, ...props }) => {
  return (
    <button className={classes.button} {...props}>
      {children}
    </button>
  );
};

export default Button;
