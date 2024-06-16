import { useSelector } from "react-redux";
import "./App.css";
import Container from "./components/Container";
import Controls from "./components/Controls";
import DisplayCounter from "./components/DisplayCounter";
import Header from "./components/Header";
import PrivacyMessage from "./components/PrivacyMessage";

function App() {
  let privacy = useSelector((store) => store.privacy);
  //const counter = useSelector((store) => store.counter)
  return (
    <>
      <center className="px-4 py-5 my-5 text-center">
        {privacy ? (
          <PrivacyMessage />
        ) : (
          <Container>
            <Header />
            <div className="col-lg-6 mx-auto">
              <DisplayCounter />
              <Controls />
            </div>
          </Container>
        )}
      </center>
    </>
  );
}

export default App;
