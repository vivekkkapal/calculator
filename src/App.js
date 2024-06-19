import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [displayValue, setdisplayValue] = useState("");

  function Oprations(value) {
    let Oprands = ["+", "-", "*", "/"];
    let result;

    try {
      let Oprator = null;
      for (let i = 0; i < displayValue.length; i++) {
        if (Oprands.includes(displayValue[i])) {
          Oprator = displayValue[i];
          break;
        }
      }

      if (!Oprator) {
        setdisplayValue(parseFloat(displayValue).toString());
        return;
      }

      const [value1, value2] = displayValue.split(Oprator).map(parseFloat);

      switch (Oprator) {
        case "+":
          result = (value1 + value2).toString();
          break;
        case "-":
          result = (value1 - value2).toString();
          break;
        case "*":
          result = (value1 * value2).toString();
          break;
        case "/":
          result = (value1 / value2).toString();
          break;
        default:
          throw new Error("Invalid value");
      }

      setdisplayValue(result);
    } catch (e) {
      setdisplayValue(e);
    }
  }

  const ButtonClicked = (value) => {
    if (value === "AC") {
      setdisplayValue("");
    } else if (value === "Backspace") {
      setdisplayValue(displayValue.slice(0, -1));
    } else if (value === "=") {
      Oprations(displayValue);
    } else {
      setdisplayValue((previousValue) => previousValue + value);
    }
  };

  return (
    <div className="calculator">
      <input type="text" className="calculator-screen" value={displayValue} />
      <div className="calculator-keys">
        <button
          onClick={() => ButtonClicked("+")}
          className="operator"
          value="+"
        >
          +
        </button>
        <button
          onClick={() => ButtonClicked("-")}
          className="operator"
          value="-"
        >
          -
        </button>
        <button
          onClick={() => ButtonClicked("*")}
          className="operator"
          value="*"
        >
          &times;
        </button>
        <button
          onClick={() => ButtonClicked("/")}
          className="operator"
          value="/"
        >
          &divide;
        </button>

        <button onClick={() => ButtonClicked("7")} value="7">
          7
        </button>
        <button onClick={() => ButtonClicked("8")} value="8">
          8
        </button>
        <button onClick={() => ButtonClicked("9")} value="9">
          9
        </button>

        <button onClick={() => ButtonClicked("4")} value="4">
          4
        </button>
        <button onClick={() => ButtonClicked("5")} value="5">
          5
        </button>
        <button onClick={() => ButtonClicked("6")} value="6">
          6
        </button>

        <button onClick={() => ButtonClicked("1")} value="1">
          1
        </button>
        <button onClick={() => ButtonClicked("2")} value="2">
          2
        </button>
        <button onClick={() => ButtonClicked("3")} value="3">
          3
        </button>

        <button onClick={() => ButtonClicked("0")} value="0">
          0
        </button>
        <button
          onClick={() => ButtonClicked(".")}
          className="decimal"
          value="."
        >
          .
        </button>
        <button
          onClick={() => ButtonClicked("Backspace")}
          className="equal-sign operator"
          value="Backspace"
        >
          Backspace
        </button>
        <button
          onClick={() => ButtonClicked("AC")}
          className="all-clear"
          value="all-clear"
        >
          AC
        </button>

        <button
          onClick={() => ButtonClicked("=")}
          className="equal-sign operator"
          value="="
        >
          =
        </button>
      </div>
    </div>
  );
};

export default App;
