
interface Props {
  label: string;
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

function QuantityInput( {label, value, onIncrement, onDecrement }: Props) {
  return (
    <div className="flex items-center gap-2 mb-2">
      <span className="w-24">{label}</span>
      <button onClick={onDecrement} className="px-2 py-1 bg-gray-200 rounded">-</button>
      <span className="w-6 text-center">{value}</span>
      <button onClick={onIncrement} className="px-2 py-1 bg-gray-200 rounded">+</button>
    </div>
  )
}

export default QuantityInput