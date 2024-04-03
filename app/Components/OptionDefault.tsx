export default function OptionDefault({ value }: { value: string }) {
  return (
    <option value="" disabled selected hidden>{value}</option>
  )
}