// import './App.css'
import Hero from './components/Herotopsection'
import Header from './utilities/Header'
import Footer from './utilities/Footer'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contactform'
import Skill from './components/Skills'
import Cursor from './components/Customcursor'

function App() {

  return (
    <>
    <Cursor/>
    <Header />
      <Hero/>
      <About/>
      <Skill/>
      <Portfolio/>
      <Contact/>
      <Footer />
    </>
  )
}

export default App
