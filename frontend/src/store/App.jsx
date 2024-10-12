
import {Route, Routes} from "react-router-dom"
import Homepage from '../pages/Homepage.jsx'
import Leaderboard from '../pages/Leaderboard.jsx'
import Profile from "../pages/Profile.jsx"
import {ChakraProvider, ColorModeScript} from '@chakra-ui/react'
import Auth from '../pages/Auth.jsx'
import theme from './theme.js'

function App() {

  return (
    <>
    <ChakraProvider theme={theme}>
    
    <Routes>
      
      <Route path="/" element={<Homepage/>}/>
      <Route path="/leaderboard" element={<Leaderboard/>}/>
      <Route path="/profile" element= {<Profile/>}/>
      <Route path="/auth" element= {<Auth/>}/>
      
    </Routes>
    </ChakraProvider>
    
    </>
  )
}

export default App
