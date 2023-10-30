import React, { useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { TH, TD, Button } from "../IntelTable.styled";
import { CSVLink } from "react-csv";

function Stratix10NX(props) {
  const [transceiverFlag, setTransceiverFlag] = useState(false);

  return (
    <div>
      <ReactBootStrap.Table striped bordered hover variant="primary">
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
            <th>HBM2 Memory Size</th>
            <th>AI Tensor Block</th>
            <th>PCIe Hard IP blocks</th>
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
                <TH colSpan="3">
                  Transceivers
                  <TH>GXE Transceiver Count (28.9 Gbps)</TH>
                  <TH>GXT Transceiver Count (28.3 Gbps)</TH>
                  <TH>GX Transceiver Count (17.4 Gbps)</TH>
                </TH>
              </>
            ) : (
              <></>
            )}
            <th>Year of Introduction</th>
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
              <td>{item.HBM2MemorySize}</td>
              <td>{item.AITensorBlock}</td>
              <td>{item.PCIeHardIPBlocks}</td>
              <td>{item.transceiverTotalCount}</td>
              {transceiverFlag && (
                <>
                  <TD>{item.GXETransceiverCount}</TD>
                  <TD>{item.GXTTransceiverCount}</TD>
                  <TD>{item.GXTransceiverCount}</TD>
                </>
              )}

              <td>{item.yearOfIntroduction}</td>
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

export default Stratix10NX;
