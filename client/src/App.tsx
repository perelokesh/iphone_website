
import './App.css'
import NavBar from './components/NavBar'
import HighLights from './components/HighLights'
import Hero from './components/Hero'
import Model from './components/Model'



 const App = () => {


  return (
   <main className="bg-black">
    <NavBar/>
    <Hero/>
    <HighLights/> 
    <Model/>
   </main>
  )
}

export default App

