import React, { useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { CSVLink } from "react-csv";
import { TH, TD, Button } from "../IntelTable.styled";

function Arria5(props) {
  let Arria5List = [];
  props.posts.map((item) => (Arria5List = item));
  let Arria5Keys = Object.keys(Arria5List);

  const [transceiverFlag, setTransceiverFlag] = useState(false);
  const [embedded, setEmbedded] = useState(false);

  const UngroupedKeys = [
    "family",
    "series",
    "manufacturer",
    "transceiverTotalCount",
    "transceiverCount6_5536Gbps",
    "transceiverCount10_3125Gbps",
    "transceiverCount12_5Gbps",
    "M20KMemoryBlocks",
    "M10KMemory",
    "M20KMemory",
    "MLABMemory",
    "M10KMemoryBlocks",
    "MemoryBlocksTotal",
  ];

  let ungroupedindex;
  UngroupedKeys.forEach((item) => {
    ungroupedindex = Arria5Keys.indexOf(item);
    if (ungroupedindex > -1) {
      Arria5Keys.splice(ungroupedindex, 1);
    }
  });

  return (
    <div>
      <ReactBootStrap.Table striped bordered hover variant="primary">
        <thead>
          <tr>
            {Arria5Keys.map((item) => (
              <th>{item}</th>
            ))}

            {/**Transceiver Group */}
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
                  <TH>Transceiver Count (6.5536 Gbps) </TH>
                  <TH>Transceiver Count (10.3125 Gbps)</TH>
                  <TH>Transceiver Count (12.5 Gbps)</TH>
                </TH>
              </>
            ) : (
              <></>
            )}

            {/**Embedded Memory Group */}
            <th>
              {!embedded ? (
                <Button
                  onClick={() => {
                    setEmbedded(!embedded);
                  }}
                >
                  Memory blocks Total <AiOutlineRight />
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    setEmbedded(!embedded);
                  }}
                >
                  Memory blocks Total <AiOutlineLeft />
                </Button>
              )}
            </th>
            {embedded ? (
              <>
                <TH colSpan="5">
                  Embedded Memory
                  <TH>M20K Memory Blocks</TH>
                  <TH>M10K Memory blocks</TH>
                  <TH>M20K Memory</TH>
                  <TH>M10K Memory</TH>
                  <TH>MLAB memory</TH>
                </TH>
              </>
            ) : (
              <></>
            )}
          </tr>
        </thead>
        <tbody>
          {props.posts.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.variant}</td>
              <td>{item.device}</td>
              <td>{item.Registers}</td>
              <td>{item.logicElements}</td>
              <td>{item.ALMs}</td>
              <td>{item.DSPBlocks}</td>
              <td>{item.Multipliers}</td>
              <td>{item.PCIeHardIPBlocks}</td>
              <td>{item.yearOfIntroduction}</td>
              <td>{item.transceiverTotalCount}</td>
              {/**Add new specifications here */}

              {/**Transceiver Group */}
              {transceiverFlag && (
                <>
                  <TD>{item.transceiverCount6_5536Gbps}</TD>
                  <TD>{item.transceiverCount10_3125Gbps}</TD>
                  <TD>{item.transceiverCount12_5Gbps}</TD>
                </>
              )}

              {/**Embedded Memory Group */}
              <td>{item.MemoryBlocksTotal}</td>
              {embedded && (
                <>
                  <TD>{item.M20KMemoryBlocks}</TD>
                  <TD>{item.M10KMemoryBlocks}</TD>
                  <TD>{item.M20KMemory}</TD>
                  <TD>{item.M10KMemory}</TD>
                  <TD>{item.MLABMemory}</TD>
                </>
              )}
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

export default Arria5;
