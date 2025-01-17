import {
  faDiscord,
  faGithubAlt,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Feel free to contact me on my socials!</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <a href="https://github.com/femto21" target="_blank">
            <FontAwesomeIcon
              icon={faGithubAlt}
              style={{ color: "#dfd8f3" }}
              className="m-auto h-1/2 w-1/2"
            />
          </a>
        </div>
        <div className="social-icon">
          <a
            href="https://discord.com/users/530748472278646805"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faDiscord}
              style={{ color: "#dfd8f3" }}
              className="m-auto h-1/2 w-1/2"
            />
          </a>
        </div>
        <div className="social-icon">
          <a
            href="https://www.linkedin.com/in/arpit-gahlot-1bb63a300"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ color: "#dfd8f3" }}
              className="m-auto h-1/2 w-1/2"
            />
          </a>
        </div>
      </div>

      <p className="text-white-500">
        © 2024 Arpit Gahlot. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
