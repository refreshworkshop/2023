import React from "react";
import styled from 'styled-components';


const Styles = styled.div`
*{
    margin-top: 1rem;
    padding: 0.5rem;
    // background-color: #2291e6;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    font-size: 0.75em;
  }
`;

const Footer = () => (
    <div>
        <Styles>
            <p>REFRESH2021</p>
        </Styles>
    </div>
);

export default Footer;