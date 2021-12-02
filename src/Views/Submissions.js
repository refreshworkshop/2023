import React from 'react';
import styled from 'styled-components';


const Title = styled.h1`
    color: #2291e6;
    text-align: center;
    
  
`;
const Subtitle = styled.h3`
    color: #2291e6;
    text-align: center;
    
  
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


function Submissions() {
    return (
        <div >
            
                <Title>Submissions</Title>
                <br />
                <Subtitle>Submission Guidelines </Subtitle>
                <br />

                <Grid>
                    <div className="main">
                <b>General Paper Format </b> <br />

                
Authors are invited to submit original unpublished manuscripts that demonstrate current research on
real-life modeling in 5G networks and beyond related to REFRESH workshop’s topics of interest. Please use
the US letter size (8.5 X 11 in) standard IEEE conference LaTeX format or Microsoft Word template available on the link
below: <a target="_blank" rel="noopener noreferrer"
                        href="http://www.ieee.org/conferences_events/conferences/publishing/templates.html">
                        http://www.ieee.org/conferences_events/conferences/publishing/templates.html</a> <br />
                    <br />
All submissions should be written in English and submitted as a full or work-in-progress paper.
Full papers should have a maximum of eight (8) printed pages including figures and references.
Full papers are expected to describe fully developed ideas with a thorough evaluation. Work-in-progress
papers should have a maximum of four (4) printed pages including figures and references. Work-in-progress
papers are expected to describe new and interesting ideas that have not yet reached full maturity.
Note that REFRESH does not follow the double-blind review policy. The names and affiliations of all
the authors must be present in the submitted manuscript.
<br />
                    <br />
Accepted and presented papers will be published in the DCOSS 2022 conference proceedings and submitted
to IEEE Xplore as well as other Abstracting and Indexing (A&amp;I) databases.
<br />
                    <br />
                    <b>Submission Site </b> <br />
Please submit your papers in PDF format using the following paper submission
website: TBA
{/* <a target="_blank" rel="noopener noreferrer" href="https://easychair.org/conferences/?conf=refresh2022">
                        https://easychair.org/conferences/?conf=refresh2022</a> */}
                    <br />
                    <br />
                    <b>Camera Ready Guidelines </b> <br />
TBA
</div>
            </Grid>
        </div>
    );
}

export default Submissions;