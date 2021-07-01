import { Link } from "react-router-dom";

export const Splash = () => {
  const splashImgPath = "assets/images/seal_mascot.png";

  return <>
    <div className="splash-container">
      <div className="splash">
          <h1 className="splash-head">Online Voting 4 Us!</h1>
          <img src={splashImgPath} alt="Seal Mascot" />
          <p className="splash-subhead">
              This awesome voting tool is brought to you by the Reactive Coders of Team 4.  Isn't our mascot cute?
          </p>
          <p>
              <Link to="/register" className="pure-button pure-button-primary">Get Started by Registering!</Link>
          </p>
          <h2>Selet your ballot to start voting!</h2>
          <label for="ballots">Ballots:</label>
          <select name="ballots" id="ballots">
            <option value="ballot-1">Ballot 1</option>
          </select>
          <p>
              <Link to="/vote" className="pure-button pure-button-primary">Vote</Link>
          </p>
      </div>
    </div>
  </>;
};
