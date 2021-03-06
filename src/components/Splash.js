import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { SelectBallotContainer } from "../containers/SelectBallotContainer";
import {createValidateUserInfoRequestAction} from "../actions/votes-tool";

export const Splash = () => {
  const splashImgPath = "assets/images/seal_mascot.png";

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createValidateUserInfoRequestAction());
  }, [dispatch])

  return (
    <>
      <div className="splash-container">
        <div className="splash">
          <h1 className="splash-head">Online Voting 4 Us!</h1>
          <img src={splashImgPath} alt="Seal Mascot" />
          <p className="splash-subhead">
            This awesome voting tool is brought to you by the Reactive Coders of
            Team 4. Isn't our mascot cute?
          </p>
          <p>
            <Link to="/register" className="pure-button pure-button-primary">
              Get Started by Registering!
            </Link>
          </p>
          <SelectBallotContainer />
        </div>
      </div>
    </>
  );
};
