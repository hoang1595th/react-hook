import React, { useState, useEffect } from 'react';
import Child from './Child';


function UseEffect(props) {
    const [state, setState] = useState(0);

    // component did mount
    useEffect(() => {
    	callApi1()
    	callApi2()
    }, []);

    const callApi1 = () => {
        // call api you need here
    }

    const callApi2 = () => {
        // call api you need here
    }

    return (
        <div>
            <button onClick={() => setState(state + 1)}>click</button>
            <Child index={state}/>
        </div>
    );
}

export default UseEffect;