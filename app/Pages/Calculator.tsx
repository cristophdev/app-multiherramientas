import { MouseEventHandler } from "react";
import CalculatorButton from "../Components/Buttons/CalculatorButton"
import PreviousSection from "../Components/Buttons/PreviousSection";
import Title from "../Components/Title";
import useCalculator from "../Logic/useCalculator";

export default function Calculator({ handlePrevious }: { handlePrevious: MouseEventHandler }) {
  const { value, setValue, onDeleteLastElement, onEqual, onParentheses, onSetValue, handleValue } = useCalculator();

  const buttons = [
    { val: "C", func: () => setValue("") },
    { val: "Del", func: () => onDeleteLastElement() },
    { val: "( )", func: () => onParentheses() },
    { val: "÷", func: () => onSetValue("/") },
    { val: "7", func: () => onSetValue("7") },
    { val: "8", func: () => onSetValue("8") },
    { val: "9", func: () => onSetValue("9") },
    { val: "×", func: () => onSetValue("*") },
    { val: "4", func: () => onSetValue("4") },
    { val: "5", func: () => onSetValue("5") },
    { val: "6", func: () => onSetValue("6") },
    { val: "-", func: () => onSetValue("-") },
    { val: "1", func: () => onSetValue("1") },
    { val: "2", func: () => onSetValue("2") },
    { val: "3", func: () => onSetValue("3") },
    { val: "+", func: () => onSetValue("+") },
    { val: "+/-", func: () => { } },
    { val: "0", func: () => onSetValue("0") },
    { val: ".", func: () => onSetValue(".") },
    { val: "=", func: () => onEqual() }
  ];


  return (
    <>
      <PreviousSection func={handlePrevious} />
      <Title title="Calculadora" />
      <section className="text-2xl font-semibold mt-5 md:text-3xl">
        <form>
          <input
            title="display"
            type="text"
            value={value}
            onChange={handleValue}
            name="display"
            className="w-[250px] h-10 px-2 rounded-md md:w-[350px] md:h-16"
            readOnly
          />
        </form>
        <div className="w-[250px] md:w-[350px] grid grid-cols-4 grid-rows-5 mt-2 gap-2">
          {buttons.map((btn) => {
            return (
              <CalculatorButton key={btn.val} value={btn.val} func={btn.func} />
            )
          })}
        </div>
      </section>
    </>
  )
}