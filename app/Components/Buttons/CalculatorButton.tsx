import { MouseEventHandler } from "react"

export default function CalculatorButton({ value, func }: { value: string, func: MouseEventHandler }) {
  return (
    <button
      onClick={func}
      className="w-14 h-14 bg-white rounded-md md:w-20 md:h-20"
    >
      {value}
    </button>
  )
}