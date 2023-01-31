import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import { BrowserRouter as Router, Route, Link,Routes } from "react-router-dom";
//import Prediction from "./Components/Prediction";
import Yield from "./Components/Yield";
//import RegistrationForm from "./Components/RegistrationForm";
import CropForm from "./Components/Cropform";
import YieldForm from "./Components/yieldform";

function App() {
  // const [prediction, setPrediction] = useState(null);
  //const [error, setError] = useState(null);

  return (
   <Routes>
    
    <Route path='/' element={<><About/><Footer/></>}/>
    {/* <Route path='/prediction' element={<><Header/><RegistrationForm/><Footer/></>}/> */}
    <Route path='/prediction' element={<><Header/><CropForm/><Footer/></>}/>
    <Route path='/yield' element={<><Header/><YieldForm/><Footer/></>}/>
   </Routes>
   
  );
}
export default App;
