
import { LineChart } from 'recharts'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import POptions from './Components/POptions/POptions'


// import Nav from './Components/Daisynav/Nav'

function App() {


  return (
    <>
    <NavBar></NavBar>
    {/* <Nav></Nav> */}
      <h1>Vite + React</h1>
      <POptions></POptions>
      <LineChart></LineChart>
      
      
    
    </>
  )
}

export default App
