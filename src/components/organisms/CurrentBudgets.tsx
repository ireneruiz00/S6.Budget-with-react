import BudgetControls from "../molecules/BudgetControls"
import CurrentCards from "../molecules/CurrentCards"
import { useBudgetContext } from "../../context/BudgetContext";
import { useState } from "react";


function CurrentBudgets() {
  const { budgets } = useBudgetContext();

  const [search, setSearch] = useState("");
  const [filteredBudgets, setFilteredBudgets] = useState([...budgets])
  const [sortType, setSortType] = useState<"name" | "date" | "import" | "">("")

   const handleSearch = (value: string) => {
    setSearch(value);
    const results = budgets.filter(b =>
      b.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredBudgets(results);
  }

  const handleSortByName = () => {
    const sorted = [...filteredBudgets].sort((a, b) => 
      a.name.localeCompare(b.name))
    setFilteredBudgets(sorted)
    setSortType('name')
  }

  const handleSortByDate = () => {
    const sorted = [...filteredBudgets].sort((a, b) =>
      new Date(b.date).getTime() - new Date(a.date).getTime())
    setFilteredBudgets(sorted)
    setSortType('date')
  }

  const handleSortByImport = () => {
    const sorted = [...filteredBudgets].sort((a, b) =>
    b.total - a.total)
    setFilteredBudgets(sorted)
    setSortType('import')
  }

  return (
    <div>
    <h1 className="mt-6 text-3xl ml-6 text-[#571E27] ">Budgets on course:</h1>
    <BudgetControls
        onSearch={handleSearch}
        onSortByName={handleSortByName}
        onSortByDate={handleSortByDate}
        onSortByImport={handleSortByImport}
        search={search}
        sortType={sortType}/>
    <CurrentCards budgets={filteredBudgets}/>
    </div>
  )
}

export default CurrentBudgets