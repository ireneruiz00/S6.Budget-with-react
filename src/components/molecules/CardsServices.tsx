import type { Service } from "../../types/Types";


interface Props {
  services: Service[];
  selectedServices: string[];
  onToggle: (id: string) => void;
  isAnnual: boolean;
}

function CardsServices({services, selectedServices, onToggle, isAnnual}: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {services.map(service => (
        <div
          key={service.id}
          className={`border p-4 rounded-xl shadow ${
            selectedServices.includes(service.id) ? "bg-rose-100" : ""
          }`}
        >
          <h2 className="text-4xl mb-4 font-semibold text-[#571E27]">{service.title}</h2>
          <p className="text-sm text-[#571E27]">{service.description}</p>
          <p className="font-bold mt-2 text-[#571E27]">{service.price} €</p>
          <label className="inline-flex items-center mt-2">
            <input
              type="checkbox"
              checked={selectedServices.includes(service.id)}
              onChange={() => onToggle(service.id)}
              className="mr-2 text-[#571E27]"
            />
            Select
          </label>
          {isAnnual && <p className="text-rose-500">Save a 20%</p>}
        </div>
      ))}
    </div>
  )
}

export default CardsServices