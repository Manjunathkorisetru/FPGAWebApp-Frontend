import React from "react";
import { Circle, CustomLegendContainer, LegendText } from "./DataViz.styled";

function CustomLegend(props) {
  return (
    <CustomLegendContainer>
      {props.fam && (
        <>
          <Circle color={props.famColor} /> <LegendText>{props.fam}</LegendText>
        </>
      )}

      {props.fam1 && (
        <>
          <Circle color={props.fam1Color} />
          <LegendText>{props.fam1}</LegendText>
        </>
      )}

      {props.fam2 && (
        <>
          <Circle color={props.fam2Color} />
          <LegendText>{props.fam2}</LegendText>
        </>
      )}
      {props.family && (
        <>
          <Circle color={props.familyColor} />{" "}
          <LegendText>{props.family}</LegendText>
        </>
      )}

      {props.family1 && (
        <>
          <Circle color={props.family1Color} />
          <LegendText>{props.family1}</LegendText>
        </>
      )}

      {props.family2 && (
        <>
          <Circle color={props.family2Color} />
          <LegendText>{props.family2}</LegendText>
        </>
      )}
    </CustomLegendContainer>
  );
}

export default CustomLegend;
