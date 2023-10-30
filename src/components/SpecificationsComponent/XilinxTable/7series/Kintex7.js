import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { CSVLink } from "react-csv";

function Kintex7(props) {
  return (
    <div>
      <ReactBootStrap.Table striped bordered hover variant="primary">
        <thead>
          <tr>
            <th>Index</th>
            <th>Devices</th>
            <th>Slices</th>
            <th>Logic Cells</th>
            <th>CLB Flip Flops</th>
            <th>Max Distributed RAM (Mb)</th>
            <th>DSP48 Slices</th>
            <th>Total Block RAM (Mb)</th>
            <th>PCIe Hard IP blocks</th>
          </tr>
        </thead>
        <tbody>
          {props.posts.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.device}</td>
              <td>{item.slices}</td>
              <td>{item.logicCells}</td>
              <td>{item.CLBFlipFlops}</td>
              <td>{item.MaxDistributedRAM}</td>
              <td>{item.DSPSlices}</td>
              <td>{item.totalBlockRAM}</td>
              <td>{item.PCIeHardIPBlocks}</td>
            </tr>
          ))}
        </tbody>
      </ReactBootStrap.Table>

      <CSVLink data={props.posts} className="btn btn-primary" target="_blank">
        Download CSV
      </CSVLink>
    </div>
  );
}

export default Kintex7;
