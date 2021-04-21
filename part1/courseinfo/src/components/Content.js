import React from "react";
import Part from "./Part.js";
const Content = ({ parts }) => {
  // const contentList = parts.map(({ name, exercises }) => (
  //   <Part key={name} name={name} exercises={exercises} />
  // ));
  const contentList = parts.map((entries) => (
    <Part key={entries.name}{...entries} />
  ));
  return <div>{contentList}</div>;
};

export default Content;
