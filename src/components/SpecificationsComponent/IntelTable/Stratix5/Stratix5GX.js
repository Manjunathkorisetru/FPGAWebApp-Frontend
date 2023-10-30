import React, { useState } from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import * as ReactBootStrap from "react-bootstrap";
import { TH, TD, Button } from "../IntelTable.styled";
import { CSVLink } from "react-csv";

function Stratix5GX(props) {
  const [embedded, setEmbedded] = useState(false);
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
                <TH colSpan="2">
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
                  <TH>MLAB memory</TH>
                </TH>
              </>
            ) : (
              <></>
            )}

            <th>DSP Blocks</th>
            <th>Multipliers</th>
            <th>PCIe Hard IP Blocks </th>
            <th>Transceivers </th>
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
                  <TD>{item.MLABMemory}</TD>
                </>
              )}
              <td>{item.DSPBlocks}</td>

              <td>{item.Multipliers}</td>
              <td>{item.PCIeHardIPBlocks}</td>
              <td>{item.transceiverTotalCount}</td>
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

export default Stratix5GX;
