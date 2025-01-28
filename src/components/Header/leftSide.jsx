import "./leftSide.css";
import OurProcessBtn from "../Button/ourProcess.jsx";
import HowWorks from "../Button/howWork.jsx";

function LeftSide() {
  return (
    <div className="left">
      <h1 className="header_title">
        Managing business payments has never been easier
      </h1>
      <p className="description">
        Yet bed any for travelling assistance indulgence unpleasing. Not
        thoughts all exercise blessing. Indulgence way everything.
      </p>
      <div>
        <OurProcessBtn />
        <HowWorks />
      </div>
    </div>
  );
}
export default LeftSide;
