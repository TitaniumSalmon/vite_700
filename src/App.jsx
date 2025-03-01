import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from './sections/Header'
import Navbar from './sections/Navbar'
import Contact from './sections/Contact'
import LeftSection from './sections/LeftSection'
import RightSection from './sections/RightSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='mt-14 mx-auto max-w-6xl grid grid-cols-[40%_60%] '>
      <LeftSection />
      <RightSection />
  
    </div>
  )
}

export default App;
