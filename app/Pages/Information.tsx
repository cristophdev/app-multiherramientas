import { MouseEventHandler } from "react";
import PreviousSection from "../Components/Buttons/PreviousSection";
import Form from "../Components/Form";
import Title from "../Components/Title";
import useForm from "../Logic/useForm";
import { Information as InformationType } from "../Types/Types";

const information: InformationType = {
  Bytes: 1,
  Kilobytes: 1024,
  Megabytes: 1024 * 1024,
  Gigabytes: 1024 * 1024 * 1024,
  Terabytes: 1024 * 1024 * 1024 * 1024,
};

export default function Information({handlePrevious}: {handlePrevious: MouseEventHandler}) {
  const { fromOption,
    toOption,
    inputValue,
    setInputValue,
    result,
    handleToChange,
    handleFromChange,
    onSubmit } = useForm(information);

  return (
    <>
      <PreviousSection func={handlePrevious} />
      <Title title="Convertir unidades de datos" />
      <section>
        <Form
          id="information"
          functionality={information}
          onSubmitFunc={onSubmit}
          selectTopValue={fromOption}
          onChangeTop={handleFromChange}
          selectBottomValue={toOption}
          onChangeBottom={handleToChange}
          inputValueHandler={inputValue}
          setInputValueHandler={setInputValue}
          resultForm={result}
          optionValue="Bytes, Kilobytes, Megabytes..."
        />
      </section>
    </>
  )
}