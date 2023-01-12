import linkedinIcon from "../imgs/linkedin-icon.png";
export function Footer(): JSX.Element {
  return (
    <div className="footer">
      <p className="api-txt">
        API: <a href="https://www.TVMaze.com">TVMaze.com</a>
      </p>
      <div className="linkedin-container">
        <a
          className="linkedin-btn"
          href="https://www.linkedin.com/in/alessiaborys/"
        >
          <img
            src={linkedinIcon}
            alt="linkedin-icon"
            className="linkedin-icon"
          />
          <span className="linkedin-name">Alessia</span>
        </a>
        <a
          className="linkedin-btn"
          href="https://www.linkedin.com/in/maria-ten/"
        >
          <img
            src={linkedinIcon}
            alt="linkedin-icon"
            className="linkedin-icon"
          />
          <span className="linkedin-name">María</span>
        </a>
      </div>
    </div>
  );
}
