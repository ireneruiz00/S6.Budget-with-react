import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Budgetpage from './pages/Budgetpage'
import CurrentBudgetspage from './pages/CurrentBudgetspage'

function AppRoutes() {
  return (
    <section>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/budget-calculator' element={<Budgetpage/>}></Route>
            <Route path='/current-budgets' element={<CurrentBudgetspage/>}></Route>
        </Routes>
    </section>
  )
}

export default AppRoutes