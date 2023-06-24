import "../Style/MainPage.css";
import Infoimg from "../Asset/Infoimg.jpeg";
import PhotoG from "../Asset/PhotoG.jpg";

const MainPage = (props) => {
  return (
    <div className="Info-main-Container">
      <div data-aos="fade-right" className="info-contaniner">
        <p id="info-text">
          {props.time}
          {props.summary}
        </p>
        <a href="/">
          <h1 className="info-heading">
            Transitioning From Graphic Design to UI/UX
          </h1>
        </a>
        <p className="info-text-text">
          Scared of transitioning? Do not let fear hinder your transition.
          Instead, allow us to support you in overcoming that apprehension
        </p>
        <div className="info-article-img">
          <img className="infoart-img" src={PhotoG} alt="infoart" />
          <p className="infoart-name">George Uwabor</p>
          <h5 id="date">published date: Tue Jun 14, 2023</h5>
        </div>
        <a href="/">
          <div className="info-article--container-text">
            <h5 className="article-text">Read the article</h5>
            <svg
              className="article-stroke"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={"0"}
              viewBox="0 0 1024 1024"
              height={"1em"}
              width={"1em"}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"></path>
            </svg>
          </div>
        </a>
      </div>
      <img
        data-aos="zoom-in"
        className="infodesc-img"
        src={Infoimg}
        alt="infodesc"
      />
    </div>
  );
};

export default MainPage;
