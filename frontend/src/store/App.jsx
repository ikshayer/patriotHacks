
import {Route, Routes} from "react-router-dom"
import Homepage from '../pages/Homepage.jsx'
import Create from '../pages/Create.jsx'
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
      <Route path="/create" element={<Create/>}/>
      <Route path="/profile" element= {<Profile/>}/>
      <Route path="/auth" element= {<Auth/>}/>
      
    </Routes>
    </ChakraProvider>
    
    </>
  )
}

export default App
