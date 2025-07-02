import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { BudgetProvider } from './context/BudgetContext.tsx'

createRoot(document.getElementById('root')!).render(
   <BrowserRouter>
      <BudgetProvider>
         <App />
      </BudgetProvider>
   </BrowserRouter> 
    
)
