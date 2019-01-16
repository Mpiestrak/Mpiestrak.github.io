import React, { Component } from "react";
import Navigationbar from "./components/Navigationbar";
import Aboutme from "./components/Aboutme";
import Project3 from "./components/Project3";
import Project4 from "./components/Project4";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import styled from "styled-components"
import Contactme from "./components/Contactme";

const Container = styled.div`
  background: linear-gradient(270deg, #00b4ad, #00b476, #007bb4);
  background-size: 600% 600%;

  -webkit-animation: AnimationName 30s ease infinite;
  -moz-animation: AnimationName 30s ease infinite;
  animation: AnimationName 30s ease infinite;

  @-webkit-keyframes AnimationName {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @-moz-keyframes AnimationName {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @keyframes AnimationName {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const Aboutcontainer = styled.div`
margin-bottom: 50vh;
`

const Contactcontainer = styled.div`

`

const Project3container = styled.div`
margin-bottom: 50vh;
`
const Project4container = styled.div`
margin-bottom: 50vh;
`

class App extends Component {
  render() {
    return (
      <Container>
        <Router>
          <div>
            <Navigationbar />
            <Aboutcontainer>
              <Aboutme />
            </Aboutcontainer>
            <Project3container>
              <Project3 />
            </Project3container>
            <Project4container>
              <Project4 />
            </Project4container>
            <Contactcontainer>
              <Contactme />
            </Contactcontainer>
          </div>
        </Router>
      </Container>
    );
  }
}

export default App;
