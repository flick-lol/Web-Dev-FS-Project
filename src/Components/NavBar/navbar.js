import "./navbar.css"
import { Outlet, Link } from "react-router-dom";

export function NavBar() {
  return (<>
    <nav>
      <div className="logo" >
        <img src={require("../../assets/logo.png")} alt="Skill&Tell" />
      </div>
      <ul>
        <li>
          <a><Link className="link" to="/"> Home</Link></a>
        </li>
        <li>
          <a><Link className="link" to="/login"> Login/SignUp</Link></a>
        </li>
        <li>
          <a href="#"><Link to="/events"className="link" >Events</Link></a>
        </li>
        <li>
          <a href="#" ><Link className="link" to="/chat"> Chat</Link></a>
        </li>
      </ul>
      <button>Join our events</button>
    </nav>
    <Outlet />
    </>
);
}
