import React, { useState } from "react";
import Button from "./components/Button";
import Anecdote from "./components/Anecdote";
import Winner from "./components/Winner";

const Header = ({ title }) => <h2>{title}</h2>;

const App = () => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const handleNextAnecdote = () => {
    const index = Math.floor(Math.random() * anecdotes.length);
    setSelected(index);
  };
  const handleVoteClick = () => {
    const updatedVotes = [...votes];
    updatedVotes[selected] += 1;
    setVotes(updatedVotes);
  };

  return (
    <div>
      <Header title="Anecdote of the Day!" />
      <Anecdote text={anecdotes[selected]} voteCount={votes[selected]} />
      <Button text="Vote" handleClick={handleVoteClick} />
      <Button text="Next Anecdote" handleClick={handleNextAnecdote} />
      <Winner votes={votes} anecdotes={anecdotes}/>
    </div>

  );
};

export default App;

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients",
];
