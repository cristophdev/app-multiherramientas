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

  const turnValue = () => {
  const regexGeneral = /[^\d()\-\+*/]+/g;
  const regexNumeric = /[^\d]+/g;

  //general values
  const strGeneral = value.split(regexGeneral);
  const lastStrGeneral = strGeneral[strGeneral.length - 1];
  const finalStr = strWithoutOps(lastStrGeneral);

  //numeric values
  const strNumeric = value.split(regexNumeric);
  const strTrimed = strNumeric.filter(num => num !== "");
  const lastStrNumeric = strTrimed[strTrimed.length - 1];

    if (!lastStrGeneral) {
      onSetValue("-(");
    } else if (finalStr === lastStrNumeric) {
      setValue(replaceFromEnd(finalStr, `-(${lastStrNumeric})`));
    } else if (finalStr === `-(${lastStrNumeric})`) {
      setValue(replaceFromEnd(finalStr, lastStrNumeric));
    } else if (finalStr === `-${lastStrNumeric}`) {
      setValue(replaceFromEnd(finalStr, `+${lastStrNumeric}`));
    } else if (finalStr === `(${lastStrNumeric}`) {
      setValue(replaceFromEnd(finalStr, `-(${lastStrNumeric}`));
    } else if (finalStr === `-(${lastStrNumeric}`) {
      setValue(replaceFromEnd(finalStr, lastStrNumeric));
    } else if (finalStr === `+${lastStrNumeric}`) {
      setValue(replaceFromEnd(finalStr, `-${lastStrNumeric}`));
    } else if (finalStr === `*${lastStrNumeric}`) {
      setValue(replaceFromEnd(finalStr, `*-(${lastStrNumeric})`));
    } else if (finalStr === `*-${lastStrNumeric}`) {
      setValue(replaceFromEnd(finalStr, `*${lastStrNumeric}`));
    } else if (finalStr === `/${lastStrNumeric}`) {
      setValue(replaceFromEnd(finalStr, `/-(${lastStrNumeric})`));
    } else if (finalStr === `/-${lastStrNumeric}`) {
      setValue(replaceFromEnd(finalStr, `/${lastStrNumeric}`));
    } else if (finalStr === `(${lastStrNumeric})`) {
      setValue(replaceFromEnd(finalStr, `-(${lastStrNumeric})`));
    } else {
      onSetValue("");
    }
  }

  function addTrigFunction(trigFunc: string, val = value, onSetVal = onSetValue) {
    const lastVal = String(val[val.length - 1]);
    const operationsRegex = /[+\-*\/]/g;
    const numbersRegex = /[\d]/g;
    const opnParentheses = /\(/g;    
    const clsdParentheses = /\)/g;

    if (trigFunc === "π") {
      if (value === "") {
        onSetVal(trigFunc);
      } else if (numbersRegex.test(lastVal) || clsdParentheses.test(lastVal)) {
        onSetVal("*" + trigFunc);
      } else if (operationsRegex.test(lastVal) || opnParentheses.test(lastVal)) {
        onSetVal(trigFunc);
      } else if (lastVal === trigFunc) {
        onSetVal("*" + trigFunc);
      } else {
        onSetVal("");
      }
    } else {
      if (value === "") {
        onSetVal(trigFunc + "(");
      } else if (operationsRegex.test(lastVal) || opnParentheses.test(lastVal)) {
        onSetVal(trigFunc + "(");
      } else if (numbersRegex.test(lastVal) || clsdParentheses.test(lastVal)) {
        onSetVal("*" + trigFunc + "(");
      }  else {
        onSetVal("");
      }
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

  const ln = () => {
    addTrigFunction("ln");
  };

  const log = () => {
    addTrigFunction("log");
  }

  const root = () => {
    addTrigFunction("√");
  }

  const PI = () => {
    addTrigFunction("π");
  }

  const onSetValue = (e: string) => {
    setValue(value.concat(e))
  }

  const onEval = (expression: string) => {
    expression = expression.replace(/sin/g, "Math.sin");
    expression = expression.replace(/cos/g, "Math.cos");
    expression = expression.replace(/tan/g, "Math.tan");
    expression = expression.replace(/ln/g, "Math.log");
    expression = expression.replace(/log/g, "Math.log10");
    expression = expression.replace(/√/g, "Math.sqrt");
    expression = expression.replace(/π/g, "Math.PI");

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
    turnValue,
    sine,
    cosine,
    tangent,
    ln,
    log,
    root,
    PI,
  }
}