
interface Props {
  label: string;
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onInfoClick: () => void;
}

function QuantityInput( {label, value, onIncrement, onDecrement, onInfoClick }: Props) {
  return (
    <div className="flex items-center gap-2 mb-2">
      <button type="button" onClick={onInfoClick}
        className="w-6 h-6 rounded-full border text-xs text-[#571E27]">
      i
      </button>
      <span className="w-24">{label}</span>
      <button onClick={onDecrement} className="px-2 py-0 bg-white rounded border">-</button>
      <span className="w-6 text-center">{value}</span>
      <button onClick={onIncrement} className="px-2 py-0 bg-white rounded border">+</button>
    </div>
  )
}

export default QuantityInput