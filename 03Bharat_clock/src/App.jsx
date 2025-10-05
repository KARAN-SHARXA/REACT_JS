import Clockheading from './components/cloclheadin';
import Clockslogan from './components/clockslogan';
import CurrentTime from './components/currenttime';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

function App() {
  return <center>
    <Clockheading></Clockheading>
    <Clockslogan></Clockslogan>
    <CurrentTime></CurrentTime>
    
  </center>
}

export default App
