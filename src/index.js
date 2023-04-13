import React from "react";
import ReactDOM from "react-dom";

const root = document.querySelector("#root");

// const handleEdit = (value) => {
//   const text = document.getElementsByTagName("td").textContent;
//   console.log("Text", text);
//   console.log("Value", value);
//   var row = document.getElementsByClassName("tableee").rows;
//   console.log("Row", row);
// };

let dataArr = [
  "MONTH 1",
  "Onboarding Call",
  "Google Search Console",
  "Website Access",
  "Tehcnical Audit",
  "Anchor Text and Sementic Analysis",
  "Computer Analysis",
  "Anchor Text/ Url Mapping",
  "Google Data Studio Report + Local Report Suite",
  "Site Level Optimization",
  "On Page Optimization",
  "Content Creation",
  "Content Publication",
  "Premium Press Release",
  "Authority Niche Palcements",
  "Review Management",
  "Index Links",
  "Video Recap",
];

ReactDOM.render(
  <div>
    <h1 className="redtext">Data Table</h1>
    <table border={"1px"} className="tableee">
      <tbody>
        {dataArr.map((ele, index) => {
          return (
            <tr key={index}>
              <td contentEditable>{ele}</td>
              <td contentEditable></td>
              <td contentEditable></td>
              <td contentEditable></td>
              <td contentEditable></td>
              <td contentEditable></td>
              <td contentEditable></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>,
  root
);
