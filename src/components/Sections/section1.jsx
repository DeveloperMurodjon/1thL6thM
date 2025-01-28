import "./section1.css";

function Section_1() {
  return (
    <div className="sec1">
      <h3 className="sec1_title">
        Trusted By Over 100+ Startups and freelance business
      </h3>
      <div className="logo_grp">
        <img src={"/images/oracale_logo.png"} alt="oracel company logo" />
        <img src={"/images/morpheus.png"} alt="morpheus company logo" />
        <img src={"/images/samsung_logo.png"} alt="samsung company logo" />
        <img src={"/images/monday_logo.png"} alt="monday.com company logo" />
        <img src={"/images/segment_logo.png"} alt="segment company logo" />
      </div>
    </div>
  );
}

export default Section_1;
