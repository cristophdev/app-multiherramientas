import { ChangeEventHandler, MouseEventHandler, SetStateAction, Dispatch } from "react";
import Select from "./Select";
import OptionDefault from "./OptionDefault";
import Option from "./Option";
import { Functionality as FunctionalityType } from "../Types/Types";

export default function Form({
  id,
  functionality,
  onSubmitFunc,
  selectTopValue,
  onChangeTop,
  selectBottomValue,
  onChangeBottom,
  inputValueHandler,
  setInputValueHandler,
  resultForm,
  optionValue
}: {
  id: string,
  functionality: FunctionalityType,
  onSubmitFunc: MouseEventHandler<HTMLButtonElement>,
  selectTopValue: string,
  onChangeTop: ChangeEventHandler,
  selectBottomValue: string,
  onChangeBottom: ChangeEventHandler,
  inputValueHandler: string,
  setInputValueHandler: Dispatch<SetStateAction<string>>,
  resultForm: string,
  optionValue: string
}) {

  return (
    <form id={id} className="max-w-[700px] mt-20 flex flex-col items-center gap-y-5">
      <section className="w-full flex flex-row justify-between gap-5">
        <div className="flex justify-evenly items-center gap-3">
          <label className="font-normal text-3xl">De:</label>
          <Select
            selectValue={selectTopValue}
            onChangeSelect={onChangeTop}
            options={
              <>
                <OptionDefault value={optionValue} />
                {Object.keys(functionality).map((key) => (
                  <Option key={key} valueOption={functionality[key]} value={key} />
                ))}
              </>
            }
          />
        </div>
        <div className="flex justify-evenly items-center gap-3">
          <label className="font-normal text-3xl">A:</label>
          <Select
            selectValue={selectBottomValue}
            onChangeSelect={onChangeBottom}
            options={
              <>
                <OptionDefault value={optionValue} />
                {Object.keys(functionality).map((key) => (
                  <Option key={key} valueOption={functionality[key]} value={key} />
                ))}
              </>
            }
          />
        </div>
      </section>
      <input
       title="input"
        className="mt-10 h-10 text-xl font-normal w-[350px] rounded-md"
        type="number"
        id="input-value"
        value={inputValueHandler}
        onChange={(e) => setInputValueHandler(e.target.value)}
        required
      />
      <div className="relative inline-flex  group">
        <button
          className="bg-white rounded-md w-[100px] h-8 z-20"
          onClick={onSubmitFunc}
        >Convertir</button>
        <div
          className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-pink-400 to-sky-300 rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
        </div>
      </div>
      <h3 className="text-2xl w-[420px] text-center">Tu resultado es: {resultForm}</h3>
    </form>
  )
}