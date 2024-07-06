
import './App.css'
import NavBar from './components/NavBar'
import HighLights from './components/HighLights'
import Hero from './components/Hero'
import Model from './components/Model'
import * as Sentry from '@sentry/react';



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

export default Sentry.withProfiler(App)
