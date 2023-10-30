import React from "react";

export default function RenderDevices(props) {
  return (
    <>
      <th>{props.item}</th>
      <td>{props.Intel1[props.item]}</td>
      {props.Devices2 ? <td>{props.Intel2[props.item]}</td> : <td></td>}
      {props.Devices3 ? <td>{props.Intel3[props.item]}</td> : <td></td>}
    </>
  );
}
