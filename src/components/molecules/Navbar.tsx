import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav className="flex space-x-6 text-lg text-[#571E27] font-semibold hover:transition">
      <NavLink to="/" className={({ isActive }) => isActive ? "underline" : ""}>Home</NavLink>
      <NavLink to="/budget-calculator" className={({ isActive }) => isActive ? "underline" : ""}>Services</NavLink>
      <NavLink to="/current-budgets" className={({ isActive }) => isActive ? "underline" : ""}>My budgets</NavLink>
    </nav>
    
  )
}

export default Navbar