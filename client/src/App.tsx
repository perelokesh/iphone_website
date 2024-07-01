
import './App.css'
import NavBar from './components/NavBar'
import HighLights from './components/HighLights'
import Hero from './components/Hero'


const App = () => {

  return (
   <main className="bg-black">
    <NavBar/>
    <Hero/>
    <HighLights/> 
   </main>
  )
}

export default App
