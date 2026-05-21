// Element Costum sibutton
import { useState } from "react";
import { twMerge } from "tailwind-merge";

function CalculatorButton({ children, className, ...rest }) {
  return (
    <button
      className={twMerge(
        "bg-gray-100 py-5 aspect-square rounded-2xl shadow-sm hover:brightness-95 hover:cursor-pointer active:brightness-90 transition-all text-gray-800 duration-100 text-3xl",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

//UI Kalculator
function Calculator() {
  const [curVal, setcurVal] = useState("");
  const [prevVal, setprevVal] = useState("");
  const [op, setOp] = useState("");

  function handleButtonClick(i) {
    setcurVal((prev) => prev + i);
  }

  function handleClear() {
    setcurVal("");
    setprevVal("");
    setOp("");
  }

  function handlePercent() {
    setcurVal((prev) => prev / 100);
  }

  function handleSqrt() {
    setcurVal((prev) => Math.sqrt(prev));
  }

  function handleOp(op) {
    setOp(op);
    setprevVal(curVal);
    setcurVal("");
  }

  function handleEqual() {
    if (op === "+") {
      setcurVal(parseFloat(prevVal) + parseFloat(curVal));
      setprevVal("");
      setOp("");
    } else if (op === "-") {
      setcurVal(parseFloat(prevVal) - parseFloat(curVal));
      setprevVal("");
      setOp("");
    } else if (op === "*") {
      setcurVal(parseFloat(prevVal) * parseFloat(curVal));
      setprevVal("");
      setOp("");
    } else if (op === "/") {
      setcurVal(parseFloat(prevVal) / parseFloat(curVal));
      setprevVal("");
      setOp("");
    }
  }

  function handleDisplay() {
    if (curVal.length === 0) {
      return "0";
    } else if (curVal === ".") {
      return "0."; 
    } else {
      return parseFloat(curVal).toLocaleString();
    }
  }

  return (
    <div className="bg-white p-5 rounded-2xl">
      <div className="text-6xl text-right bg-gray-100 p-3 rounded-xl mb-6">
        {handleDisplay()}
      </div>

      <div className=" grid grid-cols-4 gap-4">
        <CalculatorButton
          className="bg-red-100 text-red-400"
          onClick={handleClear}
        >
          C
        </CalculatorButton>
        <CalculatorButton onClick={handlePercent}>%</CalculatorButton>
        <CalculatorButton onClick={handleSqrt}>√</CalculatorButton>
        <CalculatorButton
          className="bg-orange-400 text-white"
          onClick={() => handleOp("/")}
        >
          ÷
        </CalculatorButton>
        <CalculatorButton onClick={() => handleButtonClick("1")}>
          1
        </CalculatorButton>
        <CalculatorButton onClick={() => handleButtonClick("2")}>
          2
        </CalculatorButton>
        <CalculatorButton onClick={() => handleButtonClick("3")}>
          3
        </CalculatorButton>
        <CalculatorButton
          className="bg-orange-400 text-white"
          onClick={() => handleOp("*")}
        >
          X
        </CalculatorButton>
        <CalculatorButton onClick={() => handleButtonClick("4")}>
          4
        </CalculatorButton>
        <CalculatorButton onClick={() => handleButtonClick("5")}>
          5
        </CalculatorButton>
        <CalculatorButton onClick={() => handleButtonClick("6")}>
          6
        </CalculatorButton>
        <CalculatorButton
          className="bg-orange-400 text-white"
          onClick={() => handleOp("-")}
        >
          -
        </CalculatorButton>
        <CalculatorButton onClick={() => handleButtonClick("7")}>
          7
        </CalculatorButton>
        <CalculatorButton onClick={() => handleButtonClick("8")}>
          8
        </CalculatorButton>
        <CalculatorButton onClick={() => handleButtonClick("9")}>
          9
        </CalculatorButton>
        <CalculatorButton
          className="bg-orange-400 text-white"
          onClick={() => handleOp("+")}
        >
          +
        </CalculatorButton>
        <CalculatorButton
          className="col-span-2 aspect-auto"
          onClick={() => handleButtonClick("0")}
        >
          0
        </CalculatorButton>
        <CalculatorButton onClick={() => handleButtonClick(".")}>
          .
        </CalculatorButton>
        <CalculatorButton
          className="bg-green-400 text-white"
          onClick={handleEqual}
        >
          =
        </CalculatorButton>
      </div>
    </div>
  );
}

//Mengambil UI hasil dari function Calculator
function App() {
  return (
    <div className="bg-linear-to-br from-slate-800 to-slate-950 h-dvh flex items-center justify-center">
      <Calculator />
    </div>
  );
}

export default App; 