import "./App.css";
import ClockInfo from "./components/ClockInfo";
import ClockName from "./components/ClockName";
import CurrentTime from "./components/CurrentTime";

function App() {
  return <>
    <center>
      <ClockName/>
      <ClockInfo/>
      <CurrentTime/>
    </center>
  </>;
}

export default App;
