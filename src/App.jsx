import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Validador</h1>
      <Input inputType="name" />
      <Input inputType="last-name" />
      <Input inputType="age" />
    </div>
  );
}

function Input(props) {
  const [input, setInput] = useState("");

  const handleInput = (e) => setInput(e.target.value);

  const validatePlaceholder = () => {
    let placeholder = [];
    props.inputType === "name" && placeholder.push("Ingrese su nombre");
    props.inputType === "last-name" && placeholder.push("Ingrese su apellido");
    props.inputType === "age" && placeholder.push("Ingrese su edad");
    let setClass = placeholder.join(" ");
    return setClass;
  };

  const validatorClass = () => {
    let classes = [];
    let reEx = {
      namelast: /^([a-zñáéíóú]+[\s]*)+$/i,
      age: /^([\d]){1,3}$/
    };

    input === ""
      ? classes.push("default-validator")
      : props.inputType === "name" || props.inputType === "last-name"
      ? reEx.namelast.test(input)
        ? classes.push("correct-validator")
        : classes.push("wrong-validator")
      : props.inputType === "age" && reEx.age.test(input)
      ? classes.push("correct-validator")
      : classes.push("wrong-validator");

    let setClass = classes.join(" ");
    return setClass;
  };
  
  return (
    <>
      <input
        className={validatorClass()}
        value={input}
        onChange={handleInput}
        type="text"
        placeholder={validatePlaceholder()}
      />
    </>
  );
}
