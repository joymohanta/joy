import { ToastContainer } from "react-toastify";
import "./App.css";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Contact></Contact>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
