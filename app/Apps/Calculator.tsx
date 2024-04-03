import CalculatorButton from "../Components/Buttons/CalculatorButton"
import Title from "../Components/Title";
import useCalculator from "../Logic/useCalculator"

export default function Calculator() {
  const { value, setValue, onDeleteLastElement, onEqual, onParentheses, onSetValue, handleValue } = useCalculator();

  return (
    <>
      <Title title="Calculadora" />
      <section className="text-3xl font-semibold mt-3">
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
        <div className="w-[364px] grid grid-cols-4 grid-rows-5 mt-2 gap-2">
          <CalculatorButton value="Clear" func={() => { setValue("") }} />
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