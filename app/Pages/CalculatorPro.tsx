import useCalculator from "../Logic/useCalculator"
import CalculatorProButton from "../Components/Buttons/CalculatorProButton";
import Title from "../Components/Title";
import { MouseEventHandler } from "react";
import PreviousSection from "../Components/Buttons/PreviousSection";

export default function CalculatorPro({ handlePrevious }: { handlePrevious: MouseEventHandler }) {
  const {
    value,
    setValue,
    onDeleteLastElement,
    onParentheses,
    onSetValue,
    handleValue,
    turnValue,
    onEval,
    sine,
    cosine,
    tangent,
    ln,
    log,
    root,
    PI,
  } = useCalculator();

  const advancedButtons = [
    { val: "SIN", func: () => sine() },
    { val: "COS", func: () => cosine() },
    { val: "TAN", func: () => tangent() },
    { val: "**", func: () => onSetValue("**") },
    { val: "**2", func: () => onSetValue("**2") },
    { val: "ln", func: () => { ln() } },
    { val: "log", func: () => { log() } },
    { val: "√", func: () => { root() } },
    { val: "π", func: () => { PI() } },
  ]

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
    { val: "+/-", func: () => turnValue() },
    { val: "0", func: () => onSetValue("0") },
    { val: ".", func: () => onSetValue(".") },
    { val: "=", func: () => onEval(value) }
  ];

  return (
    <>
      <PreviousSection func={handlePrevious} />
      <Title title="Calculadora Avanzada" />
      <section className="text-xl mt-5 font-semibold">
        <form>
          <input
            title="display"
            type="text"
            value={value}
            onChange={handleValue}
            name="display"
            className="w-[450px] h-16 rounded-md px-5 text-right"
            readOnly
          />
        </form>
        <div className="flex flex-row gap-4 mt-2">
          <div className="grid grid-cols-3 grid-rows-4 gap-2 h-[70%]">
            {advancedButtons.map((btn) => {
              return (
                <CalculatorProButton key={btn.val} value={btn.val} func={btn.func} />
              )
            })}
          </div>
          <div className="grid grid-cols-4 gap-2">
            {buttons.map((btn) => {
              return (
                <CalculatorProButton key={btn.val} value={btn.val} func={btn.func} />
              )
            })}
          </div>
        </div>
        <div className="w-[400px] text-center pt-5 italic opacity-60">
              <p>Nota: Esta calculadora funciona en la modalidad de grados</p>
            </div>
      </section >
    </>
  )
}