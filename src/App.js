
import './App.css';
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Nav/>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/register' element={<Register/>} />
              <Route path='/login' element={<Login/>} />

          </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
