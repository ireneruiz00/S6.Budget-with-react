import QuantityInput from "../atoms/QuantityInput"
import { useState } from "react";

interface Props {
  pages: number;
  languages: number;
  onPagesChange: (newValue: number) => void;
  onLanguagesChange: (newValue: number) => void;
}

function WebOptions({pages, languages, onPagesChange, onLanguagesChange}: Props) {
  const [showPagesInfo, setShowPagesInfo] = useState(false);
  const [showLanguagesInfo, setShowLanguagesInfo] = useState(false);
  return (
    <div className="mt-4 p-4 border rounded-md bg-rose-50">
        <h2 className="mb-3 text-lg">Customize your web</h2>
        <QuantityInput
            label='Pages'
            value= {pages}
            onIncrement={() => onPagesChange(pages + 1)}
            onDecrement={() => onPagesChange(Math.max(1, pages - 1))}
            onInfoClick={() => setShowPagesInfo(true)}
        />

        <QuantityInput
            label='Languages'
            value= {languages}
            onIncrement={() => onLanguagesChange(languages + 1)}
            onDecrement={() => onLanguagesChange(Math.max(1, languages - 1))}
            onInfoClick={() => setShowLanguagesInfo(true)}
        />
        {showPagesInfo && (
        <div className="fixed inset-0 bg-rose-600/60 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-md max-w-sm w-full text-center">
            <h3 className="text-lg font-bold mb-2">Number of pages</h3>
            <p className="mb-4 text-sm">Add the pages needed for your project. The price of every page is 30€.</p>
            <button
              onClick={() => setShowPagesInfo(false)}
              className="bg-rose-400 text-white px-4 py-2 rounded hover:bg-rose-500"
            >Got it
            </button>
          </div>
        </div>
        )}
        {showLanguagesInfo && (
        <div className="fixed inset-0 bg-rose-600/60 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-md max-w-sm w-full text-center">
            <h3 className="text-lg font-bold mb-2">Number of languages</h3>
            <p className="mb-4 text-sm">Add the languages that you want for your project. The price of every language is 30€.</p>
            <button
              onClick={() => setShowLanguagesInfo(false)}
              className="bg-rose-400 text-white px-4 py-2 rounded hover:bg-rose-500"
            >Got it
            </button>
          </div>
        </div>
      )}
    </div>
   
  )
}

export default WebOptions