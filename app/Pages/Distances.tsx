import { MouseEventHandler } from "react";
import Form from "../Components/Form";
import Title from "../Components/Title";
import useForm from "../Logic/useForm";
import { Distances as DistancesType } from "../Types/Types";
import PreviousSection from "../Components/Buttons/PreviousSection";

const distances: DistancesType = {
  Milímetros: 0.001,
  Centímetros: 0.01,
  Decímetros: 0.1,
  Metros: 1,
  Decámetros: 10,
  Hectómetros: 100,
  Kilómetros: 1000,
}

export default function Distances({handlePrevious}: {handlePrevious: MouseEventHandler}) {
  const { fromOption,
    toOption,
    inputValue,
    setInputValue,
    result,
    handleToChange,
    handleFromChange,
    onSubmit } = useForm(distances);

  return (
    <>
      <PreviousSection func={handlePrevious} />
      <Title title="Convertir distancias" />
      <section>
        <Form
          id="distances"
          functionality={distances}
          onSubmitFunc={onSubmit}
          selectTopValue={fromOption}
          onChangeTop={handleFromChange}
          selectBottomValue={toOption}
          onChangeBottom={handleToChange}
          inputValueHandler={inputValue}
          setInputValueHandler={setInputValue}
          resultForm={result}
          optionValue="Metros, Centimetros, Decimetros..."
        />
      </section>
    </>
  )
}