import React, { useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { TH, TD, Button } from "../XilinxTable.styled";
import { CSVLink } from "react-csv";

export default function VirtexUltraScale(props) {
  const [transceiverFlag, setTransceiverFlag] = useState(false);
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

            <th>
              {!transceiverFlag ? (
                <Button
                  onClick={() => {
                    setTransceiverFlag(!transceiverFlag);
                  }}
                >
                  Transcievers Total <AiOutlineRight />
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    setTransceiverFlag(!transceiverFlag);
                  }}
                >
                  Transcievers Total <AiOutlineLeft />
                </Button>
              )}
            </th>
            {transceiverFlag ? (
              <>
                <TH colSpan="2">
                  Transceivers
                  <TH>GTH Transceivers </TH>
                  <TH>GTY Transceivers </TH>
                </TH>
              </>
            ) : (
              <></>
            )}

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
              {transceiverFlag && (
                <>
                  <TD>{item.GTHTransceivers}</TD>
                  <TD>{item.GTYTransceivers}</TD>
                </>
              )}

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
