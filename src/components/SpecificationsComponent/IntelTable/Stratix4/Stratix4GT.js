import React, { useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { TH, TD, Button } from "../IntelTable.styled";
import { CSVLink } from "react-csv";

function Stratix4GT(props) {
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
                  Embedded Memory
                  <AiOutlineRight />
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
                      Embedded Memory <AiOutlineLeft />
                    </Button>
                  </TH>
                  <TH>M144K Memory blocks</TH>
                  <TH>MLAB memory</TH>
                </TH>
              </>
            ) : (
              <></>
            )}
            <th>Multipliers</th>
            <th>PCIe Hard IP blocks</th>
            <th>Transcievers</th>
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
                  <td>{item.embeddedmemory}</td>
                </>
              ) : (
                <>
                  <td></td>
                </>
              )}
              {embedded && (
                <>
                  <TD>{item.embeddedmemory}</TD>
                  <TD>{item.M144KMemoryBlocks}</TD>
                  <TD>{item.MLABMemory}</TD>
                </>
              )}
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

export default Stratix4GT;
