import React, { useState } from "react";
import Plot from "react-plotly.js";
import "./App.css";

function App() {
  const data1 = [
    {
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 3, 4, 5],
      name: "Line 1",
      type: "scatter",
      mode: "lines+markers",
      marker: {
        color: "red",
      },
    },
    {
      x: [1, 2, 3, 4, 5],
      y: [1.1, 2.4, 3.8, 5, 6.5],
      name: "Line 2",
      type: "scatter",
      mode: "lines+markers",
      marker: {
        color: "black",
      },
    },
  ];

  const data2 = [
    {
      x: [1, 2, 3, 4, 5],
      y: [5, 4, 3, 2, 1],
      name: "Line 3",
      type: "scatter",
      mode: "lines+markers",
      marker: {
        color: "blue",
      },
    },
    {
      x: [1, 2, 3, 4, 5],
      y: [6.5, 5, 3.8, 2.4, 1.1],
      name: "Line 4",
      type: "scatter",
      mode: "lines+markers",
      marker: {
        color: "green",
      },
    },
  ];

  const [state, setState] = useState({
    data: [],
    layout: {},
    frames: [],
    config: {},
    revision: 0,
  });

  const onData1Click = () => {
    setState({
      ...state,
      data: data1,
    });
  };

  const onData2Click = () => {
    setState({
      ...state,
      data: data2,
    });
  };

  const initialized = () => {
    console.log("onInitialized");
  };

  const afterPlot = () => {
    console.log("onAfterPlot");
  };

  const update = () => {
    console.log("onUpdate");
  };

  const hover = () => {
    console.log("onHover");
  };

  const click = () => {
    console.log("onClick");
  };

  const relayout = () => {
    console.log("onRelayout");
    console.log(state.layout);
    console.log("x-axis layout:");
    console.log(state.layout.xaxis);
    console.log("y-axis layout:");
    console.log(state.layout.yaxis);
  };

  const unhover = () => {
    console.log("onUnhover");
  };

  const selected = () => {
    console.log("onSelected");
  };

  const beforeHover = () => {
    console.log("onBeforeHover");
  };

  return (
    <div>
      <button onClick={onData1Click}>Data 1</button>
      <button onClick={onData2Click}>Data 2</button>
      <Plot
        data={state.data}
        layout={state.layout}
        frames={state.frames}
        revision={state.revision}
        onInitialized={initialized}
        onUpdate={update}
        onAfterPlot={afterPlot}
        onHover={hover}
        onClick={click}
        onRelayout={relayout}
        onUnhover={unhover}
        onSelected={selected}
        // onBeforeHover={beforeHover}
      />
    </div>
  );
}

export default App;
