import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header.js";
import Content from "./components/Content.js";
import Total from "./components/Total.js";

const App = () => {
  // 1.1
  // const course = "Half Stack application development";
  // const part1 = "Fundamentals of React";
  // const exercises1 = 10;
  // const part2 = "Using props to pass data";
  // const exercises2 = 7;
  // const part3 = "State of a component";
  // const exercises3 = 14;

  // 1.2
  // When values are variables, just pass variable as JSX
  // <Part part = {part1} exercises = {excersises1}/>

  // 1.3
  // const course = "Half Stack application development";
  // const part1 = {
  //   name: "Fundamentals of React",
  //   exercises: 10,
  // };
  // const part2 = {
  //   name: "Using props to pass data",
  //   exercises: 7,
  // };
  // const part3 = {
  //   name: "State of a component",
  //   exercises: 14,
  // };

  // When values in object, reference the object with dot notation or bracket
  // <Part part={part1.name} exercises={part1.exercises} />;

  // 1.4
  // const course = "Half Stack application development";
  // const parts = [
  //   {
  //     name: "Fundamentals of React",
  //     exercises: 10,
  //   },
  //   {
  //     name: "Using props to pass data",
  //     exercises: 7,
  //   },
  //   {
  //     name: "State of a component",
  //     exercises: 14,
  //   },
  // ];

  // Use arrays with dot Notation 
  // <Part part={parts[0].name} exercises={parts[0].exercises} />

    const course = {
      name: "Half Stack application development",
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
        },
        {
          name: "State of a component",
          exercises: 14,
        },
      ],
    };
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
