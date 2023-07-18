import React,{useState, useEffect} from 'react'
import styled from 'styled-components';
import TrafficLight from './components/TrafficLight';

const AppWrapper = styled.div`
  padding: 30px 60px;
`;

const ResetButton = styled.button`
  padding: 12px 30px;
  font-size: 16px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

function App() {

  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const tenSecondsInterval = setInterval(() => {
      setCycle((cycle) => (cycle + 1) % 4);
    }, 10000);

    const fiveSecondsInterval = setInterval(() => {
      setCycle((cycle) => (cycle + 1) % 4);
    }, 5000);

    // Clear the tenSecondsInterval after 20 seconds to switch to the 5-second interval.
    setTimeout(() => {
      clearInterval(tenSecondsInterval);
    }, 10000);

    return () => {
      clearInterval(fiveSecondsInterval);
      clearInterval(tenSecondsInterval);
    };

  }, []);


  const handleReset = () => {
    setCycle(0)
  };

  return (
   <>
    <AppWrapper>
      <TrafficLight cycle={cycle} />
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '40px'}}>
        <ResetButton onClick={handleReset}>Reset</ResetButton>
      </div>
    </AppWrapper>
   </>
  );
}

export default App;
