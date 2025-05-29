import { useState } from "react"
import { NavBar } from "./components/NavBar"
import { MobileMenu } from "./components/MobileMenu"
import { Home } from "./components/sections/Home"
import { About } from "./components/sections/About"
import { Skills } from "./components/sections/Skills"
import { Experience } from "./components/sections/Experience"
import { Projects } from "./components/sections/Projects"
import './styles/index.css'

export const App=()=>{
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home/>
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
    </>
  )
}
