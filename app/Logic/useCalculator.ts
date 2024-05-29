import { useState, ChangeEventHandler } from "react"

export default function useCalculator() {
  const [value, setValue] = useState<string>("")

  function replaceFromEnd(val: string, replaceVal: string, str = value): string {
    const lastIndex = str.lastIndexOf(val);

    if (lastIndex !== -1) return str.substring(0, lastIndex) + replaceVal;

    return str;
  }

  function strWithoutOps(str: string) {
    const operators = ["+", "-", "*", "/"];
    const indexes = operators.map((operator: string) => value.lastIndexOf(operator));
    const lastIndex = Math.max(...indexes);

    if (lastIndex === -1) return str;

    return str.slice(lastIndex);
  }

  function addTrigFunction(trigFunc: string, val = value, onSetVal = onSetValue) {
    const lastVal = String(val[val.length - 1]);
    const operationsRegex = /[+\-*\/]/g;
    const numbersRegex = /[\d]/g;

    if (value === "") {
      onSetVal(trigFunc + "(");
    } else if (operationsRegex.test(lastVal)) {
      onSetVal(trigFunc + "(");
    } else if (numbersRegex.test(lastVal)) {
      onSetVal("*" + trigFunc + "(");
    } else {
      onSetVal("");
    }
  }

  const sine = () => {
    addTrigFunction("sin");
  };

  const cosine = () => {
    addTrigFunction("cos");
  };

  const tangent = () => {
    addTrigFunction("tan");
  };

  const onSetValue = (e: string) => {
    setValue(value.concat(e))
  }

  const onEval = (expression: string) => {
    expression = expression.replace(/sin/g, "Math.sin");
    expression = expression.replace(/cos/g, "Math.cos");
    expression = expression.replace(/tan/g, "Math.tan");

    try {
      setValue(String(eval(expression)));
    } catch {
      setValue("Syntax Error")
    }
  }

  const onEqual = () => {
    try {
      setValue(String(eval(value)));
    } catch {
      setValue("Syntax Error")
    }
  }

  const onDeleteLastElement = () => {
    if (value === "Syntax Error") {
      setValue("");
    } else if (String(value).length > 0) {
      const delLastEl = String(value).split("");
      delLastEl.pop();
      const newValue = delLastEl.join("");
      setValue(newValue);
    } else {
      setValue("");
    }
  }

  const onParentheses = () => {
    const string = value;
    const openParentheses = string.split("(").length - 1;
    const closedParentheses = string.split(")").length - 1;

    if (openParentheses > closedParentheses) {
      setValue(value.concat(")"));
    } else {
      setValue(value.concat("("))
    }
  }

  const handleValue: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
  }

  return {
    onSetValue,
    onEqual,
    onDeleteLastElement,
    onParentheses,
    value,
    setValue,
    handleValue,
    onEval,
    strWithoutOps,
    replaceFromEnd,
    sine,
    cosine,
    tangent

  }
}