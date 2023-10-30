import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  MainSection,
  Header,
  Content,
  CardContainer,
  Card,
  CardContent,
  NavLinkContainer,
  FooterContainer,
  FooterContent,
  FooterHeader,
  FooterContactHeader,
} from "./Home.styled";

//import SpecificationsImage from "../graphics/specifications.jpg";

function Home() {
  const [count, setCount] = useState();

  const fetchCountData = async () => {
    const { data } = await axios.get(
      "https://mysterious-galoshes-moth.cyclic.app/count"
    );

    setCount(data);
  };

  useEffect(() => {
    fetchCountData();
  }, []);

  return (
    <>
      <MainSection>
        <Header>Welcome to the FPGA Catalogue! </Header>
        <Content>
          You can browse FPGA devices and its specifications ( Intel and Xilinx
          manufacturers)
        </Content>
        <Content>
          FPGA Catalogue database consists of {count} devices; You can compare
          devices in a tabular format and visualize them
        </Content>
        <CardContainer>
          <NavLinkContainer to="/SpecificationsPage" exact>
            <Card>
              <CardContent>Specifications</CardContent>
            </Card>
          </NavLinkContainer>
          <NavLinkContainer to="/comparison" exact>
            <Card>
              <CardContent>Comparison</CardContent>
            </Card>
          </NavLinkContainer>
          <NavLinkContainer to="/intelvis" exact>
            <Card>
              <CardContent>Visualization</CardContent>
            </Card>
          </NavLinkContainer>
        </CardContainer>
      </MainSection>
      <FooterContainer>
        <FooterContent>
          <FooterHeader>FPGA Catalogue</FooterHeader>
        </FooterContent>
        <FooterContent>
          <FooterContactHeader>CONTACT</FooterContactHeader>
          <FooterHeader>
            High-Performance IT Systems Research Group
          </FooterHeader>
          <FooterHeader>University of Paderborn</FooterHeader>
        </FooterContent>
      </FooterContainer>
    </>
  );
}

export default Home;
