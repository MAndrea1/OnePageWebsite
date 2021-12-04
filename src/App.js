import { useState } from 'react';
import MobileMenu from './Components/MobileMenu';
import Navbar from './Components/Navbar';
import About from './Sections/About';
import Content from './Sections/Content';
import Home from './Sections/Home'

const App = () => {
  const[menuClicked, setMenuClicked] = useState(false)

  const HandleClick = () => {
      setMenuClicked(!menuClicked)
      console.log(menuClicked);
  }

  return (
    <div className='font-serif'>
      {menuClicked ? <MobileMenu HandleClick={HandleClick}/> : null}
      <Navbar HandleClick={HandleClick}></Navbar>
      <Home/>
      <About/>
      <Content/>
    </div>
  )
}

export default App
