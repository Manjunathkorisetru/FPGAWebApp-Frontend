import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { CSVLink } from "react-csv";

function Stratix10TX(props) {
  return (
    <div>
      <ReactBootStrap.Table
        striped
        bordered
        hover
        variant="primary"
        style={{ overflow: "auto", display: "block", tableLayout: "auto" }}
      >
        <thead>
          <tr>
            <th>Index</th>
            <th>Devices</th>
            <th>Variant</th>
            <th>Registers</th>
            <th>Logic Elements</th>
            <th>ALMs</th>
            <th>M20K Memory blocks</th>
            <th>MLAB memory</th>
            <th>DSP blocks</th>
            <th>18*18 Multipliers</th>
            <th>TMACS</th>
            <th>TFLOPS</th>
            <th>Transcievers Total</th>
            <th>PCIe Hard IP blocks</th>
            <th>Year of Introduction</th>
            <th>Published Links</th>
          </tr>
        </thead>
        <tbody>
          {props.posts.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.device}</td>
              <td>{item.variant}</td>
              <td>{item.Registers}</td>
              <td>{item.logicElements}</td>
              <td>{item.ALMs}</td>
              <td>{item.M20KMemoryBlocks}</td>
              <td>{item.MLABMemory}</td>
              <td>{item.DSPBlocks}</td>
              <td>{item.Multipliers}</td>
              <td>{item.TMACS}</td>
              <td>{item.TFLOPS}</td>
              <td>{item.transceiverTotalCount}</td>
              <td>{item.PCIeHardIPBlocks}</td>
              <td>{item.yearOfIntroduction}</td>
              <td>{item.published}</td>
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

export default Stratix10TX;
