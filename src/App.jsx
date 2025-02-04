import { useState } from 'react'
import Navbar from './Components/Navbar/navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/ABOUT.JSX'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'

function App() {
  const [count, setCount] = useState(0)

  return (
 <div>
  <Navbar />
  <Hero />
  <About />
  <Services />
  <MyWork />
 </div>
  )
}

export default App
