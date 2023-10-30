import React from "react";
import { Nav, NavLink, NavMenu, Header } from "./NavBar.styled";

function NavBar() {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <Header>FPGA Catalogue</Header>
        </NavLink>
        <NavMenu>
          <NavLink to="/SpecificationsPage" activeClassName="any" exact>
            Specifications
          </NavLink>
          <NavLink to="/comparison" activeClassName="any" exact>
            Comparison
          </NavLink>
          <NavLink to="/VisualizationPage" activeClassName="any" exact>
            Visualization
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
}

export default NavBar;
