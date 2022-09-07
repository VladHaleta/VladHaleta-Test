import React, { useState } from "react";
import styles from "./App.module.css";
import TableBlock from "../src/Components/TableBlock/TableBlock";
import Select from "../src/Components/Select/Select";
import Button from "../src/Components/Button/Button";
import Squares from "../src/Components/Squares/Squares";

export default function App() {
  const state = [
    {
      name: "Easy",
      field: 5
    },
    {
      name: "Normal",
      field: 15
    },
    {
      name: "Hard",
      field: 25
    }
  ];
  const nameField = React.useRef(0);
  const [field, setField] = useState(5);
  const [curentValue, SetCurentValue] = useState({
    name: "Pick mode",
    field: 5
  });
  let [hoverSquares, setHoverSquares] = useState([]);
  let [deleteBlueColor, setDeleteBlueColor] = useState(false);
  console.log(nameField.current);

  return (
    <div className={styles.App}>
      <div>
        <div>
          <Select
            state={state}
            curentValue={curentValue}
            SetCurentValue={SetCurentValue}
          />
          <Button
            onClick={() => {
              setField(curentValue.field);
              setHoverSquares([]);
              setDeleteBlueColor(true);
            }}
          />
        </div>

        <div
          className={styles.container}
          ref={nameField}
          style={{
            minHeight: "175px",
            gridTemplateColumns: `repeat(${field},10fr)`,
            gridTemplateRows: `repeat(${field},10fr)`
          }}
        >
          {Array.from({ length: field * field }).map((arr, index) => (
            <TableBlock
              style={{ background: "blue" }}
              id={index + 1}
              hoverSquares={hoverSquares}
              setHoverSquares={setHoverSquares}
              deleteBlueColor={deleteBlueColor}
              setDeleteBlueColor={setDeleteBlueColor}
            />
          ))}
        </div>
      </div>
      <div className={styles.textContainer}>
        <h3>Hover squares</h3>
        {hoverSquares.map((value) => (
          <Squares id={value} field={field} />
        ))}
      </div>
    </div>
  );
}
