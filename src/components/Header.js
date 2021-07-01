import { Link } from 'react-router-dom';

export const Header = () => {

  return (
    <div className="header">
      <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
        <nav>
          <Link className="pure-menu-heading" to="/home">Online Voting 4 Us</Link>
          <ul className="pure-menu-list">
          <li className="pure-menu-item">
              <Link className="pure-menu-link" to="/home">Home</Link>
            </li>
            <li className="pure-menu-item">
              <Link className="pure-menu-link" to="/register">Register Voter</Link>
            </li>
            <li className="pure-menu-item">
              <Link className="pure-menu-link" to="/vote">Vote</Link>
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