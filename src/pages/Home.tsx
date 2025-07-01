import { useNavigate } from "react-router-dom"
import ButtonNavigator from "../components/atoms/ButtonNavigator"


function Home() {
  const navigate = useNavigate()

  const handleOnClick = () => {
        navigate("/services");
    }


  return (
    <div className="w-[280px] h-[280px] mx-auto mt-3 bg-[#DFC1C9]/60 rounded-full p-8 flex flex-col justify-center items-center text-center shadow-lg sm:w-[550px] sm:h-[550px]">
      <h1 className="mb-5 mt-10 text-[#571E27] text-xl sm:mb-15 sm:text-3xl lg:text-3xl px-4">Calculate your budget for the creation of your web!</h1>
      <ButtonNavigator
      onClick = {handleOnClick}
      textSize= {'text-lg md:text-2xl'}
      text={'Get a Budget'}/>
    </div>
  )
}

export default Home