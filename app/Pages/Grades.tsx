import { MouseEventHandler } from "react";
import Form from "../Components/Form";
import Title from "../Components/Title";
import useForm from "../Logic/useForm";
import { Grades as GradesType } from "../Types/Types";
import PreviousSection from "../Components/Buttons/PreviousSection";

const grades: GradesType = {
  Celsius: "Celsius",
  Fahrenheit: "Fahrenheit",
  Kelvin: "Kelvin"
}

export default function Grades({handlePrevious}: {handlePrevious: MouseEventHandler}) {
  const { fromOption,
    toOption,
    inputValue,
    setInputValue,
    result,
    handleToChange,
    handleFromChange,
    onSubmitGrades } = useForm(grades);

  return (
    <>
      <PreviousSection func={handlePrevious} />
      <Title title="Convertir grados" />
      <section>
        <Form
          id="grades"
          functionality={grades}
          onSubmitFunc={onSubmitGrades}
          selectTopValue={fromOption}
          onChangeTop={handleFromChange}
          selectBottomValue={toOption}
          onChangeBottom={handleToChange}
          inputValueHandler={inputValue}
          setInputValueHandler={setInputValue}
          resultForm={result}
          optionValue="Celcius, Fahrenheit, Kelvin"
        />
      </section>
    </>
  )
}