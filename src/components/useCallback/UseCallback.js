import React, { useCallback, useState } from 'react';
import Button from './Button'

function UseCallback(props) {

  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  const memoizedCallback = useCallback(
    () => {
      console.log('countA using useCallback: ', countA)
    },
    [countB],
  );

  const showCountA = () => {
    console.log('countA: ', countA)
  }

  return (
    <>
      <div>coutA: {countA}</div>
      <div>coutB: {countB}</div>
      <button onClick={() => setCountA(countA + 1)}>update CountA</button>
      <button onClick={() => setCountB(countB + 1)}>update CountB</button>
      <div><Button handleOnClick={showCountA} text="normal" /></div>
      <div><Button handleOnClick={memoizedCallback} text="useCallback:" /></div>
    </>
  );
}

export default UseCallback;