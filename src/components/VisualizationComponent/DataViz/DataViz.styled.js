import styled from "styled-components";

export const Container = styled.div`
  top: 3vh;
  margin: 0 auto;
  background-color: whitesmoke;
  //border-style: ridge;
  width: 1300px;
`;

export const SpecificationMainContainer = styled.div`
  height: 5vh;
  display: flex;
  margin-top: 1vh;
  //border-style: ridge;
`;

export const SpecificationSecondContainer = styled.div`
  height: 5vh;
  /* display: flex; */
  margin-top: 1vh;
`;

export const VariantSpecContainer = styled.div`
  display: flex;
`;
export const LinkButton = styled.a`
  position: absolute;
  top: 12%;
  left: 150%;
  background-color: #2299ae;
  border-radius: 10px;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  :hover {
    background: orangered;
    color: whitesmoke;
  }
`;

export const MainFilterContainer = styled.div`
  margin-top: 3vh;
  display: flex;
  justify-content: center;
  gap: 10rem;
  //border-style: ridge;
  height: 10vh;
`;

export const FilterContainer = styled.div`
  height: 5vh;
  display: flex;
  margin-top: 1vh;
  align-items: baseline;
`;

export const Circle = styled.span`
  height: 15px;
  width: 15px;
  margin-left: 20px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  display: inline-block;
`;

export const CustomLegendContainer = styled.div`
  background-color: white;
`;

export const LegendText = styled.span`
  margin-left: 5px;
`;

export const SecondFamilyFilterContainer = styled.div`
  height: 10vh;
  margin-top: 10px;
  //border-style: ridge;
`;

export const ThirdFamilyFilterContainer = styled.div`
  height: 10vh;
  // width: 50%;
  margin-top: 10px;
  //border-style: ridge;
`;

export const SecondThirdFamilyMainContainer = styled.div`
  margin-top: 3vh;
  display: flex;
  justify-content: center;
  gap: 10rem;
  //border-style: ridge;
`;
