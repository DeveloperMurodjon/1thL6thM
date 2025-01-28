import "./section2.css";

function Section2() {
  return (
    <div className="sec2">
      <h2 className="title_sec2">Believing neglected so so allowance</h2>
      <p className="description_sec2">
        We so opinion friends me message as delight. Whole front do of plate
        heard oh ought. His defective nor convinced residence own.
      </p>

      <a href="#">
        <button className="btn_sec2">
          We so opinion friends me message as delight.
        </button>
      </a>

      <div className="box_sec2">
        <div className="card_sec2">
          <img src={"/images/card1img.png"} alt="card 1 img" />
          <h4 className="card_title">Led Ask Possible Mistress</h4>
          <p className="card_description">
            Connection has put impossible own apartments boisterous. At jointure
            ladyship an insisted so humanity he. Friendly bachelor entrance to
            on by.
          </p>
        </div>
        <div className="card_sec2">
          <img src={"/images/card2img.png"} alt="card 1 img" />
          <h4 className="card_title">Elegance Eat Likewise</h4>
          <p className="card_description">
            From they fine john he give of rich he. They age and draw mrs like.
            Improving end distrusts may instantly was household applauded
            incommode.
          </p>
        </div>
        <div className="card_sec2">
          <img src={"/images/card3img.png"} alt="card 1 img" />
          <h4 className="card_title">Message Oram Nothing</h4>
          <p className="card_description">
            Why kept very ever home mrs. Considered sympathize ten uncommonly
            occasional assistance sufficient not. Letter of on become he tended
            active enable to.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section2;
