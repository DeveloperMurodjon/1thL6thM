import "./registration.css";

function Registartion() {
  return (
    <div className="right">
      <form>
        <input type="email" id="email" placeholder="Email Address" />
        <input type="password" id="password" placeholder="Password" />
        <a href="#">
          <button type="submit" className="getStartBtn">
            GET STARTED
          </button>
        </a>
      </form>
    </div>
  );
}
export default Registartion;
