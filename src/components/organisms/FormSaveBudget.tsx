import { useState } from "react";
import { useBudgetContext } from "../../context/BudgetContext";
import { v4 as uuidv4 } from "uuid"; 

interface Props {
  selectedServices: string[];
  total: number;
}

function FormSaveBudget({ selectedServices, total }: Props) {
  const { addBudget } = useBudgetContext()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [errors, setErrors] = useState({ name: '', phone: '', email: '', services: '' })

  const validateEmail = (email: string): boolean => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return re.test(email)
  };

  const validatePhone = (phone: string): boolean => {
  const re = /^[0-9]{9,15}$/
  return re.test(phone)
  };

  const handleSave = () => {
    const newErrors = {
      name: name.trim() === '' ? 'This field is required' : '',
      email: email.trim() === '' ? 'This field is required' : 
          !validateEmail(email) ? 'Invalid format (ex: name@gmail.com)': '',
      phone: phone.trim() === '' ? 'This field is required' :
          !validatePhone(phone) ? 'Invalid values': '',
      services: selectedServices.length === 0 ? 'Select at least a service' : '',
    }

  setErrors(newErrors)
  if(Object.values(newErrors).some((error) => error !== '')) return

    const newBudget = {
      id: uuidv4(),
      name,
      email,
      phone,
      services: selectedServices,
      total,
    };

    addBudget(newBudget)

    //reiniciar form
    setName("");
    setEmail("");
    setPhone("");
    setErrors({name: '', phone: '', email: '', services: ''})
  };

  return (
    <form className="mt-6 p-4 bg-rose-50 rounded-xl shadow">
      <h2 className="text-xl font-bold text-[#571E27] mb-4">Save your budget</h2>
      <div className="flex space-x-4 mb-4 flex-col gap-y-3 md:flex-row">
        <div className="flex flex-col">
          <input value={name} onChange={e => setName(e.target.value)} placeholder="Name"
          className= {`border p-2 mr-2 rounded ${errors.name ? 'border-red-500': 'border-black'}`}/>
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div className="flex flex-col">
          <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"
          className={`border p-2 mr-2 rounded ${errors.email ? 'border-red-500': 'border-black'}`}/>
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div className="flex flex-col">
          <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="Phone Number"
          className={`border p-2 mr-2 rounded ${errors.phone ? 'border-red-500': 'border-black'}`}/>
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>
        <div className="flex flex-col">
          <button type="button" onClick={handleSave}
            className="bg-rose-400 text-white px-4 py-2 rounded hover:bg-rose-500">
            Save Budget
          </button>
          {errors.services && <p className="text-red-500 text-sm mt-1">{errors.services}</p>}
        </div>
      </div>
    </form>
  )
}

export default FormSaveBudget;
