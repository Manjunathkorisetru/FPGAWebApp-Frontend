import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { CSVLink } from "react-csv";

export default function KintexUltraScale(props) {
  return (
    <div>
      <ReactBootStrap.Table striped bordered hover variant="primary">
        <thead>
          <tr>
            <th>Index</th>
            <th>Devices</th>
            <th>System Logic Cells</th>
            <th>CLB Flip Flops</th>
            <th>Max Distributed RAM (Mb)</th>
            <th>DSP Slices</th>
            <th>Total Block RAM (Mb)</th>
            <th> Transceivers</th>
            <th>CLB LUTs</th>
            <th>PCIe Hard IP blocks</th>
          </tr>
        </thead>
        <tbody>
          {props.posts.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.device}</td>
              <td>{item.systemLogicCells}</td>
              <td>{item.CLBFlipFlops}</td>
              <td>{item.MaxDistributedRAM}</td>
              <td>{item.DSPSlices}</td>
              <td>{item.totalBlockRAM}</td>
              <td>{item.transceivers}</td>
              <td>{item.CLBLUTs}</td>
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
