import { useState, ChangeEventHandler } from "react"

export default function useCalculator() {
  const [value, setValue] = useState<string>("")

  const onSetValue = (e: string) => {
    setValue(value.concat(e))
  }

  const onEqual = () => {
    try {
      setValue(String(eval(value)));
    } catch (error) {
      setValue("Syntax Error")
    }
  }

  const onDeleteLastElement = () => {
    if (String(value).length > 0) {
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
    handleValue
  }
}