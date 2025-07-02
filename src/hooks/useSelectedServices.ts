import { useState } from "react";

export const useSelectedServices = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (id: string) => {
    setSelectedServices(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    )
  }

  const setInitialServices = (initial: string[]) => {
    setSelectedServices(initial);
  };

  return {
    selectedServices,
    toggleService,
    setInitialServices
  }
}
