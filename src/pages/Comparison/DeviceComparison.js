import React from "react";

import {
  Container1,
  OuterContainer,
  FilterContainer,
} from "./DeviceComparison.styled";

import ComparisonFilter from "../../components/ComparisonComponent/IntelVsIntelComparisonFilter";

export default function DeviceComparison() {
  return (
    <OuterContainer>
      <FilterContainer>
        <Container1>
          <ComparisonFilter />
        </Container1>
      </FilterContainer>
    </OuterContainer>
  );
}
