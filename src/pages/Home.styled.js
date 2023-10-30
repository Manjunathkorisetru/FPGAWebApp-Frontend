import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MainSection = styled.div`
  width: 100%;
  height: 80vh;
  background-color: white;
`;

export const Header = styled.h1`
  margin-top: 5vh;
  font-family: sans-serif;
  font-weight: bold;
`;

export const Content = styled.p`
  font-family: sans-serif;
  margin: 30px;
  font-size: 20px;
`;

export const CardContainer = styled.div`
  margin-top: 10vh;
  width: 100;
  height: 50vh;
  display: flex;
  justify-content: center;
  gap: 5rem;
  align-items: center;
`;

export const Card = styled.div`
  width: 30vh;
  height: 40vh;
  box-shadow: 5px 5px 10px 5px rgba(103, 171, 240, 0.8);
  display: flex;
  justify-content: flex-end;
  position: "relative";
  background-image: url("specifications.jpg");
`;

export const CardContent = styled.span`
  width: 30vh;
  height: 5vh;
  font-weight: bold;
  color: black;
  font-size: 25px;
  margin-top: 60%;
`;

export const NavLinkContainer = styled(NavLink)`
  cursor: pointer;
  text-decoration: none;
  :hover * {
    background-color: #2b4242;
    color: whitesmoke;
  }
`;

export const FooterContainer = styled.div`
  width: 100%;
  height: 40vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  margin-top: 10vh;
`;

export const FooterContent = styled.div`
  width: 50vh;
  height: 30vh;
`;

export const FooterHeader = styled.h6`
  color: white;
  font-family: sans-serif;
  text-align: left;
`;

export const FooterContactHeader = styled.h5`
  color: white;
  font-family: sans-serif;
  text-align: left;
`;

//export const Image = styled.img`
//  width: 30vh;
//  height: 40vh;
//  position: "absolute";
// top: 20;
//`;
