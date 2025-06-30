import { useBudgetContext } from "../../context/BudgetContext";

function CurrentCards() {
  const { budgets } = useBudgetContext();

  if (budgets.length === 0) return <p className="text-center mt-50">No budgets yet.</p>;

  return (
    <div className="p-6 space-y-4 max-w-5xl mx-auto">
      {budgets.map(b => (
        <div key={b.id} className="border rounded-lg px-10 py-4 flex flex-col items-center justify-between bg-white shadow sm:flex-row sm:w-full sm:p-4 sm:gap-x-40">
          <div className= "mb-4 sm:mb-0 flex flex-col items-center sm:items-start">
            <h2 className="font-semibold text-2xl text-[#571E27]">{b.name}</h2>
            <p>{b.email}</p>
            <p>{b.phone}</p>
          </div>
          <div className=" mb-4 md:mb-0">
            <p className="mb-2 font-semibold" >Services:</p>
            <ul className="list-disc list-inside text-sm space-y-1">
              {b.services.map((s, index) => (
                <li key={index}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-bold text-[#571E27] text-xl">{b.total} €</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CurrentCards;