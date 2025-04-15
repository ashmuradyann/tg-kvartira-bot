import clsx from "clsx";
import styles from "./button.module.css";

const Button = ({ children, onClick, customClassName }: any) => {
  return <button className={clsx(styles.button, customClassName, "flex-center")} onClick={onClick}>{children}</button>;
};

export default Button;
