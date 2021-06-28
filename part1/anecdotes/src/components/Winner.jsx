import React from "react";

const Winner = ({ anecdotes, votes }) => {
  const winningVote = Math.max(...votes)
  const winningIndex = votes.indexOf(winningVote)
  const winningAnecdote = anecdotes[winningIndex]

  if (winningVote === 0){
    return(
      <div>
        <p>Please cast a vote!</p>
      </div>
    )
  }
  return(
    <div>
      <p>{winningAnecdote}</p>
    </div>
  )

};
export default Winner;
