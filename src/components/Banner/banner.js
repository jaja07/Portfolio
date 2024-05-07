import { Container} from "react-bootstrap";
import headerImg from "../../img/Logo4.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "./banner.css";
import styled from "styled-components";
import { Bio } from '../../data/constants';


export const ResumeButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 55%; /* taille ajustée pour conserver la proportion */
    max-width: 250px; /* réduction de la taille maximale pour un bouton plus petit */
    text-align: center;
    padding: 8px 0; /* padding réduit pour diminuer la hauteur du bouton */
    color: ${({ theme }) => theme.white};
    border-radius: 20px;
    cursor: pointer;
    font-size: 16px; /* taille de police réduite pour un aspect plus compact */
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    background: hsla(271, 100%, 50%, 1);
    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    box-shadow:  20px 20px 60px #1F2634, -20px -20px 60px #1F2634;
    &:hover {
        transform: scale(1.05);
        transition: all 0.4s ease-in-out;
        box-shadow:  20px 20px 60px #1F2634;
        filter: brightness(1);
    }

    @media (max-width: 640px) {
        padding: 8px 0; /* même padding réduit pour les petits écrans */
        font-size: 14px; /* taille de police encore plus petite pour les écrans étroits */
    }
`;


export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <img src={headerImg} alt="Logo" />
        <TrackVisibility>
          {({ isVisible }) => (
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <h1>{`Hi! I'm Jarfino HOUNGBADJI`}</h1>
              <h3>{"Big Data Student"}</h3>
              <p>
              Étudiant en deuxième année du cycle ingénieur à l'ESIGELEC, je me spécialise dans le domaine du Big Data, où je développe des compétences en data science, ingénierie des données et analyse de données. Passionné par le pouvoir des données pour transformer les secteurs, je m'applique à maîtriser les outils et techniques nécessaires pour exceller en tant que futur professionnel du Big Data.
              </p>
            </div>
          )}
        </TrackVisibility>
        {/*<Row className="align-items-center">
          <Col>
            <a href={cv} target="_blank" download>
              <Button variant="outline-secondary">Download CV</Button>
            </a>
          </Col>
        </Row>*/}
        <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
      </Container>
    </section>
  );
};
