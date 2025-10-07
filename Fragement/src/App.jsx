import Usercard from "./components/userCard";
import pic from "./assets/react.svg";

function App() {
  return (
    <div className="container">
      <Usercard name="karan" desc="desc1" image={pic} ></Usercard>
      <Usercard name="maha "  desc="desc2" image={pic} ></Usercard>
      <Usercard name="Prithvi"  desc="desc3"  image={pic} ></Usercard>
    </div>
  );
}

export default App;
