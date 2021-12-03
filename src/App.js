import { useState } from 'react';
import MobileMenu from './Components/MobileMenu';
import Navbar from './Components/Navbar';
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
      <Home></Home>
      <section className='section bg-gray-50' id='about'>
        <h1>About</h1>
      </section>
      <section className='section bg-gray-500' id='content'>
        <h1>Content</h1>
      </section>
    </div>
  )
}

export default App
