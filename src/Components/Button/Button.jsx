import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={styles.btn} onClick={props.onClick}>
      start
    </button>
  );
};

export default Button;
