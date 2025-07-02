import { useNavigate } from "react-router-dom";
import type { Budget } from "../../types/Types";
import ButtonNavigator from "../atoms/ButtonNavigator";

interface Props {
  budgets: Budget[];
}

function CurrentCards({ budgets }: Props) {
  const navigate = useNavigate()

  const handleOnClick = () => {
        navigate("/services");
  }

  if (budgets.length === 0) 
    return (
    <div className="text-center">
      <p className="mt-20 mb-7 sm:mb-10 text-gray-400/60 text-2xl">No budgets yet</p>
      <ButtonNavigator onClick={handleOnClick} 
      textSize= {'text-lg'}
      text={'Get a Budget'} />
    </div>
    )

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