import React from 'react'
import styled from 'styled-components'



const TrafficLightWrap = styled.div`
display: flex;
justify-content: space-between;
max-width: 28rem;
margin: auto
`

const StreetTitle = styled.p`
text-align: center;
`

const StopLightBoard = styled.div`
padding: 15px 0 15px 0;
display: flex;
flex-direction: column;
height: 250px;
width: 100px;
background: black;
border-radius: 5px;
`

const Light = styled.div`
  transition: background 0.5s;
  margin: auto;
  height: 75px;
  width: 75px;
  border-radius: 50%;
`

const Pole = styled.div`
height: 200px;
width: 25px;
background: #000;
margin: 0 auto;
`

const GreenLight = styled(Light)`
  background-color: ${({ active }) => (active ? 'rgba(36, 205, 3, 1)' : 'rgba(36, 205, 3, 0.25)')};
`;

const YellowLight = styled(Light)`
  background-color: ${({ active }) => (active ? 'rgba(255, 212, 0, 1)' : 'rgba(255, 212, 0, 0.25)')};
`;

const RedLight = styled(Light)`
  background-color: ${({ active }) => (active ? 'rgba(255, 0, 0, 1)' : 'rgba(255, 0, 0, 0.25)')};
`;

const TrafficLight = ({cycle}) => {

   

  const isStreetAGreen = cycle === 0;
  const isStreetARed = cycle === 2;
  const isStreetAYellow = cycle === 1 || cycle === 3;

  const isStreetBGreen = cycle === 2;
  const isStreetBRed = cycle === 0;
  const isStreetBYellow = cycle === 1 || cycle === 3;

    return (  
        <>
          <TrafficLightWrap>
            <div>
              <StreetTitle>Street A</StreetTitle>
              <StopLightBoard>
                <RedLight active={isStreetARed}  />
                <YellowLight active={isStreetAYellow} />
                <GreenLight active={isStreetAGreen} />
              </StopLightBoard>
              <Pole />
            </div>

            <div>
            <StreetTitle>Street B</StreetTitle>
              <StopLightBoard>
                <RedLight active={isStreetBRed} />
                <YellowLight active={isStreetBYellow} />
                <GreenLight active={isStreetBGreen} />
              </StopLightBoard>
              <Pole />
            </div>
            
          </TrafficLightWrap>
        </>
    );
}
 
export default TrafficLight;