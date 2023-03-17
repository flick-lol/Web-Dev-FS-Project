import { Teamswiper } from "../Swiper/swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Wave from "react-wavify";
import "./footer.css";

export function Footer() {
  return (
    <footer className="flex flex-column justify-content-center">
      <div className="flex flex-column text-center  justify-content-center  flex-sm-row m-sm-5">
        <div class="text-block">
          <h1>Meet our team</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis, esse provident adipisci magni consequuntur quibusdam
            sit reprehende.
          </p>
        </div>

        <Teamswiper></Teamswiper>
      </div>

      <div className="wave-wrapper" >
        <Wave
          fill="#FF9100"
          id="wave"
          paused={false}
          options={{
            height: 20,
            amplitude: 20,
            speed: 0.15,
            points: 10,
          }}
        />

        <div class="social flex justify-content-center">
          <a href="#">
            <FontAwesomeIcon icon={faDiscord} size="2x" className="mx-5" />
          </a>
          <a href="https://www.instagram.com/skillntell.club/?hl=en">
            <FontAwesomeIcon
              icon={faInstagram}
              size="2x"
              className="mx-5"
            ></FontAwesomeIcon>
          </a>
          <a href="https://www.linkedin.com/in/skill-and-tell-club-b5a051251/">
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2x"
              className="mx-5"
            ></FontAwesomeIcon>
          </a>
        </div>
      </div>
    </footer>
  );
}
