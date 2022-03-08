import './vendors/bootstrap-5.1.3/dist/css/bootstrap.css';
import './vendors/fontawesome/css/all.css';
import HelloWorld from "./components//HelloWorld";
import Labs from "./components/Labs";
import Tuiter from "./components/Tuiter";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
      <div className="container">
          <Routes>
          <Route path="/hello" element={<HelloWorld />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/tuiter" element={<Tuiter />} />
          </Routes>
      </div>
      </BrowserRouter>

  );
}
export default App;
