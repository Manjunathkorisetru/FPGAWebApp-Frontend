import React, { useState } from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { TH, TD, Button } from "../IntelTable.styled";
import * as ReactBootStrap from "react-bootstrap";
import { CSVLink } from "react-csv";

function Stratix10GX(props) {
  const [transceiverFlag, setTransceiverFlag] = useState(false);
  const [embedded, setEmbedded] = useState(false);
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
            <th>
              {!embedded ? (
                <Button
                  onClick={() => {
                    setEmbedded(!embedded);
                  }}
                >
                  M20K Memory Blocks <AiOutlineRight />
                </Button>
              ) : (
                <></>
              )}
            </th>
            {embedded ? (
              <>
                <TH colSpan="3">
                  Embedded Memory
                  <TH>
                    <Button
                      onClick={() => {
                        setEmbedded(!embedded);
                      }}
                    >
                      M20K Memory Blocks <AiOutlineLeft />
                    </Button>
                  </TH>
                  <TH>M20K Memory</TH>
                  <TH>MLAB memory</TH>
                </TH>
              </>
            ) : (
              <></>
            )}

            <th>DSP blocks</th>
            <th>18*18 Multipliers</th>
            <th>TMACS</th>
            <th>TFLOPS</th>
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
                  <TH>GXT transceivers (28.3Gbps) </TH>
                  <TH>GX Transceivers (17.4Gbps)</TH>
                </TH>
              </>
            ) : (
              <></>
            )}
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
              {!embedded ? (
                <>
                  <td>{item.M20KMemoryBlocks}</td>
                </>
              ) : (
                <>
                  <td></td>
                </>
              )}
              {embedded && (
                <>
                  <TD>{item.M20KMemoryBlocks}</TD>
                  <TD>{item.M20KMemory}</TD>
                  <TD>{item.MLABMemory}</TD>
                </>
              )}
              <td>{item.DSPBlocks}</td>
              <td>{item.Multipliers}</td>
              <td>{item.TMACS}</td>
              <td>{item.TFLOPS}</td>
              <td>{item.transceiverTotalCount}</td>
              {transceiverFlag && (
                <>
                  <TD>{item.GXTTransceiverCount}</TD>
                  <TD>{item.GXTransceiverCount}</TD>
                </>
              )}
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

export default Stratix10GX;
