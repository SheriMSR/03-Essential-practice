import { useState } from "react";
import Header from "./component/Header/Header.jsx";
import Result from "./component/Result/Result.jsx";
import UserInfo from "./component/UserInfo/UserInfo.jsx";

function App() {
  const [userInfo, setUserInfo] = useState(null);

  const calculateHandler = (userInfo) => {
    setUserInfo(userInfo);
  };

  const yearlyData = [];
  if (userInfo) {
    let currentSavings = +userInfo.currentSavings;
    const yearlyContribution = +userInfo.yearlyContribution;
    const expectedReturn = +userInfo.expectedReturn / 100;
    const duration = +userInfo.duration;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <>
      <Header />
      <UserInfo onCalculate={calculateHandler} />
      {!userInfo ? (
        <p style={{ textAlign: "center" }}>No investment calculated yet.</p>
      ) : (
        <Result
          data={yearlyData}
          initialInvestment={userInfo.currentSavings}
        />
      )}
    </>
  );
}

export default App;
