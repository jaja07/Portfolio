import navIcon1 from "../../img/icons8-linkedin-circled.gif";
import navIcon2 from "../../img/icons8-github.gif";
import "animate.css";
import "./social.css";
export const Social = () => {
  return (
    <div class="socials">
      <a
        href="https://www.linkedin.com/in/jarfino-houngbadji-83b161266/"
        target="_blank"
      >
        <img
          src={navIcon1}
          alt="Linkedin"
          loading="lazy"
          class="socicon"
        />
      </a>
      <a href="https://github.com/jaja07?tab=repositories" target="_blank">
        <img
          src={navIcon2}
          alt="Github"
          loading="lazy"
          class="socicon"
        />
      </a>
    </div>
  );
};
