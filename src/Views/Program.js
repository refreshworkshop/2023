import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
* {
    text-align: center;
  } 
  h1 {
    color: #2291e6; 
  }
`;
const Grid = styled.div`
* {

    box-sizing: border-box;
    word-wrap:break-word;
    // padding-left: 40px;
    // padding-right: 40px;
    padding-bottom: 15px;
    text-align: justify;

}
a {
    padding: 0 !important;
}
.main {
    float: left;
    width: 100%;
    padding-left: 40px;
    padding-right: 40px;
    text-align: justify;
    // text-justify: inter-word;
  
  }

@media screen and (min-width: 768px) {

    * {
        
        box-sizing: border-box;
        word-wrap:break-word;
        // padding-left: 120px;
        // padding-right: 120px;
        padding-bottom: 20px;
        // text-align: justify;
    }
    .main {
        float: left;
        width: 100%;
        padding-left: 120px;
        padding-right: 120px;
        text-align: center;
      
      }
} 
`;
function Program() {
  return (
    <div >
      <Header>
    </Header>
    <Grid>
<div className="main">
    (TBA)
</div>
</Grid>
    </div>
  );
}

export default Program;