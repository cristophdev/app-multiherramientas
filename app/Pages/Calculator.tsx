import { MouseEventHandler } from "react";
import CalculatorButton from "../Components/Buttons/CalculatorButton"
import PreviousSection from "../Components/Buttons/PreviousSection";
import Title from "../Components/Title";
import useCalculator from "../Logic/useCalculator"
import useHome from "../Logic/useHome";

export default function Calculator({handlePrevious}: {handlePrevious: MouseEventHandler}) {
  const { value, setValue, onDeleteLastElement, onEqual, onParentheses, onSetValue, handleValue } = useCalculator();

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
        <div className="w-[350px] grid grid-cols-4 grid-rows-5 mt-2 gap-2">
          <CalculatorButton value="C" func={() => { setValue("") }} />
          <CalculatorButton value="Del" func={() => { onDeleteLastElement() }} />
          <CalculatorButton value="( )" func={() => { onParentheses() }} />
          <CalculatorButton value="÷" func={() => { onSetValue("/") }} />
          <CalculatorButton value="7" func={() => { onSetValue("7") }} />
          <CalculatorButton value="8" func={() => { onSetValue("8") }} />
          <CalculatorButton value="9" func={() => { onSetValue("9") }} />
          <CalculatorButton value="×" func={() => { onSetValue("*") }} />
          <CalculatorButton value="4" func={() => { onSetValue("4") }} />
          <CalculatorButton value="5" func={() => { onSetValue("5") }} />
          <CalculatorButton value="6" func={() => { onSetValue("6") }} />
          <CalculatorButton value="-" func={() => { onSetValue("-") }} />
          <CalculatorButton value="1" func={() => { onSetValue("1") }} />
          <CalculatorButton value="2" func={() => { onSetValue("2") }} />
          <CalculatorButton value="3" func={() => { onSetValue("3") }} />
          <CalculatorButton value="+" func={() => { onSetValue("+") }} />
          <CalculatorButton value="+/-" func={() => { }} />
          <CalculatorButton value="0" func={() => { onSetValue("0") }} />
          <CalculatorButton value="." func={() => { onSetValue(".") }} />
          <CalculatorButton value="=" func={() => { onEqual() }} />

        </div>
      </section>
    </>
  )
}