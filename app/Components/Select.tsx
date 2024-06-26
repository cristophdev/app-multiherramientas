import { ChangeEventHandler, ReactElement } from "react";

export default function Select({ selectValue, onChangeSelect, options }: { selectValue: string, onChangeSelect: ChangeEventHandler, options: ReactElement }) {
  return (
    <select
      title="select"
      name="select"
      value={selectValue}
      onChange={onChangeSelect}
      className="block bg-white rounded-md w-[200px] h-[35px] font-medium md:w-[300px]"
    >
      {options}
    </select>
  )
}