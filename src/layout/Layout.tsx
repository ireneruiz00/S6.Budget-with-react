import { Outlet } from "react-router-dom"
import Header from "../components/organisms/Header"


function Layout() {
  return (
    <>
    <Header/>
    <main className="pt-[140px] min-h-screen flex flex-col items-center justify-start p-4">
        <Outlet/>
    </main>
    </>
    

  )
}

export default Layout