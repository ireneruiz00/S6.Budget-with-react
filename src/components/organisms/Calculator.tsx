import CardsServices from '../molecules/CardsServices'
import { useSelectedServices } from '../../hooks/useSelectedServices';
import { services } from '../../data/services';
import { useState } from 'react';
import TotalBudget from '../molecules/TotalBudget';
import WebOptions from '../molecules/WebOptions';
import FormSaveBudget from './FormSaveBudget';

function Calculator() {
  const { selectedServices, toggleService } = useSelectedServices();
  const [pages, setPages] = useState(1);
  const [languages, setLanguages] = useState(1);
  const [isAnnual, setIsAnnual] = useState(false)

  const baseTotal = services
    .filter(service => selectedServices.includes(service.id))
    .reduce((sum, service) => sum + service.price, 0)

  const webExtra =
    selectedServices.includes("web") ? (pages + languages) * 30 : 0

  let total = baseTotal + webExtra

  if(isAnnual){
    total = total * 0.8
  }
  
  return (
    <>
      <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-[#571E27]">Select your services</h1>
      <div className="flex items-center justify-center gap-4 mt-4 mb-10">
        <span className="text-sm font-medium">Monthly payment</span>

        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isAnnual}
            onChange={() => setIsAnnual(prev => !prev)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#571E27] rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#CB0A36]"></div>
        </label>

        <span className="text-sm font-medium">Anual payment (20% discount)</span>
      </div>
      <CardsServices
        services={services}
        selectedServices={selectedServices}
        onToggle={toggleService}
        isAnnual={isAnnual}
      />
      {selectedServices.includes('web') && (
        <WebOptions
          pages={pages}
          languages={languages}
          onPagesChange={setPages}
          onLanguagesChange={setLanguages}
        />
      )}
      <TotalBudget total={total} />
    </div>
    <div>
      <FormSaveBudget selectedServices={selectedServices} total={total} />
    </div>
    </>
    
  )
}

export default Calculator