
interface Props {
  onSearch: (value: string) => void;
  onSortByName: () => void;
  onSortByDate: () => void;
  onSortByImport: () => void;
  search: string;
}

function BudgetControls({onSearch, onSortByName, onSortByDate, onSortByImport, search}: Props) {
  return (
    <div>
        <input type="text" value={search} onChange={(e) => onSearch(e.target.value)} placeholder="Search budget"/>
        <button type="button" onClick={onSortByName}>Name</button>
        <button type="button" onClick={onSortByDate}>Date</button>
        <button type="button" onClick={onSortByImport}>Import</button>
    </div>
        
  )
}

export default BudgetControls