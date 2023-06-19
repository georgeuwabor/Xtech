import "../Style/MainPage.css";

const MainPage = (props) => {
  return (
    <div className="Main-Container">
      <div className="info-contaniner">
        <p id="main-text">
          {props.time}
          {props.summary}
        </p>
      </div>
    </div>
  );
};

export default MainPage;
