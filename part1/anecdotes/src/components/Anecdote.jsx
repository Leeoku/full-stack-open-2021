import React from "react";

const Anecdote = ({ voteCount, text }) => (
  <div>
    <p>{text}</p>
    <p>has {voteCount} votes</p>
  </div>
);
export default Anecdote;
