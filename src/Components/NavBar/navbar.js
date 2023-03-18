import "./navbar.css";
import { Outlet, Link } from "react-router-dom";
export function NavBar() {
  return (
    <>
      <nav>
        <div className="logo">
          <img src={require("../../assets/logo.png")} alt="Skill&Tell" />
        </div>
        <ul>
          <li>
            <a>
              <Link className="link" to="/">
                {" "}
                Home
              </Link>
            </a>
          </li>
          <li>
            <a>
              <Link className="link" to="/login">
                {" "}
                Login/SignUp
              </Link>
            </a>
          </li>
          <li>
            <a href="#">
              <Link to="/events" className="link">
                Events
              </Link>
            </a>
          </li>
          <li>
            <a href="#">
              <Link className="link" to="/chat">
                {" "}
                Chat
              </Link>
            </a>
          </li>
        </ul>
        <div className="ensiaLogo">
          <a href = "https://ensia.edu.dz/" target="_blank" rel="noopener noreferrer">
          <svg
            width="80"
            height="36"
            viewBox="0 0 120 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.6267 32.15H24.6889C24.6889 34.1711 23.05 35.81 21.0289 35.81H9.51555C4.27444 35.81 0.0222222 31.5711 0 26.3367V12.5345C0 12.0556 0.0277779 11.5845 0.0800001 11.12C0.782222 4.96781 6.00444 0.190033 12.3444 0.190033C18.6844 0.190033 23.9067 4.96781 24.6089 11.12C24.61 11.1323 24.6111 11.1423 24.6133 11.1545C24.6633 11.6067 24.69 12.0678 24.69 12.5345C24.69 13.56 24.5644 14.5556 24.3289 15.5089L21.0311 16.9767L19.2889 17.7522L11.5744 21.1845L6.53333 23.4289L4.95111 24.1334L4.92222 22.3989L4.88 19.9367L6.69333 19.1289L16.4644 14.78L21.0267 12.7489C21.0278 12.6778 21.0289 12.6056 21.0289 12.5334C21.0289 12.0522 20.9889 11.5789 20.9122 11.1189C20.2378 6.99558 16.6578 3.84781 12.3433 3.84781C8.02889 3.84781 4.44889 6.99447 3.77444 11.1189C3.71889 11.4478 3.68333 11.7823 3.66889 12.1223C3.66111 12.26 3.65778 12.3967 3.65778 12.5345C3.65778 12.6511 3.66 12.7667 3.66555 12.8811L3.65778 14.78V25.1822C3.65889 29.03 6.77778 32.15 10.6267 32.15Z"
              fill="#F6F9F6"
            />
            <path
              d="M109.122 3.76782H95.0597C95.0597 1.74671 96.6986 0.107819 98.7197 0.107819H110.233C115.474 0.107819 119.726 4.3467 119.749 9.58114V23.3834C119.749 23.8623 119.721 24.3334 119.669 24.7978C118.966 30.95 113.744 35.7278 107.404 35.7278C101.065 35.7278 95.8419 30.95 95.1397 24.7978C95.1386 24.7856 95.1375 24.7756 95.1353 24.7634C95.0853 24.3111 95.0586 23.85 95.0586 23.3834C95.0586 22.3578 95.1841 21.3623 95.4197 20.4089L98.7175 18.9411L100.46 18.1656L108.173 14.7334L113.214 12.4889L114.796 11.7845L114.825 13.5189L114.867 15.9811L113.054 16.7889L103.283 21.1378L98.7208 23.1689C98.7197 23.24 98.7186 23.3123 98.7186 23.3845C98.7186 23.8656 98.7586 24.3389 98.8353 24.7989C99.5097 28.9222 103.09 32.07 107.404 32.07C111.719 32.07 115.299 28.9234 115.973 24.7989C116.029 24.47 116.064 24.1356 116.079 23.7956C116.086 23.6578 116.09 23.5211 116.09 23.3834C116.09 23.2667 116.087 23.1511 116.082 23.0367L116.09 21.1378V10.7356C116.09 6.88781 112.971 3.76782 109.122 3.76782Z"
              fill="#F6F9F6"
            />
            <path
              d="M77.5347 24.17V24.4167C77.5347 25.1578 77.4203 25.8733 77.2059 26.5467C77.2059 26.5511 77.2047 26.5556 77.2025 26.5589C76.2647 29.49 73.4559 31.62 70.1325 31.62H55.1914C55.1914 32.6645 55.627 33.6111 56.3303 34.2956C57.0336 34.98 58.007 35.4045 59.0814 35.4045H71.3125C73.4736 35.4045 75.477 34.7456 77.1203 33.62C79.7114 31.8478 81.4081 28.9222 81.4225 25.61V24.17C81.4225 23.1111 81.2892 22.08 81.0392 21.0945L77.5358 19.5778L76.237 19.0145V18.9922L74.3114 18.1578L63.9292 13.6611L59.0836 11.5622C59.0825 11.4878 59.0803 11.4133 59.0803 11.3389V11.0922C59.0803 10.3511 59.1947 9.63557 59.4092 8.96224C59.4103 8.9578 59.4114 8.95446 59.4125 8.95001C60.3503 6.0189 63.1603 3.89002 66.4825 3.89002H81.4225C81.4225 2.84446 80.987 1.89779 80.2836 1.21335C79.5803 0.528904 78.607 0.104462 77.5347 0.104462H65.3014C63.1403 0.104462 61.137 0.764462 59.4936 1.89002C56.9036 3.66224 55.2059 6.5878 55.1914 9.89891V11.3389C55.1914 12.3989 55.3247 13.4289 55.5759 14.4145L59.0781 15.9311L60.377 16.4956V16.5167L62.3036 17.3522L72.6847 21.8478L77.5314 23.9478C77.5336 24.0222 77.5347 24.0967 77.5347 24.17Z"
              fill="#F6F9F6"
            />
            <path
              d="M51.7504 11.7722V31.6922C51.7504 34.0711 49.8215 36.0011 47.4415 36.0011V11.5867C47.4415 7.41778 44.0626 4.03889 39.8937 4.03889H33.2937V36H28.8604V0H39.9792C46.4792 0 51.7504 5.27 51.7504 11.7722Z"
              fill="#F6F9F6"
            />
            <path
              d="M90.3564 35.6445C87.9653 35.6445 86.0264 33.7056 86.0264 31.3145V6.67224H90.3564V35.6445Z"
              fill="#F6F9F6"
            />
            <path
              d="M90.1544 4.09558H86.1377C86.1377 1.87669 87.9366 0.0789185 90.1544 0.0789185V4.09558Z"
              fill="#EE7A19"
            />
          </svg>
          </a>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
