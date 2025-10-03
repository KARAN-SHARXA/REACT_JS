import Ksbutton from "./ksbutton";
import Hello from "./hello";
import Random from "./random";

function App() {
  return (
    <div>
      <h1>this is best</h1>
      <Ksbutton />
      <Hello></Hello>
      <Random></Random>
      <Random></Random>


      <button type="button" class="btn btn-outline-primary">Primary</button>
<button type="button" class="btn btn-outline-secondary">Secondary</button>
<button type="button" class="btn btn-outline-success">Success</button>
<button type="button" class="btn btn-outline-danger">Danger</button>
<button type="button" class="btn btn-outline-warning">Warning</button>
<button type="button" class="btn btn-outline-info">Info</button>
<button type="button" class="btn btn-outline-light">Light</button>
<button type="button" class="btn btn-outline-dark">Dark</button>
    </div>
  );
}

export default App;
