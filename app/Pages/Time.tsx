import Form from "../Components/Form";
import { Time as TimeType } from "../Types/Types";
import useForm from "../Logic/useForm";
import Title from "../Components/Title";
import { MouseEventHandler } from "react";
import PreviousSection from "../Components/Buttons/PreviousSection";

const time: TimeType = {
  Segundos: 0.000277777777777777,
  Minutos: 0.01666666666666666,
  Horas: 1,
  Días: 24,
  Semanas: 168,
  Meses: 730,
  Años: 8760
}

export default function Time({handlePrevious}: {handlePrevious: MouseEventHandler}) {
  const { fromOption,
    toOption,
    inputValue,
    setInputValue,
    result,
    handleToChange,
    handleFromChange,
    onSubmit, } = useForm(time);


  return (
    <>
      <PreviousSection func={handlePrevious} />
      <Title title="Convertir tiempo" />
      <section>
        <Form
          id="time"
          functionality={time}
          onSubmitFunc={onSubmit}
          selectTopValue={fromOption}
          onChangeTop={handleFromChange}
          selectBottomValue={toOption}
          onChangeBottom={handleToChange}
          inputValueHandler={inputValue}
          setInputValueHandler={setInputValue}
          resultForm={result}
          optionValue="Segundos, Minutos, Horas..."
        />
      </section>
    </>
  )
}