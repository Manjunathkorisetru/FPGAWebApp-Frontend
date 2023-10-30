import React, { useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { TH, TD, Button } from "../IntelTable.styled";
import { CSVLink } from "react-csv";

function Arria10(props) {
  const [transceiverFlag, setTransceiverFlag] = useState(false);
  const [embedded, setEmbedded] = useState(false);
  let Arria10List = [];
  props.posts.map((item) => (Arria10List = item));
  let Arria10Keys = Object.keys(Arria10List);

  const UngroupedKeys = [
    "family",
    "series",
    "manufacturer",
    "transceiverTotalCount",
    "transceiverCount17_4Gbps",
    "transceiverCount25_78Gbps",
    "M20KMemoryBlocks",
    "M20KMemory",
    "MLABMemory",
  ];

  let ungroupedindex;
  UngroupedKeys.forEach((item) => {
    ungroupedindex = Arria10Keys.indexOf(item);
    if (ungroupedindex > -1) {
      Arria10Keys.splice(ungroupedindex, 1);
    }
  });

  console.log(Arria10Keys);

  return (
    <div>
      <ReactBootStrap.Table striped bordered hover variant="primary">
        <thead>
          <tr>
            {Arria10Keys.map((item) => (
              <th>{item}</th>
            ))}
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
                  <TH>Transceiver Count(17.4 Gbps) </TH>
                  <TH>Transceiver Count (25.78 Gbps)</TH>
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
              <td>{item.logicElements}</td>
              <td>{item.ALMs}</td>
              <td>{item.Registers}</td>
              <td>{item.Multipliers}</td>
              <td>{item.PCIeHardIPBlocks}</td>
              <td>{item.yearOfIntroduction}</td>
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
              <td>{item.transceiverTotalCount}</td>
              {transceiverFlag && (
                <>
                  <TD>{item.transceiverCount17_4Gbps}</TD>
                  <TD>{item.transceiverCount25_78Gbps}</TD>
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

export default Arria10;
