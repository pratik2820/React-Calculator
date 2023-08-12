import "./styles/App.css";
import { useState } from "react";

function App() {
  let [num1, setNum1] = useState("");
  let [num2, setNum2] = useState("");
  let [message, setMessage] = useState("");
  let [resultMessage, setResultMessage] = useState("");

  function validate() {
    if (!isNaN(num1) && !isNaN(num2)) {
      if (num1 === "" || num2 === "") {
        setMessage("Error!");
        if (num1 === "" && num2 === "") {
          setResultMessage("Both Inputs Cannot Be Empty");
        } else if (num1 === "") setResultMessage("Num1 Cannot Be Empty");
        else if (num2 === "") setResultMessage("Num2 Cannot Be Empty");
        return false;
      }
      setMessage("Success!");
      return true;
    }
    setMessage("Error!");
    setResultMessage("Please Enter Numbers only");
  }

  function calculate(operator) {
    if (validate()) {
      const n1 = parseFloat(num1);
      const n2 = parseFloat(num2);

      let calculation;
      if (operator === "+") {
        calculation = n1 + n2;
      } else if (operator === "-") {
        calculation = n1 - n2;
      } else if (operator === "*") {
        calculation = n1 * n2;
      } else if (operator === "/") {
        calculation = n1 / n2;
      }
      setResultMessage(`Result - ${calculation}`);
    }
  }

  return (
    <div className="container">
      <main>
        <section>
          <h1>React Calculator</h1>
          <div className="input-section">
            <input
              placeholder="Num 1"
              value={num1}
              onChange={(event) => {
                setNum1(event.target.value);
              }}
            />
            <input
              placeholder="Num 2"
              value={num2}
              onChange={(event) => {
                setNum2(event.target.value);
              }}
            />
          </div>
          <div className="button-section">
            <button symbol="+" onClick={() => calculate("+")}>
              +
            </button>
            <button symbol="+" onClick={() => calculate("-")}>
              -
            </button>
            <button symbol="+" onClick={() => calculate("*")}>
              *
            </button>
            <button symbol="+" onClick={() => calculate("/")}>
              /
            </button>
          </div>
          <span
            className={`message ${message === "Error!" ? "error" : "success"}`}
          >
            {message}
          </span>
          <p className="result">{resultMessage}</p>
        </section>
      </main>
    </div>
  );
}
export default App;