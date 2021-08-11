import classes from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className="divider"></div>
      <div className={classes.links}>
        <a href="/">Conditions of Use</a>
        <a href="/">Privacy Notice</a>
        <a href="/">Help</a>
      </div>
      <p className={classes.copy}>© 1996-2021, Amazon.com, Inc. or its affiliates</p>
    </footer>
  );
};

export default Footer;
