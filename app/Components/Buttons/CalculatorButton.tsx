import { MouseEventHandler } from "react"

export default function CalculatorButton({ value, func }: { value: string, func: MouseEventHandler }) {
  return (
    <button onClick={func} className="w-20 h-20 bg-white rounded-md" >
      {value}
    </button>
  )
}