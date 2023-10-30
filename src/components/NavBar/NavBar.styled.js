import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 85px;
  z-index: 1;
  width: auto;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  background: black;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  :hover {
    color: skyblue;
    border-bottom: ridge;
  }
  &.${(props) => props.activeClassName} {
    border-style: inset;
    color: whitesmoke;
    background-color: dimgray;
    //font-weight: bold;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  list-style: none;
  text-align: center;
`;

export const Header = styled.h3``;
