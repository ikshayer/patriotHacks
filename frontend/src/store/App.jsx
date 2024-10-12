
import {Route, Routes} from "react-router-dom"
import Homepage from '../pages/Homepage.jsx'
import Leaderboard from '../pages/Leaderboard.jsx'
import Profile from "../pages/Profile.jsx"


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/leaderboard" element={<Leaderboard/>}/>
      <Route path="/profile" element= {<Profile/>}/>
    </Routes>
    
    </>
  )
}

export default App
