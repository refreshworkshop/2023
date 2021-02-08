import React from "react";
import styled from 'styled-components';


const Styles = styled.div`
*{
    padding: 0;
    margin-top: 1rem;
    color: #000;
    // background-color: #bbb;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    font-size: 0.65em;
    text-align: center;
    
  }
`;

const Footer = () => (
    <div>
        <Styles>
            <p>
                REFRESH2021
            </p>
        </Styles>

    </div>
);

export default Footer;