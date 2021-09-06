import React, { useState, useMemo } from 'react';

const UseMemo = () => {
    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(0);

    const getValue = () => {
        console.log("re-call memoized getValue")
        return countA*10
    }
    const memoizedGetValue = useMemo(getValue, [countA]);

    const getValueEveryTimeRender = () => {
        console.log("re-call getValue")
        return countA*10
    }
    const NoMemoizedGetValue = getValueEveryTimeRender()

    return (
        <>
            <div>coutA: {countA}</div>
            <div>coutB: {countB}</div>
            <button onClick={() => setCountA(countA + 1)}>update CountA</button>
            <button onClick={() => setCountB(countB + 1)}>update CountB</button>
            <hr></hr>
            <div>memoizedValue: {memoizedGetValue}</div>
            <div>memoizedValue: {NoMemoizedGetValue}</div>
        </>
    );
};

export default UseMemo;