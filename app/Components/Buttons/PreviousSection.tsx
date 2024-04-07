import BackSquare from "@/app/SVG/BackSquare";
import { MouseEventHandler } from "react";

export default function PreviousSection({ func }: {func: MouseEventHandler}) {
  return (
    <button
      title="Home"
      type="button"
      className="w-[50px] h-[50px] absolute left-1 top-0 md:w-[60px] md:h-[60px]"
      onClick={func}
    >
      <BackSquare />
    </button>
  )
}