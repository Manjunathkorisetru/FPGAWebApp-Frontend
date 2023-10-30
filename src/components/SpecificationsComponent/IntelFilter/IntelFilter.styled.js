import styled from "styled-components";

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

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
