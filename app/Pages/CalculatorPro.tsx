import useCalculator from "../Logic/useCalculator"
import CalculatorProButton from "../Components/Buttons/CalculatorProButton";
import Title from "../Components/Title";
import { MouseEventHandler } from "react";
import PreviousSection from "../Components/Buttons/PreviousSection";

export default function CalculatorPro({ handlePrevious }: { handlePrevious: MouseEventHandler }) {
  const { value, setValue, onDeleteLastElement, onEqual, onParentheses, onSetValue, handleValue } = useCalculator();

  const onSquare = () => {

  }

  const onPotentiation = () => {

  }

  const onNegative = () => {

  }

  const onSqrt = () => {

  }

  const onSine = () => {

  }

  const onCosine = () => {

  }

  const onTangent = () => {

  }

  const onPI = () => {

  }

  const onLogNatural = () => {

  }

  const onLogBaseTen = () => {

  }

  const onFraction = () => {

  }

  const onNumberMix = () => {

  }

  const onAns = () => {

  }

  return (
    <>
      <PreviousSection func={handlePrevious} />
      <Title title="Pronto..." />
      {/* <Title title="Calculadora Avanzada" />
      <section className="text-xl font-semibold">
        <form>
          <input
            title="display"
            type="text"
            value={value}
            onChange={handleValue}
            name="display"
            className="w-[360px] h-20 rounded-md"
            readOnly
          />
        </form>
        <div className="flex flex-row gap-4">
          <aside className="flex flex-col gap-2">
            <button className="w-20 h-20 bg-white rounded-md">123</button>
            <button className="w-20 h-20 bg-white rounded-md">f(x)</button>
            <button className="w-20 h-20 bg-white rounded-md">ABC</button>
          </aside>
          <div className="grid grid-cols-4 grid-rows-4 gap-2">
            <CalculatorProButton value="^(2)" func={onSquare} />
            <CalculatorProButton value="^(n)" func={onPotentiation} />
            <CalculatorProButton value="^(-1)" func={onNegative} />
            <CalculatorProButton value="√n" func={onSqrt} />
            <CalculatorProButton value="sen" func={onSine} />
            <CalculatorProButton value="cos" func={onCosine} />
            <CalculatorProButton value="tg" func={onTangent} />
            <CalculatorProButton value="π" func={onPI} />
            <CalculatorProButton value="ln" func={onLogNatural} />
            <CalculatorProButton value="log10" func={onLogBaseTen} />
            <CalculatorProButton value="n/n" func={onFraction} />
            <CalculatorProButton value="n n/n" func={onNumberMix} />
            <CalculatorProButton value="ans" func={onAns} />
            <CalculatorProButton value="," func={() => { setValue(",") }} />
            <CalculatorProButton value="( )" func={() => onParentheses} />
          </div>
          <div className="grid grid-cols-4 gap-2">
            <CalculatorProButton value="7" func={() => onSetValue("7")} />
            <CalculatorProButton value="8" func={() => onSetValue("8")} />
            <CalculatorProButton value="9" func={() => onSetValue("9")} />
            <CalculatorProButton value="×" func={() => onSetValue("*")} />
            <CalculatorProButton value="4" func={() => onSetValue("4")} />
            <CalculatorProButton value="5" func={() => onSetValue("5")} />
            <CalculatorProButton value="6" func={() => onSetValue("6")} />
            <CalculatorProButton value="÷" func={() => onSetValue("/")} />
            <CalculatorProButton value="1" func={() => onSetValue("1")} />
            <CalculatorProButton value="2" func={() => onSetValue("2")} />
            <CalculatorProButton value="3" func={() => onSetValue("3")} />
            <CalculatorProButton value="-" func={() => onSetValue("-")} />
            <CalculatorProButton value="." func={() => onSetValue(".")} />
            <CalculatorProButton value="0" func={() => onSetValue("0")} />
            <CalculatorProButton value="=" func={() => onEqual()} />
            <CalculatorProButton value="+" func={() => onSetValue("+")} />
          </div>
        </div>
      </section > */}
    </ >
  )
}

//source: https://www.geogebra.org/scientific?lang=es