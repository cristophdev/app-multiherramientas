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
    replaceFromEnd,
    strWithoutOps,
    onEval,
    sine,
    cosine, 
    tangent

  } = useCalculator();

  /*
  square
  potentiation
  sin, cos, tan
  ln, log10
  square root, roots
  pi
  fractions, mixed fractions
  */

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


  const advancedButtons = [
    { val: "SIN", func: () => sine() },
    { val: "COS", func: () => cosine() },
    { val: "TAN", func: () => tangent() },
    { val: "**", func: () => onSetValue("**") },
    { val: "**2", func: () => onSetValue("**2") },
    { val: "ln", func: () => { } },
    { val: "log10", func: () => { } },
    { val: "root", func: () => { } },
    { val: "rootP", func: () => { } },
    { val: "n/n", func: () => { } },
    { val: "n n/n", func: () => { } },
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
      {/* <Title title="Pronto..." /> */}
      <Title title="Calculadora Avanzada" />
      <section className="text-xl mt-5 font-semibold">
        <form>
          <input
            title="display"
            type="text"
            value={value}
            onChange={handleValue}
            name="display"
            className="w-[450px] h-16 rounded-md"
            readOnly
          />
        </form>
        <div className="flex flex-row gap-4 mt-2">
          <div className="grid grid-cols-3 grid-rows-4 gap-2 h-[80%]">
            {/* buttons for advanced features */}
            {advancedButtons.map((btn) => {
              return (
                <CalculatorProButton key={btn.val} value={btn.val} func={btn.func} />
              )
            })}
          </div>
          <div className="grid grid-cols-4 gap-2">
            {/* buttons for normal features */}
            {buttons.map((btn) => {
              return (
                <CalculatorProButton key={btn.val} value={btn.val} func={btn.func} />
              )
            })}
          </div>
        </div>
      </section >
    </>
  )
}