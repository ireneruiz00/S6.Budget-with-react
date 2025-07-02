
interface Props {
  onSearch: (value: string) => void;
  onSortByName: () => void;
  onSortByDate: () => void;
  onSortByImport: () => void;
  search: string;
  sortType: "name" | "date" | "import" | ""
}

function BudgetControls({onSearch, onSortByName, onSortByDate, onSortByImport, search, sortType}: Props) {
  const baseClassBtn = "hover:text-rose-500"
  const activeClassBtn = 'active: overline text-rose-700/70'
  return (
    <div className="flex flex-col sm:flex-row mt-6 px-6 items-center justify-between gap-6">
        <input type="text" value={search} onChange={(e) => onSearch(e.target.value)} placeholder="Search..."
        className="border border-gray-300 p-2 rounded-md w-full md:w-1/3"/>
        <div className="flex gap-5">
            <button type="button" onClick={onSortByName} className={`${baseClassBtn} ${sortType === "name" ? activeClassBtn : ""}`}>Name</button>
            <button type="button" onClick={onSortByDate} className={`${baseClassBtn} ${sortType === "date" ? activeClassBtn : ""}`}>Date</button>
            <button type="button" onClick={onSortByImport} className={`${baseClassBtn} ${sortType === "import" ? activeClassBtn : ""}`}>Import</button>
        </div>
    </div>
        
  )
}

export default BudgetControls