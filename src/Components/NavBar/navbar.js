import "./navbar.css"
import { Outlet, Link } from "react-router-dom";

export function NavBar() {
  return (<>
    <nav>
      <div class="logo" >
        <img src={require("../../assets/logo.png")} alt="Skill&Tell" />
      </div>
      <ul>
        <li>
          <a><Link to="/"> Home</Link></a>
        </li>
        <li>
          <a><Link to="/login"> Login/SignUp</Link></a>
        </li>
        <li>
          <a href="#">Events</a>
        </li>
        <li>
          <a href="#"><Link to="/chat"> Chat</Link></a>
        </li>
      </ul>
      <button>Join our events</button>
    </nav>
    <Outlet />
    </>
);
}
