import React, { Component } from "react";
import styled from "styled-components";
import img from "../RecipeBox.png";
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

class Project3 extends Component {
  render() {
    return (
      <div>
        <Title>
          <div>
            <h4>Recipe Box</h4>
          </div>
        </Title>
        <Container2>
          <Descriptioncontainer>
            <Description>
              A place to store your recipes and share them with others.
            </Description>
            <Techused>
              Made using: Node.js, Express, MongoDB, Mongoose, ReactJs, Styled
              Components.
            </Techused>
            <Button
              href="https://project3-recipes.herokuapp.com/"
              color="primary"
            >
              Website
            </Button>
            <Button
              href="https://github.com/Mpiestrak/project3-recipes"
              color="primary"
            >
              Github
            </Button>
          </Descriptioncontainer>
          <div>
            <Screenshot src={img} alt="Recipe Box Screenshot" />
          </div>
        </Container2>
      </div>
    );
  }
}

export default Project3;
