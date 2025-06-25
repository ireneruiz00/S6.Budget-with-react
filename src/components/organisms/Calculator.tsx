import CardsServices from '../molecules/CardsServices'
import { useSelectedServices } from '../../hooks/useSelectedServices';
import { services } from '../../data/services';
import { useState } from 'react';
import TotalBudget from '../molecules/TotalBudget';
import WebOptions from '../molecules/WebOptions';

function Calculator() {
  const { selectedServices, toggleService } = useSelectedServices();
  const [pages, setPages] = useState(1);
  const [languages, setLanguages] = useState(1);

  const baseTotal = services
    .filter(service => selectedServices.includes(service.id))
    .reduce((sum, service) => sum + service.price, 0)

  const webExtra =
    selectedServices.includes("web") ? (pages + languages) * 30 : 0

  const total = baseTotal + webExtra
  
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-[#571E27]">Select your services</h1>
      <CardsServices
        services={services}
        selectedServices={selectedServices}
        onToggle={toggleService}
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
  )
}

export default Calculator