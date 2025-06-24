import CardsServices from '../molecules/CardsServices'
import { useSelectedServices } from '../../hooks/useSelectedServices';
import { services } from '../../data/services';
import TotalBudget from '../molecules/TotalBudget';

function Calculator() {
  const { selectedServices, toggleService } = useSelectedServices();

  const total = services
    .filter(service => selectedServices.includes(service.id))
    .reduce((sum, service) => sum + service.price, 0)
  
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-[#571E27]">Select your services</h1>
      <CardsServices
        services={services}
        selectedServices={selectedServices}
        onToggle={toggleService}
      />
      <TotalBudget total={total} />
    </div>
  )
}

export default Calculator