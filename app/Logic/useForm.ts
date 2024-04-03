import { useState, ChangeEventHandler, MouseEventHandler } from "react";
import { Functionality as FunctionalityType } from "../Types/Types";
import bigDecimal from "js-big-decimal";

export default function useForm(functionality: FunctionalityType) {
  const [fromOption, setFromOption] = useState<string>("");
  const [toOption, setToOption] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");
  const [result, setResult] = useState<string>("")

  const handleFromChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setFromOption(e.target.value);
  }

  const handleToChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setToOption(e.target.value);
  }

  const onSubmit: MouseEventHandler = (e) => {
    e.preventDefault()

    //Logic
    const inputVal = Number(inputValue);
    const fromVal = Number(fromOption);
    const toVal = Number(toOption);

    if (!inputVal) {
      setResult("Ingresa tu numero en el campo!")
    } else if (!fromVal) {
      setResult("Selecciona lo que quieras convertir!")
    }  else if (!toVal) {
      setResult("Selecciona a lo que quieras convertir!")
    } else {
      const result = (fromVal * inputVal) / toVal;
      const resultRounded = new bigDecimal(result);
      const resultString = String(resultRounded.round(10).getValue());

      for (let prop in functionality) {
        if (functionality[prop] === Number(toVal)) {
          setResult(`${resultString} ${prop}`);
        }
      }
    }
  }

  const onSubmitGrades: MouseEventHandler = (e) => {
    e.preventDefault()

    //logic
    const inputVal = Number(inputValue);
    const fromVal = fromOption;
    const toVal = toOption;

    if (!fromVal) {
      setResult("Selecciona tu temperatura!");
    } else if (!toVal) {
      setResult("Selecciona la temperatura a la cual quieras convertir!");
    } else if (!inputVal) {
      setResult("Ingresa tu temperatura!")
    } else if (
      (fromVal === "Celsius" && toVal === "Celsius") ||
      (fromVal === "Fahrenheit" && toVal === "Fahrenheit") ||
      (fromVal === "Kelvin" && toVal === "Kelvin")
    ) {
      setResult(`${inputVal}° ${toVal}`)
    } else if (fromVal === "Celsius" && toVal === "Fahrenheit") {
      setResult(`${String(inputVal * (9/5) + 32)}° ${toVal}`);
    } else if (fromVal === "Celsius" && toVal === "Kelvin") {
      setResult(`${String(inputVal + 273.15)}° ${toVal}`);
    } else if (fromVal === "Fahrenheit" && toVal === "Celsius") {
      setResult(`${String((inputVal - 32) * 1.8)}° ${toVal}`);
    } else if (fromVal === "Fahrenheit" && toVal === "Kelvin") {
      setResult(`${String(((inputVal + 459.67) * (5/9)).toFixed(2))}° ${toVal}`);
    } else if (fromVal === "Kelvin" && toVal === "Celsius") {
      setResult(`${String(inputVal - 273.15)}° ${toVal}`);
    } else if (fromVal === "Kelvin" && toVal === "Fahrenheit") {
      setResult(`${String((inputVal * 1.8 - 459.67).toFixed(2))}° ${toVal}`);
    }
  }

  return {
    fromOption, setFromOption,
    toOption, setToOption,
    inputValue, setInputValue,
    result, setResult,
    handleToChange,
    handleFromChange,
    onSubmit,
    onSubmitGrades,
  }
}