import "./App.css";
import Navbar from "./Component/Navbar";
import Form from "./Component/Form";

function App() {
  return (
    <div>
      <Navbar TextUtil="TextUtil" Home="Home" About="About" Contact="Contact" Search="Search" />
      <Form heading="Enter your text to analyze"/>
      </div>
  );
}

export default App;
