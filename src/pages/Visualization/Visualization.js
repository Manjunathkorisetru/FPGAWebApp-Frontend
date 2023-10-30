import React from "react";
import DataViz from "../../components/VisualizationComponent/DataViz";
//import Xilinx from "../components/DataViz/Xilinx";
//import IntelVsXilinxViz from "../components/DataViz/IntelVsXilinxViz";

import { VizContainer } from "./Visualization.styled";

export default function Visualization() {
  return (
    <>
      <VizContainer>
        <DataViz />
      </VizContainer>
    </>
  );
}
