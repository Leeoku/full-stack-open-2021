import React from "react";

const Statistic = ({text, value}) => (
  <tr>
    <td>
      {text}: {value}
    </td>
  </tr>
);
export default Statistic;
