import './App.css'
import LeftSection from './sections/LeftSection'
import RightSection from './sections/RightSection'

function App() {
  return (
    <div className='mx-auto max-w-5xl min-h-screen lg:grid lg:grid-cols-[38%_62%]'>
      <LeftSection />
      <RightSection />
    </div>
  )
}

export default App