import {useState} from "react";

import Input from "./components/Input/input.component";
import Button from "./components/Button/button.component";

import {ThemeProvider} from "styled-components";
import {Container, Content, Row, LightTheme, DarkTheme} from "./styles";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [expression, setExpression] = useState("Dev. by Thiago Miranda  ");
  const [operation, setOperation] = useState("");
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setExpression("");
    setOperation("");
  };

  const handleAddNumber = (num) => {
    setCurrentNumber((prev) => {
      if (
        num === "," &&
        (prev.endsWith(",") || /[+\-*/][^+\-*/]*,/.test(prev))
      ) {
        return prev;
      }

      let result;
      if (operation === "" && prev === "0") {
        result = num === "," ? `0${num}` : `${num}`;
      } else if (operation === "" && prev !== "0" && num === ",") {
        result = `${prev}${num}`;
      } else if (operation === "-" && prev === "0") {
        result = num === "," ? `-0${num}` : `-${num}`;
      } else if (operation !== "" && prev === firstNumber) {
        result = num === "," ? `0${num}` : `${num}`;
      } else if (
        operation !== "" &&
        num === "," &&
        prev
          .split(/[+\-*/]/)
          .pop()
          .includes(",")
      ) {
        return prev;
      } else {
        result = `${prev}${num}`;
      }
      return result;
    });
  };

  const performOperation = (firstNumber, secondNumber, op) => {
    let result;
    const num1 = parseFloat(firstNumber.replace(",", "."));
    const num2 = parseFloat(secondNumber.replace(",", "."));

    console.log("num1: " + num1, "num2: " + num2);

    switch (op) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num2 !== 0 ? num1 / num2 : "Error";
        break;
      default:
        result = currentNumber;
    }
    if (result.toString().includes(".")) {
      result.toFixed(2);
    }
    return result;
  };

  const handleBackspace = () => {
    if (operation !== "" && operation !== "=") {
      return;
    }
    setCurrentNumber((prev) => {
      let result = prev.slice(0, -1);
      if (result === "") {
        result = "0";
      }
      return result;
    });
    setExpression((prev) => prev.slice(0, -1));
  };

  const handleOperation = (op) => {
    if (operation && operation !== "=" && firstNumber !== "0") {
      const result = performOperation(firstNumber, currentNumber, operation);
      setFirstNumber(String(result));
      setCurrentNumber("0");
    } else {
      setFirstNumber(currentNumber);
    }
    setOperation(op);
    setExpression((prev) => {
      if (currentNumber === "0" && op) {
        return prev;
      } else {
        return `${currentNumber} ${op}`;
      }
    });
  };

  const handlePercent = () => {
    if (operation !== "" && firstNumber !== "0" && currentNumber !== "0") {
      const num1 = parseFloat(firstNumber.replace(",", "."));
      const num2 = parseFloat(currentNumber.replace(",", "."));

      let percent;
      if (num1 < 0) {
        percent = ((num1 * num2) / 100) * -1;
      } else {
        percent = (num1 * num2) / 100;
      }

      let percentExp = String(percent).replace(".", ",");
      setCurrentNumber(percentExp);
      setExpression((prev) => {
        return `${prev} ${num2}%`;
      });
    }
  };

  const handleSumNumbers = () => handleOperation("+");
  const handleDiffNumbers = () => handleOperation("-");
  const handleProdNumbers = () => handleOperation("*");
  const handleDivNumbers = () => handleOperation("/");

  const handleEquals = () => {
    if (operation !== "" && firstNumber !== "0" && currentNumber !== "0") {
      const result = performOperation(firstNumber, currentNumber, operation);
      setCurrentNumber(String(result).replace(".", ","));
      setExpression((prev) => {
        if (prev.startsWith("-")) {
          const part = prev.split(/[+\-*/]/)[1];
          return `-${part}${operation} ${currentNumber} =`;
        }
        const part = prev.split(/[+\-*/]/)[0];
        return `${part}${operation} ${currentNumber} =`;
      });
      setFirstNumber("0");
      setOperation("=");
    }
  };

  return (
    <ThemeProvider theme={theme === "dark" ? DarkTheme : LightTheme}>
      <Container className="App">
        <Content>
          <Input value={[currentNumber, expression]} />
          <Row>
            <Button label="C" color="primary" onClick={() => handleOnClear()} />
            <Button label="&larr;" color="primary" onClick={handleBackspace} />
            <Button label="&#37;" color="primary" onClick={handlePercent} />
            <Button label="&#247;" color="alert" onClick={handleDivNumbers} />
          </Row>
          <Row>
            <Button
              label="7"
              color="secondary"
              onClick={() => handleAddNumber("7")}
            />
            <Button
              label="8"
              color="secondary"
              onClick={() => handleAddNumber("8")}
            />
            <Button
              label="9"
              color="secondary"
              onClick={() => handleAddNumber("9")}
            />
            <Button label="&#215;" color="alert" onClick={handleProdNumbers} />
          </Row>
          <Row>
            <Button
              label="4"
              color="secondary"
              onClick={() => handleAddNumber("4")}
            />
            <Button
              label="5"
              color="secondary"
              onClick={() => handleAddNumber("5")}
            />
            <Button
              label="6"
              color="secondary"
              onClick={() => handleAddNumber("6")}
            />
            <Button label="&#8722;" color="alert" onClick={handleDiffNumbers} />
          </Row>
          <Row>
            <Button
              label="1"
              color="secondary"
              onClick={() => handleAddNumber("1")}
            />
            <Button
              label="2"
              color="secondary"
              onClick={() => handleAddNumber("2")}
            />
            <Button
              label="3"
              color="secondary"
              onClick={() => handleAddNumber("3")}
            />
            <Button label="&#43;" color="alert" onClick={handleSumNumbers} />
          </Row>
          <Row>
            <Button label="&#8943;" color="secondary" onClick={toggleTheme} />
            <Button
              label="0"
              color="secondary"
              onClick={() => handleAddNumber("0")}
            />
            <Button
              label=","
              color="secondary"
              onClick={() => handleAddNumber(",")}
            />
            <Button label="&#61;" color="alert" onClick={handleEquals} />
          </Row>
        </Content>
      </Container>
    </ThemeProvider>
  );
};

export default App;
