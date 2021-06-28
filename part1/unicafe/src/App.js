import React, { useState } from "react";
import Button from "./components/Button";
import Statistic from "./components/Statistic";

const Statistics = ({ good, bad, neutral }) => {
  const sum = good + bad + neutral;
  const average = (bad * -1 + good) / 100;
  const percentVotes = ((good / sum) * 100).toFixed(4);

  if (!good && !bad && !neutral) {
    return <div>Please enter some stats</div>;
  }
  return (
    <div>
      <table>
        <tbody>
          <Statistic text="Good" value={good} />
          <Statistic text="Neutral" value={neutral} />
          <Statistic text="Bad" value={bad} />
          <Statistic text="Sum" value={sum} />
          <Statistic text="Average Score" value={average} />
          <Statistic text="Percent Vote" value={percentVotes + "%"} />
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h2>Give Feedback Here</h2>
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      <h2>Statistics</h2>
      {/* <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p> */}
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;
