
export interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
}

export interface Budget {
  id: string;
  name: string;
  email: string;
  phone: string;
  services: string[];
  total: number;
  date: Date;
}