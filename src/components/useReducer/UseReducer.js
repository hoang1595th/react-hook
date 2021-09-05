import React, { useReducer } from 'react';
import { initialState, reducer } from './reducer';


function UseReducer(props) {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        </>
    );
}

export default UseReducer;