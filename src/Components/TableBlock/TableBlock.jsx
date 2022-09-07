import { useState } from "react";
import styles from "./TableBlock.module.css";

const TableBlock = (props) => {
  let [colorBg, setColorBg] = useState("white");
  if (props.deleteBlueColor === true && colorBg === "blue") {
    setColorBg("white");
    props.setDeleteBlueColor(false);
  }
  const changeColor = (idElement) => {
    if (colorBg === "white") {
      setColorBg("blue");
      props.setHoverSquares([...props.hoverSquares, idElement]);
    }
    if (colorBg === "blue") {
      setColorBg("white");
      props.setHoverSquares(props.hoverSquares.filter((p) => p !== idElement));
    }
  };

  return (
    <div
      className={styles.block}
      id={props.id}
      onMouseEnter={(event) => {
        changeColor(+event.target.id);
      }}
      style={{ background: `${colorBg}` }}
    ></div>
  );
};

export default TableBlock;
