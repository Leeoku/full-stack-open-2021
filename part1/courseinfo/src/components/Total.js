import React from "react";


const Total = ({ parts }) => {
  const totalExercises = parts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.exercises, 0
  )
  return (
    <>
      {/* <p>Number of exercises {exercises1 + exercises2 + exercises3}</p> */}
      <p>Total number of exercises is {totalExercises}</p>
    </>
  );
};

export default Total;
