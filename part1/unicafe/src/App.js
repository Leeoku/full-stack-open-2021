import React, { useState } from "react";
import Button from "./components/Button";

const Statistics = ({ good, bad, neutral }) => {
  const sum = good + bad + neutral;
  const average = (bad * -1 + good) / 100;
  const percentVotes = (good / sum) * 100;
  return (
    <div>
      <p>Sum: {sum}</p>
      <p>Average Score: {average}</p>
      <p>Percent Votes: {percentVotes}</p>
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
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;
