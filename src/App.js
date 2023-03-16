
import "./App.css";

import { BrowserRouter ,Routes,Route} from "react-router-dom";


import {LoginPage}from "./pages/login/login"

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/login" element={<LoginPage/>}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
