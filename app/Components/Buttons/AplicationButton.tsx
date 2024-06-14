import CalculatorSVG from "@/app/SVG/CalculatorSVG"
import Image from "next"
import { MouseEventHandler } from "react"

export default function AplicationButton({ aplication, setApp, svg }: { aplication: string, setApp: MouseEventHandler, svg: JSX.Element }) {
  return (
    <button
      className="font-medium w-[230px] h-8 rounded-md pl-4 text-left hover:bg-white hover:bg-opacity-25 xl:w-[260px] flex flex-row items-center gap-2"
      onClick={setApp}
    >
      <span className="w-[25px] h-[25px]">
        {svg}
      </span>
      {aplication}
    </button>
  )
}