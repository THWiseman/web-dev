import './vendors/bootstrap-5.1.3/dist/css/bootstrap.css';
import './vendors/fontawesome/css/all.css';
import HelloWorld from "./components//HelloWorld";
import Labs from "./components/Labs/Labs";
import HomeScreen from "./components/Tuiter/home/home-screen"
import ExploreScreen from "./components/Tuiter/explore-screen/explore-screen"
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
      <div className="container">
          <Routes>
              <Route path="/" element={<HelloWorld/>}/>
              <Route path="/Labs" element={<Labs/>}/>
              <Route path="/tuiter/home" element={<HomeScreen/>}/>
              <Route path="/tuiter/explore" element={<ExploreScreen/>}/>
          </Routes>
      </div>
      </BrowserRouter>

  );
}
export default App;
