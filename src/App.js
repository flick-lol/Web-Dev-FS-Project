
import "./App.css";

import { BrowserRouter ,Routes,Route} from "react-router-dom";

import { Home } from "./pages/Home/Home";

import {Login} from './pages/login/login'
import { ChatPage } from "./pages/chat/chat";
import {Events} from "./pages/events/Events";
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/events" element={<Events />} ></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/chat" element={<ChatPage/>}></Route>

    </Routes>
  </BrowserRouter>
  );
}

export default App;
