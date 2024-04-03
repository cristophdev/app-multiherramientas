import { MouseEventHandler } from "react";

export default function HomeButton({ section, setApp }: { section: string, setApp: MouseEventHandler }) {
  return (
    <button
      className="w-[150px] h-[100px] rounded-md bg-white bg-opacity-50 transition-all ease-in-out hover:bg-opacity-100 hover:scale-105 text-xl p-2 font-medium"
      onClick={setApp}
    >
      {section}
    </button>
  )
} 