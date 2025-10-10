import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Container from './container/container'
import LogoutBtn from './container/container2'
function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);
   if(isLoggedIn){
    return (

      <LogoutBtn></LogoutBtn>

    )
   }else{
    return(
      <Container></Container>
    )
   }
 
}

export default App
