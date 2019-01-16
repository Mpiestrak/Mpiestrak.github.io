import React, { Component } from 'react';
import styled from "styled-components";

const Sentence = styled.p`
  font-size: 25px;
`;

const Phone = styled.p`
  font-size: 25px;
`;

const Email = styled.p`
  font-size: 25px;
  margin-bottom: 0;
  padding-bottom: 20vh;
`;

const Contactcontainer = styled.div`
margin-left: 10vw;
`

class Contactme extends Component {
    render() {
        return (
            <Contactcontainer>
                <h1>Contact Me</h1>
                <Sentence>Whether you are looking to collaborate or just want to learn more about me, this is how you can do it!</Sentence>
                <Phone>Phone: +1 706 302 7719</Phone>
                <Email>E-mail: Mpiestrak@gmail.com</Email>
            </Contactcontainer>
        );
    }
}

export default Contactme;