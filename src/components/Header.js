import { Link } from 'react-router-dom';

export const Header = () => {
  const splashImgPath = "assets/images/seal_mascot.png";

  return (
    <div className="header">
      <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
        <nav>
          <img src={splashImgPath} alt="Seal Mascot" className="mascot"/>
          <Link className="pure-menu-heading" to="/home">Online Voting 4 Us</Link>
          <span>by Reactive Coders "...Let's code!"</span>
          <ul className="pure-menu-list">
          <li className="pure-menu-item">
              <Link className="pure-menu-link" to="/home">Home</Link>
            </li>
            <li className="pure-menu-item">
              <Link className="pure-menu-link" to="/register">Register Voter</Link>
            </li>
            <li className="pure-menu-item">
              <Link className="pure-menu-link" to="/manageElections">Manage Elections</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
  
};