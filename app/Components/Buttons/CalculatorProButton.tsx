import { MouseEventHandler } from "react"

export default function CalculatorProButton({ value, func }: { value: string, func: MouseEventHandler }) {
  return (
    <button onClick={func} className="w-14 h-10 md:w-14 md:h-14 bg-white rounded-md">
      {value}
    </button>
  )
}