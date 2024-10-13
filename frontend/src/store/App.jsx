
import {Route, Routes} from "react-router-dom"
import Homepage from '../pages/Homepage.jsx'
import Create from '../pages/Create.jsx'
import Profile from "../pages/Profile.jsx"
import {ChakraProvider, ColorModeScript} from '@chakra-ui/react'
import Auth from '../pages/Auth.jsx'
import theme from './theme.js'
import Cookie from 'js-cookie'
import Navbar from "../components/NavBar.jsx"

function App() {
  Cookie.set('check', 'false', {expires: 1, sameSite: 'strict'})
  return (
    <>
    <ChakraProvider theme={theme}>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/create" element={<Create/>}/>
      <Route path="/profile" element= {<Profile/>}/>
      <Route path="/auth" element= {<Auth/>}/>
      
    </Routes>
    </ChakraProvider>
    
    </>
  )
}

export default App
