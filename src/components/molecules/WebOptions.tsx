import QuantityInput from "../atoms/QuantityInput"

interface Props {
  pages: number;
  languages: number;
  onPagesChange: (newValue: number) => void;
  onLanguagesChange: (newValue: number) => void;
}

function WebOptions({pages, languages, onPagesChange, onLanguagesChange}: Props) {
  return (
    <div className="mt-4 p-4 border rounded-md bg-rose-50">
        <h2>Customize your web</h2>
        <QuantityInput
            label='Pages'
            value= {pages}
            onIncrement={() => onPagesChange(pages + 1)}
            onDecrement={() => onPagesChange(Math.max(1, pages - 1))}
        />

        <QuantityInput
            label='Languages'
            value= {languages}
            onIncrement={() => onLanguagesChange(pages + 1)}
            onDecrement={() => onLanguagesChange(Math.max(1, pages - 1))}
        />
    </div>
   
  )
}

export default WebOptions