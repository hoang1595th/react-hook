import React, { useCallback, useState } from 'react';
import Button from './Button'

function UseCallback(props) {

  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  const memoizedCallback = useCallback(
    () => {
      console.log('countA using useCallback: ', countA)
      alert('countA using useCallback: ' + countA)
    },
    [countB],
  );

  const showCountA = () => {
    console.log('countA: ', countA)
    alert('countA: ' + countA)
  }

  return (
    <>
      <div>coutA: {countA}</div>
      <div>coutB: {countB}</div>
      <button onClick={() => setCountA(countA + 1)}>update CountA</button>
      <button onClick={() => setCountB(countB + 1)}>update CountB</button>
      <hr></hr>
      <div>nomal: <Button handleOnClick={showCountA} /></div>
      <div>useCallback:<Button handleOnClick={memoizedCallback} /></div>
    </>
  );
}

export default UseCallback;