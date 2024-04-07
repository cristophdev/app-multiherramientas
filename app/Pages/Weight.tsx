import { MouseEventHandler } from "react";
import PreviousSection from "../Components/Buttons/PreviousSection";
import Form from "../Components/Form"
import Title from "../Components/Title";
import useForm from "../Logic/useForm"
import { Weights as WeightsType } from "../Types/Types"

const weight: WeightsType = {
  Miligramo: 0.001,
  Centigramo: 0.01,
  Decigramo: 0.1,
  Gramo: 1,
  Decagramo: 10,
  Hectogramo: 100,
  Kilogramo: 1000
}

export default function Weight({handlePrevious}: {handlePrevious: MouseEventHandler}) {
  const { fromOption,
    toOption,
    inputValue,
    setInputValue,
    result,
    handleToChange,
    handleFromChange,
    onSubmit, } = useForm(weight);

  return (
    <>
      <PreviousSection func={handlePrevious} />
      <Title title="Convertir masas" />
      <section>
        <Form
          id="weights"
          functionality={weight}
          onSubmitFunc={onSubmit}
          selectTopValue={fromOption}
          onChangeTop={handleFromChange}
          selectBottomValue={toOption}
          onChangeBottom={handleToChange}
          inputValueHandler={inputValue}
          setInputValueHandler={setInputValue}
          resultForm={result}
          optionValue="Gramos, Miligramos, Kilogramos..."
        />
      </section>
    </>
  )
}