export default function Option({
  value,
  valueOption
}: {
  value: string,
  valueOption: number | string
}) {
  return (
    <option
      value={valueOption}
      className="bg-white"
    >{value}</option>
  )
}