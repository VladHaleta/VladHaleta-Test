import styles from "./Squares.module.css";

const Squares = (props) => {
  return (
    <div className={styles.main}>
      row {Math.ceil(props.id / props.field)} col{" "}
      {props.id - (Math.ceil(props.id / props.field) - 1) * props.field}
    </div>
  );
};

export default Squares;
