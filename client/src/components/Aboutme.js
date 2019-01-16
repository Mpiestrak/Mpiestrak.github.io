import React, { Component } from "react";
import styled from "styled-components";
import img from "../Me.jpg";

const Me = styled.img`
  max-height: auto;
  width: 15vw;
  border-radius: 50%;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5vh 0;
`;

const Brand = styled.p`
  font-size: 25px;
`;

const Brandcontainer = styled.div`
margin: 0 3vw;
`

class Aboutme extends Component {
  render() {
    return (
      <div>
        <Title>
          <div>
            <Me src={img} alt="Me" />
          </div>
          <div>
            <h1>Matt Piestrak</h1>
          </div>
        </Title>
        <Brandcontainer>
          <Brand>
            I am a full stack developer with a passion for finding and creating
            logical yet creative solutions to complex problems. My background in
            veterinary medicine allows me to work well in a team environment and
            the flexibility to work in and understand both the global,
            overarching scope and smaller, more specific scopes.
          </Brand>
        </Brandcontainer>
      </div>
    );
  }
}

export default Aboutme;
