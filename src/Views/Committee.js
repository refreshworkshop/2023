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

function Committee() {
    return (
        <div>
<Header>
    
<h1>Commitees</h1><br />
</Header>
<Grid>
<div className="main">
<b>Program Committee Chairs </b><br />
<a href="http://ece-research.unm.edu/tsiropoulou/Students.html">Eirini Eleni Tsiropoulou</a> (University of New Mexico, USA) <br />
<a href="https://www.ece.ntua.gr/en/staff/76">Symeon Papavassiliou </a>(National Technical University of Athens, Greece)<br />

<br />
<b>Workshop Web Chairs </b> <br />
<a href="https://nafisirtija.github.io"> Nafis Irtija</a> (University of New Mexico, USA) <br />
<a href="https://sangoleyefisayo.github.io"> Fisayo Sangoleye</a> (University of New Mexico, USA) <br />

<br />
<b>Publicity Chairs </b> <br />
<a href="https://people.utwente.nl/s.bayhan?tab=about-me">Suzan Bayhan</a> (University of Twente, Netherlands) <br />

<br />
<b>Technical Program Committee </b><br />
Swades De (IIT, Delhi, India)<br />
R. K. Gosh (Department of EECS, IIT Bhilai) <br />
Rohit Kumar (University of Southern California, USA) <br />
Nathalie Mitton (INRIA, France) <br />
Jelena Misic (Ryerson University, Canada)<br />
Antonella Molinaro (Mediterranean University of Reggio Calabria, Italy)<br />
Amiya Nayak (University of Ottawa, Canada) <br />
Elena Pagani (Universita degli Studi di Milano, Italy) <br />
Athanasios Panagopoulos (National Technical University of Athens, Greece) <br />
Simone Silvestri (University of Kentucky, USA) <br />
Thrasyvoulos Spyropoulos (Institut Eurocom, France) <br />
Tuna Tugcu (Bogazici University, Turkey) <br />
Spyridon Vassilaras (Huawei Technologies, France)
</div>
</Grid>
</div>
    );
}

export default Committee;