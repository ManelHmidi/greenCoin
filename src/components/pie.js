// import React from 'react'
import { CanvasJSChart } from "canvasjs-react-charts";
var React = require("react");
var Component = React.Component;
const pie = () => {
  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light1", // "light1", "dark1", "dark2"
    title: {
      text: "Production by Region",
    },
    data: [
      {
        type: "pie",
        indexLabel: "{label}: {y}%",
        startAngle: -90,
        dataPoints: [
          { y: 20, label: "Sousse" },
          { y: 24, label: "Tunis" },
          { y: 20, label: "Tataouine" },
          { y: 14, label: "Mahdia" },
          { y: 12, label: "mednine" },
          { y: 10, label: "Tozeur" },
        ],
      },
    ],
  };
  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
};

export default pie;