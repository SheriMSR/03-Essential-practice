import { useState } from "react";
import "./UserInfo.css";

const initailInfo = {
  currentSavings: 0,
  yearlyContribution: 0,
  expectedReturn: 0,
  duration: 0,
};

export default function UserInfo(props) {
  const [userInfo, setUserInfo] = useState(initailInfo);

  const currentSavingsHandler = (event) =>
    setUserInfo((x) => {
      return { ...x, currentSavings: event.target.value };
    });
  const yearlyContributionHandler = (event) =>
    setUserInfo((x) => {
      return { ...x, yearlyContribution: event.target.value };
    });
  const expectedReturnHandler = (event) =>
    setUserInfo((x) => {
      return { ...x, expectedReturn: event.target.value };
    });
  const durationHandler = (event) =>
    setUserInfo((x) => {
      return { ...x, duration: event.target.value };
    });

  const submitHandler = (event) => {
    event.preventDefault();

    props.onCalculate(userInfo);
  };

  const resetHandler = () => {
    setUserInfo(initailInfo);
  };

  return (
    <div>
      <form id="user-input">
        <div className="input-group">
          <p>
            <label>Current Savings</label>
            <input
              type="number"
              value={userInfo.currentSavings}
              onChange={currentSavingsHandler}
            />
          </p>
          <p>
            <label>Yearly Contribution</label>
            <input
              type="number"
              value={userInfo.yearlyContribution}
              onChange={yearlyContributionHandler}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label className="label">Expected Return</label>
            <input
              type="number"
              value={userInfo.expectedReturn}
              onChange={expectedReturnHandler}
            />
          </p>
          <p>
            <label>Duration</label>
            <input
              type="number"
              value={userInfo.duration}
              onChange={durationHandler}
            />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="button" onClick={resetHandler}>
            Reset
          </button>
          <button type="submit" className="button" onClick={submitHandler}>
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
}
