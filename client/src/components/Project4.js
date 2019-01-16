import React, { Component } from "react";
import styled from "styled-components";
import img from "../SlaveFreeToday.png";
import { Button } from "reactstrap";

const Screenshot = styled.img`
  max-height: auto;
  width: 50vw;
  margin-right: 5vw;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5vh 0;
`;

const Description = styled.p`
  font-size: 25px;
`;

const Descriptioncontainer = styled.div`
  margin: 0 3vw;
`;

const Container2 = styled.div`
  display: inline-flex;
`;

const Techused = styled.div`
  margin: 0 3vw;
  font-size: 25px;
`;

class Project4 extends Component {
  render() {
    return (
      <div>
        <Title>
          <div>
            <h4>Slave Free Today</h4>
          </div>
        </Title>
        <Container2>
          <Descriptioncontainer>
            <Description>
              A collaboration with User Experience students to redesign and
              transition to a new site.
            </Description>
            <Techused>
              Made using: HTML5, CSS, JavaScript, Node.js, Django,
              Import-Export, React, React-Strap, Style-Components,
              Sematic-UI-React, Pipenv, PostgreSQL
            </Techused>
            <Button
              href="https://slavefreetoday.herokuapp.com/"
              color="primary"
            >
              Website
            </Button>
            <Button
              href="https://github.com/Mpiestrak/slavefreetoday"
              color="primary"
            >
              Github
            </Button>
          </Descriptioncontainer>
          <div>
            <Screenshot src={img} alt="Slave Free Today Screenshot" />
          </div>
        </Container2>
      </div>
    );
  }
}

export default Project4;
