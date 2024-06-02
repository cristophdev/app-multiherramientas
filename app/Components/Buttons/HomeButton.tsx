import { MouseEventHandler } from "react";

export default function HomeButton({ section, setApp }: { section: string, setApp: MouseEventHandler }) {
  return (
    <button
      className="w-[200px] h-[50px] truncate rounded-md bg-white bg-opacity-50 transition-all ease-in-out hover:bg-opacity-100 hover:scale-105 text-xl p-2 font-medium md:w-[210px] md:h-[100px] xl:w-[250px]"
      onClick={setApp}
    >
      {section}
    </button>
  )
} 