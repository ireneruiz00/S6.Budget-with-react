import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Budgetpage from './pages/Budgetpage'
import CurrentBudgetspage from './pages/CurrentBudgetspage'
import Layout from './layout/Layout'

function AppRoutes() {
  return (
    <section>
        <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path='/budget-calculator' element={<Budgetpage/>}/>
              <Route path='/current-budgets' element={<CurrentBudgetspage/>}/>
            </Route>
        </Routes>
    </section>
  )
}

export default AppRoutes