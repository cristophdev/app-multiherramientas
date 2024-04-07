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
    <form id={id} className="w-[300px] mt-12 flex flex-col items-center gap-y-5 md:w-[400px]">
      <section className="w-[260px] flex flex-col gap-5 md:w-[370px]">
        <div className="flex justify-between items-center">
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
        <div className="flex justify-between items-center">
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
        className="mt-10 h-10 px-2 text-xl font-normal w-[210px] rounded-md md:w-[300px] md:h-12"
        type="number"
        id="input-value"
        value={inputValueHandler}
        onChange={(e) => setInputValueHandler(e.target.value)}
        required
      />
      <div className="relative inline-flex group">
        <button
          type="button"
          className="bg-white rounded-md w-[100px] h-[38px] z-20 font-bold md:w-[120px] md:h-[42px]"
          onClick={onSubmitFunc}
        >Convertir</button>
        <div
          className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-pink-400 to-sky-300 rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
        </div>
      </div>
      <h3 className="text-2xl mt-5 w-[270px] text-center md:w-[400px]">{resultForm}</h3>
    </form>
  )
}