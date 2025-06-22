import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="flex space-x-6 text-white text-lg font-semibold">
      <Link to='/home' className="text-[#CB0A36] hover: overline transition">Home</Link>
      <Link to='/budget-calculator'>Services</Link>
      <Link to='/current-budgets'>My budgets</Link>
    </nav>
    
  )
}

export default Navbar