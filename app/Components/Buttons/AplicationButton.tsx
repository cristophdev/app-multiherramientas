import { MouseEventHandler } from "react"

export default function AplicationButton({ aplication, setApp }: { aplication: string, setApp: MouseEventHandler }) {
  return (
    <button 
      className="block font-medium w-[230px] h-8 rounded-md pl-4 text-left hover:bg-white hover:bg-opacity-25 xl:w-[260px]"
      onClick={setApp}
    >
      {aplication}
    </button>
  )
}