import React from 'react';
import styled from 'styled-components';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTwitterSquare,faFacebookSquare,faRedditSquare,faLinkedin } from '@fortawesome/free-brands-svg-icons'

// const A = styled.a`
//   font-size:x-large;
// `;
const Title = styled.h4`
    color: #2291e6;
    `;
const Subtitle = styled.h5`
    color: #2291e6;
  
`;
const Ul = styled.ul`
  list-style-type: none;
  //list-style-position: inside;
`;
const Grid = styled.div`
* {
  box-sizing: border-box;
}
.header {
  padding: 10px;
  order: 1;
}
.main {
  order: 3;
  width: 100%;
  padding-left: 40px;
  padding-right: 40px;
  text-align: justify;

}
.side {
  order: 2;
  width: 100%;
  padding-left: 80px;
  text-align: left;
}


@media screen and (min-width: 768px) {

.header {
  padding: 10px;
}

.main {
  width: 75%;
  float: left;
  padding-top: 30px;
  padding-left: 120px;
  padding-right: 80px;
  text-align: justify;
}

.side {
  width: 25%;
  float: left;
  padding-top: 30px;
  text-align: left;
  padding-left: 50px;
}
}
  
  
`;
function Home() {
  return (
    <div >
      {/* <A href="https://twitter.com/"> <FontAwesomeIcon icon={faTwitterSquare}/></A>
      <A href="https://facebook.com/"> <FontAwesomeIcon icon={faFacebookSquare}/></A>
      <A href="https://reddit.com/"> <FontAwesomeIcon icon={faRedditSquare}/></A>
      <A href="https://linkedin.com/"> <FontAwesomeIcon icon={faLinkedin}/></A> */}
      <Grid>
      <br />
      {/* <h1>Topics</h1>
      <br /> */}
      <div className="header">

      <Title>Coral Bay, Pafos, Cyprus <br/>
          June  7 – 9, 2021<br/></Title>
      co-located with <a target="_blank" rel="noopener noreferrer" href="https://dcoss.org/">DCOSS 2020</a><br /><br />
      <Subtitle> Call for Papers </Subtitle>
      Few selected papers will be invited for the: <br /> Special Issue <i>“Emerging Trends in Wireless Sensor Networks”</i>, of <a target="_blank" rel="noopener noreferrer" href="https://www.mdpi.com/journal/sensors">Sensors, MDPI.</a>”
      <br />
      <b>Best Paper Award will be announced for the most innovative research paper.</b>
      <br />
      </div>
      
      <div className="main">
      <Subtitle>Scope and Overview </Subtitle> <p>The economic and societal potential of emerging 5G and cyber-physical social systems is vastly greater
      than what has been realized so far, and major investments are being made worldwide to develop the corresponding
      science and technology. The Future Internet paradigm, the proliferation of emerging networks and architectures,
      wireless access technologies and multi-homing smart devices are evolving towards a competitive environment,
      where users and devices have access to various resources, while their behaviors become strongly interdependent.
      This fact demands and motivates the development of user-centric resource management and optimization frameworks,
      which enable user’s self-optimization and autonomy. This vision is further motivated and supported by the convergence
      of various emerging technologies enabling Cyber-Physical Systems operation, including 5G/B5G technologies, Internet
      of Things (IoT), Mobile Edge Computing and Software Defined Networking, all targeting flexibility and efficiency.
      To deal with the involved complexity, and driven by the requirements of autonomy and scalability, distributed
      resource orchestration approaches appear as a necessity rather than a desire.
      </p>
      <p>  The REFRESH Workshop aims at to stimulate research on the most novel topics of real-life modeling
      in 5G networks and beyond. This year’s edition encourages submission of theoretical and experimental
      work (including studies of real deployment), <b>with a primary interest in new directions of wireless networking
        in concrete application scenarios and demonstrators in areas such as, but not limited to: mobile edge computing,
        Internet of Things, cyber-physical systems, unmanned aerial vehicles, public safety networks, dynamic spectrum utilization,
      smart grid communications, wireless power communication, green wireless networks, information-centric wireless networks. </b>
      The workshop seeks original work presented in the form of research papers describing new research and development approaches
      and results, as well as work-in-progress papers. Highly disruptive work-in-progress and position papers are also welcome,
      provided they focus on particularly innovative solutions or applications for 5G networks and beyond. All papers shall be
      forward-looking, describe their relationship to existing work, and shall argue their impact and implications for ongoing or
      future research. Selected workshop papers
      will also be considered for publication in a Special Issue and/or Special Sections of international peer-reviewed journals.
      </p>
      <br />
      <br />
      <Subtitle> Topics of interest include, but are not limited to </Subtitle>
      <Ul>
        <li>5G Cellular systems and beyond</li>
        <li>Reconfigurable Intelligent Surfaces</li>
        <li>Integrated Access and Backhaul</li>
        <li>Cognitive radio networks, dynamic spectrum access and emerging applications and services</li>
        <li>Wireless power transfer and energy harvesting for wireless networks</li>
        <li>Delay tolerant networks</li>
        <li>Wireless communications on different media</li>
        <li>End-to-end protocols, flow and congestion control</li>
        <li>Artificial intelligence and machine learning for wireless networks</li>
        <li>Attack modelling, prevention, mitigation, and defense in wireless networks</li>
        <li>Security, Reliability, Privacy and Trust in Wireless Networks</li>
        <li>Green Wireless Networks</li>
        <li>Heterogeneous, Small-Cell and Dense networks</li>
        <li>Information-centric wireless networks</li>
        <li>Internet of Things</li>
        <li>Pervasive and wearable computing and networking</li>
        <li>Public Safety Networks</li>
        <li>Social wireless networks</li>
        <li>Quality of Service provisioning and management in 5G networks and beyong</li>
        <li>Quality of Experience and User Experience in 5G networks and beyond</li>
        <li>Software-defined wireless neworks</li>
        <li>Vehicular wireless networks</li>
        <li>Wireless mesh networks</li>
        <li>Wireless multimedia networks</li>
        <li>Wireless network virtualization</li>
        <li>Multiple Access, Radio Resource Management, Interference Management and Scheduling</li>
        <li>Unmanned Aerial Vehicle (UAV) Networks</li>
        <li>Hybrid communication systems (e.g., satellite/unmaneed aerial vehicles/terrestrial/wireline hybrids)</li>
        <li>Machine learning-based resource allocation for wireless networks</li>
        <li>Reinforcement learning and deep learning for 5G networks and beyond</li>
        <li>Architectures, models, security, and approaches for smart grid networks</li>
        <li>Economics and pricing for 5G networks and beyond</li>
        <li>Smart Cities supported by 5G networks and beyond</li>
        <li>Scalability, Robustness and Resilience in 5G networks and beyond</li>
      </Ul>
      </div>
      <div className="side">
      <Subtitle>Important Dates </Subtitle>
            Submission: May 7, 2021<br />
            Notification: May 30, 2021<br />
            Camera Ready: June 10, 2021<br />
            Early Registration: June 10, 2021<br /><br/>
      </div>
      </Grid>
    </div>
  );
}

export default Home;

