import Form from "../Components/Form";
import Title from "../Components/Title";
import useForm from "../Logic/useForm";
import { Information as InformationType } from "../Types/Types";

const information: InformationType = {
  Byte: 1,
  Kilobyte: 1024,
  Megabyte: 1024 * 1024,
  Gigabyte: 1024 * 1024 * 1024,
  Terabyte: 1024 * 1024 * 1024 * 1024,
};

export default function Information() {
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