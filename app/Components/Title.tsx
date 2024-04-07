export default function Title({title}: {title: string}) {
  return (
    <h1 className="text-3xl w-[200px] font-semibold text-center md:text-4xl md:w-[300px] mt-1">
      {title}
    </h1>
  )
}