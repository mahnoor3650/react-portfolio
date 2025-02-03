import { useState } from 'react'
import Navbar from './Components/Navbar/navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/ABOUT.JSX'
import Services from './Components/Services/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
 <div>
  <Navbar />
  <Hero />
  <About />
  <Services />
 </div>
  )
}

export default App
