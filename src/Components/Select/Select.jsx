import styles from "./Select.module.css";

const Select = (props) => {
  const changeMode = (modeName) => {
    props.SetCurentValue(props.state.find((el) => el.name === modeName));
  };
  return (
    <select
      className={styles.select}
      value={props.curentValue.name}
      onChange={(event) => changeMode(event.target.value)}
    >
      <option disabled="disabled" selected>
        Pick mode
      </option>
      {props.state.map((state, index) => (
        <option field={state.field}>{state.name}</option>
      ))}
    </select>
  );
};

export default Select;
