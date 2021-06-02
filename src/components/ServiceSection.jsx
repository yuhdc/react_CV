import React from 'react';
//import icon
import clock from "../img/clock.svg"
import money from "../img/money.svg"
import diaphragm from "../img/diaphragm.svg"
import teamwork from "../img/teamwork.svg"
import home2 from "../img/home2.png"
//import styled components
import { About, Description, Image } from "../style"
import styled from 'styled-components';


function ServiceSection(props) {
  return (
    <Services>
      <Description>
        <h2>High <span>quality</span> services</h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="" />
              <h3>Efficent</h3>
            </div>
            <p>Lorem ipsum dolor sit.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="" />
              <h3>Efficent</h3>
            </div>
            <p>Lorem ipsum dolor sit.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="" />
              <h3>Efficent</h3>
            </div>
            <p>Lorem ipsum dolor sit.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="" />
              <h3>Efficent</h3>
            </div>
            <p>Lorem ipsum dolor sit.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="" />
      </Image>
    </Services>
  );
}

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 80%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;
const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default ServiceSection;