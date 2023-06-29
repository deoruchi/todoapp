import "./App.css";
import Adding from "./Components/Adding";
import AppFunction2 from "./Context/AppFunction2";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Complete from "./Components/Complete";
import Active from "./Components/Active";
import { Showing } from "./Components/Showing";

function App() {
  return (
    <div className="App">
      <AppFunction2>
        <HashRouter basename="/">
          <Routes>
            <Route path="/" element={<Adding />}>
              <Route path="/showing" element={<Showing />} />
              <Route path="/complete" element={<Complete />} />
              <Route path="/active" element={<Active />} />
            </Route>
          </Routes>
        </HashRouter>
      </AppFunction2>
    </div>
  );
}

export default App;
