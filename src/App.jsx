import { useState } from 'react'
import './App.css'
import Navegation from '../src/nav/Navegation'
import Banner from '../src/banner/Banner'
import Skills from './skills/Skills'
import Exp from './experience/Exp'
import About from './about/About'
import Project from './porjects/Project'
import Testimonial from './testimonial/Testimonial'
import Contact from './contact/Contact'
import Footer from './footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navegation/>
      <Banner/>
      <Skills/>
      <Exp/>
      <About/>
      <Project/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
