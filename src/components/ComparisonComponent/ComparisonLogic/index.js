import React, { useEffect, useState } from "react";
import axios from "axios";
import * as ReactBootStrap from "react-bootstrap";
import RenderDevices from "./RenderDevices";

export default function ComparisonLogic(props) {
  const [intel1, setIntel1] = useState([]);
  const [intel2, setIntel2] = useState([]);
  const [intel3, setIntel3] = useState([]);

  const variant = props.varia;
  const fam = props.family;
  const variant2 = props.varia2;
  const fam2 = props.family2;
  const variant3 = props.varia3;
  const fam3 = props.family3;
  const devices = props.devices;
  const devices2 = props.devices2;
  const devices3 = props.devices3;
  //console.log(devices2.length);

  const fetchIntel1List = async (variant, fam, devices) => {
    const { data } = await axios.get("http://localhost:4000/compare", {
      params: {
        variant: variant,
        family: fam,
        device: devices,
      },
    });
    setIntel1(data);
  };

  const fetchIntel2List = async (variant2, fam2, devices2) => {
    const { data } = await axios.get("http://localhost:4000/compare", {
      params: {
        variant: variant2,
        family: fam2,
        device: devices2,
      },
    });
    setIntel2(data);
  };

  const fetchIntel3List = async (variant3, fam3, devices3) => {
    const { data } = await axios.get("http://localhost:4000/compare", {
      params: {
        variant: variant3,
        family: fam3,
        device: devices3,
      },
    });
    setIntel3(data);
  };

  useEffect(() => {
    if (fam) {
      fetchIntel1List(variant, fam, devices);
    }

    if (fam2) {
      fetchIntel2List(variant2, fam2, devices2);
    }
    if (fam3) {
      fetchIntel3List(variant3, fam3, devices3);
    }
  }, [
    variant,
    variant2,
    fam,
    fam2,
    devices2,
    devices,
    variant3,
    fam3,
    devices3,
  ]);

  let Intel1 = [];
  intel1.map((item) => (Intel1 = item));

  let Intel2 = [];
  intel2.map((item) => (Intel2 = item));

  let Intel3 = [];
  intel3.map((item) => (Intel3 = item));

  let Intel1Keys = Object.keys(Intel1);
  let Intel2Keys = Object.keys(Intel2);
  let Intel3Keys = Object.keys(Intel3);

  let commonkeys;

  if (devices2.length === 1) {
    commonkeys = Intel1Keys.filter((x) => Intel3Keys.includes(x));
  } else if (devices3.length === 1) {
    commonkeys = Intel1Keys.filter((x) => Intel2Keys.includes(x));
  } else if (devices2) {
    commonkeys = Intel1Keys.filter((x) => Intel2Keys.includes(x));
  } else {
    let intel2intel3 = Intel2Keys.filter((x) => Intel3Keys.includes(x));
    let intel1intel2 = Intel1Keys.filter((x) => Intel2Keys.includes(x));
    commonkeys = intel2intel3.filter((x) => intel1intel2.includes(x));
  }

  let common23Keys;
  if (devices2 && devices3) {
    common23Keys = Intel2Keys.filter((x) => Intel3Keys.includes(x));
  }
  let common13Keys;
  if (devices && devices3) {
    common13Keys = Intel1Keys.filter((x) => Intel3Keys.includes(x));
  }

  let Intel1KeysOnly = Intel1Keys.filter((x) => !Intel2Keys.includes(x));

  Intel1KeysOnly = Intel1KeysOnly.filter((x) => !Intel3Keys.includes(x));

  let Intel2KeysOnly = Intel2Keys.filter((x) => !Intel1Keys.includes(x));

  Intel2KeysOnly = Intel2KeysOnly.filter((x) => !Intel3Keys.includes(x));

  let Intel3KeysOnly = Intel3Keys.filter((x) => !Intel2Keys.includes(x));

  Intel3KeysOnly = Intel3KeysOnly.filter((x) => !Intel1Keys.includes(x));

  const CommonConditions = (item) => {
    return (
      item !== "M20KMemory" &&
      item !== "M20KMemoryBlocks" &&
      item !== "MLABMemory" &&
      item !== "M144KMemoryBlocks" &&
      item !== "Registers" &&
      item !== "logicElements" &&
      item !== "ALMs" &&
      item !== "M10KMemoryBlocks" &&
      item !== "M10KMemory" &&
      item !== "GXTTransceiverCount" &&
      item !== "GXTransceiverCount" &&
      item !== "transceiverCount6_5536Gbps" &&
      item !== "transceiverCount10_3125Gbps" &&
      item !== "transceiverCount12_5Gbps" &&
      item !== "transceiverCount17_4Gbps" &&
      item !== "transceiverCount25_78Gbps" &&
      item !== "transceiverTotalCount" &&
      item !== "slices" &&
      item !== "logicCells" &&
      item !== "systemLogicCells" &&
      item !== "DSPSlices" &&
      item !== "GTHTransceivers" &&
      item !== "GTYTransceivers" &&
      item !== "transceivers" &&
      item !== "embeddedmemory"
    );
  };

  const LogicRegistersConditions = (item) => {
    return (
      item === "Registers" ||
      item === "logicElements" ||
      item === "ALMs" ||
      item === "slices" ||
      item === "logicCells" ||
      item === "DSPSlices" ||
      item === "systemLogicCells"
    );
  };

  const EmbeddedMemoryConditions = (item) => {
    return (
      item === "M20KMemory" ||
      item === "M20KMemoryBlocks" ||
      item === "MLABMemory" ||
      item === "M144KMemoryBlocks" ||
      item === "M10KMemory" ||
      item === "M10KMemoryBlocks" ||
      item === "embeddedmemory"
    );
  };

  const TransceiversConditions = (item) => {
    return (
      item === "transceiverTotalCount" ||
      item === "GXTTransceiverCount" ||
      item === "GXTransceiverCount" ||
      item === "transceiverCount6_5536Gbps" ||
      item === "transceiverCount10_3125Gbps" ||
      item === "transceiverCount12_5Gbps" ||
      item === "transceiverCount17_4Gbps" ||
      item === "transceiverCount25_78Gbps" ||
      item === "GTHTransceivers" ||
      item === "GTYTransceivers" ||
      item === "transceivers"
    );
  };
  return (
    <div>
      <ReactBootStrap.Table striped bordered hover variant="primary">
        <thead>
          <tr>
            {devices && <th className="table-dark">Specifications</th>}
            {devices && <th className="table-dark">Device 1</th>}
            {devices2 ? (
              <th className="table-dark">Device 2</th>
            ) : (
              <th className="table-dark"></th>
            )}
            {devices3 ? (
              <th className="table-dark">Device 3</th>
            ) : (
              <th className="table-dark"></th>
            )}
          </tr>
        </thead>
        <tbody>
          {commonkeys.map((item) => (
            <tr key={item}>
              {CommonConditions(item) && (
                <RenderDevices
                  Intel1={Intel1}
                  Intel2={Intel2}
                  Intel3={Intel3}
                  Devices2={devices2}
                  Devices3={devices3}
                  item={item}
                />
              )}
            </tr>
          ))}
          {devices &&
            devices3 &&
            !devices2 &&
            common13Keys.map((item) => (
              <tr key={item}>
                {CommonConditions(item) && (
                  <RenderDevices
                    Intel1={Intel1}
                    Intel2={Intel2}
                    Intel3={Intel3}
                    Devices2={devices2}
                    Devices3={devices3}
                    item={item}
                  />
                )}
              </tr>
            ))}
          {Intel1KeysOnly.map((item) => (
            <tr key={item}>
              {CommonConditions(item) && (
                <RenderDevices
                  Intel1={Intel1}
                  Intel2={Intel2}
                  Intel3={Intel3}
                  Devices2={devices2}
                  Devices3={devices3}
                  item={item}
                />
              )}
            </tr>
          ))}
          {Intel2KeysOnly.map((item) => (
            <tr key={item}>
              {CommonConditions(item) && (
                <RenderDevices
                  Intel1={Intel1}
                  Intel2={Intel2}
                  Intel3={Intel3}
                  Devices2={devices2}
                  Devices3={devices3}
                  item={item}
                />
              )}
            </tr>
          ))}
          {Intel3KeysOnly.map((item) => (
            <tr key={item}>
              {CommonConditions(item) && (
                <RenderDevices
                  Intel1={Intel1}
                  Intel2={Intel2}
                  Intel3={Intel3}
                  Devices2={devices2}
                  Devices3={devices3}
                  item={item}
                />
              )}
            </tr>
          ))}
          {(devices || devices2 || devices3) && (
            <tr className="table-danger">
              <th>Logic and Registers</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          )}
          {commonkeys.map((item) => (
            <tr key={item}>
              {LogicRegistersConditions(item) && (
                <RenderDevices
                  Intel1={Intel1}
                  Intel2={Intel2}
                  Intel3={Intel3}
                  Devices2={devices2}
                  Devices3={devices3}
                  item={item}
                />
              )}
            </tr>
          ))}
          {devices &&
            devices3 &&
            !devices2 &&
            common13Keys.map((item) => (
              <tr key={item}>
                {LogicRegistersConditions(item) && (
                  <RenderDevices
                    Intel1={Intel1}
                    Intel2={Intel2}
                    Intel3={Intel3}
                    Devices2={devices2}
                    Devices3={devices3}
                    item={item}
                  />
                )}
              </tr>
            ))}
          {Intel1KeysOnly.map((item) => (
            <tr key={item}>
              {LogicRegistersConditions(item) && (
                <RenderDevices
                  Intel1={Intel1}
                  Intel2={Intel2}
                  Intel3={Intel3}
                  Devices2={devices2}
                  Devices3={devices3}
                  item={item}
                />
              )}
            </tr>
          ))}
          {Intel2KeysOnly.map((item) => (
            <tr key={item}>
              {LogicRegistersConditions(item) && (
                <RenderDevices
                  Intel1={Intel1}
                  Intel2={Intel2}
                  Intel3={Intel3}
                  Devices2={devices2}
                  Devices3={devices3}
                  item={item}
                />
              )}
            </tr>
          ))}
          {Intel3KeysOnly.map((item) => (
            <tr key={item}>
              {LogicRegistersConditions(item) && (
                <RenderDevices
                  Intel1={Intel1}
                  Intel2={Intel2}
                  Intel3={Intel3}
                  Devices2={devices2}
                  Devices3={devices3}
                  item={item}
                />
              )}
            </tr>
          ))}
          {(devices || devices2 || devices3) && (
            <tr className="table-danger">
              <th>Embedded Group</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          )}
          {commonkeys.map((item) => (
            <tr key={item}>
              {EmbeddedMemoryConditions(item) && (
                <RenderDevices
                  Intel1={Intel1}
                  Intel2={Intel2}
                  Intel3={Intel3}
                  Devices2={devices2}
                  Devices3={devices3}
                  item={item}
                />
              )}
            </tr>
          ))}
          {devices &&
            devices3 &&
            !devices2 &&
            common13Keys.map((item) => (
              <tr key={item}>
                {EmbeddedMemoryConditions(item) && (
                  <RenderDevices
                    Intel1={Intel1}
                    Intel2={Intel2}
                    Intel3={Intel3}
                    Devices2={devices2}
                    Devices3={devices3}
                    item={item}
                  />
                )}
              </tr>
            ))}
          {Intel1KeysOnly.map((item) => (
            <tr key={item}>
              {EmbeddedMemoryConditions(item) && (
                <RenderDevices
                  Intel1={Intel1}
                  Intel2={Intel2}
                  Intel3={Intel3}
                  Devices2={devices2}
                  Devices3={devices3}
                  item={item}
                />
              )}
            </tr>
          ))}
          {Intel2KeysOnly.map((item) => (
            <tr key={item}>
              {EmbeddedMemoryConditions(item) && (
                <RenderDevices
                  Intel1={Intel1}
                  Intel2={Intel2}
                  Intel3={Intel3}
                  Devices2={devices2}
                  Devices3={devices3}
                  item={item}
                />
              )}
            </tr>
          ))}
          {Intel3KeysOnly.map((item) => (
            <tr key={item}>
              {EmbeddedMemoryConditions(item) && (
                <RenderDevices
                  Intel1={Intel1}
                  Intel2={Intel2}
                  Intel3={Intel3}
                  Devices2={devices2}
                  Devices3={devices3}
                  item={item}
                />
              )}
            </tr>
          ))}
          {(devices || devices2 || devices3) && (
            <tr className="table-danger">
              <th>Transceivers</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          )}
          {commonkeys.map((item) => (
            <tr key={item}>
              {TransceiversConditions(item) && (
                <RenderDevices
                  Intel1={Intel1}
                  Intel2={Intel2}
                  Intel3={Intel3}
                  Devices2={devices2}
                  Devices3={devices3}
                  item={item}
                />
              )}
            </tr>
          ))}
          {devices2 &&
            devices3 &&
            common23Keys.map((item) => (
              <tr key={item}>
                {TransceiversConditions(item) &&
                  item !== "transceiverTotalCount" && (
                    <RenderDevices
                      Intel1={Intel1}
                      Intel2={Intel2}
                      Intel3={Intel3}
                      Devices2={devices2}
                      Devices3={devices3}
                      item={item}
                    />
                  )}
              </tr>
            ))}
          {devices &&
            devices3 &&
            common13Keys.map((item) => (
              <tr key={item}>
                {TransceiversConditions(item) &&
                  item !== "transceiverTotalCount" && (
                    <RenderDevices
                      Intel1={Intel1}
                      Intel2={Intel2}
                      Intel3={Intel3}
                      Devices2={devices2}
                      Devices3={devices3}
                      item={item}
                    />
                  )}
              </tr>
            ))}
          {Intel1KeysOnly.map((item) => (
            <tr key={item}>
              {TransceiversConditions(item) && (
                <RenderDevices
                  Intel1={Intel1}
                  Intel2={Intel2}
                  Intel3={Intel3}
                  Devices2={devices2}
                  Devices3={devices3}
                  item={item}
                />
              )}
            </tr>
          ))}
          {Intel2KeysOnly.map((item) => (
            <tr key={item}>
              {TransceiversConditions(item) && (
                <RenderDevices
                  Intel1={Intel1}
                  Intel2={Intel2}
                  Intel3={Intel3}
                  Devices2={devices2}
                  Devices3={devices3}
                  item={item}
                />
              )}
            </tr>
          ))}
          {Intel3KeysOnly.map((item) => (
            <tr key={item}>
              {TransceiversConditions(item) && (
                <RenderDevices
                  Intel1={Intel1}
                  Intel2={Intel2}
                  Intel3={Intel3}
                  Devices2={devices2}
                  Devices3={devices3}
                  item={item}
                />
              )}
            </tr>
          ))}
        </tbody>
      </ReactBootStrap.Table>
    </div>
  );
}
