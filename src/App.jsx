
import './App.css'
import About from './Components/About'
import ContactMe from './Components/Contact'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import WorkExperience from './Components/WorkExperience'

function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <WorkExperience/>
      <Skills/>
      <Projects/>
      <ContactMe/>
    </>
  )
}

export default App
