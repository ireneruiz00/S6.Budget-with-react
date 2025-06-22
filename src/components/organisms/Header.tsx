import Navbar from '../molecules/Navbar'
import headerBanner from '../../assets/images/pawel-czerwinski-fOXvuWswMDs-unsplash.jpg'

function Header() {
  return (
    <header className='fixed w-full h-35 top-0 z-50'>
      <img src={headerBanner} alt="header-image" className='w-full h-full object-cover'/>
      <div className='absolute inset-0 flex justify-around items-center pr-10'>
        <Navbar/>
      </div>
      
    </header>
    
  )
}

export default Header