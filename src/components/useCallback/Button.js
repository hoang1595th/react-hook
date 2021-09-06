import React from 'react';

const ButtonNormal = React.memo(({ handleOnClick }) => {
    console.log("re-render")
    return (
        <button onClick={() => handleOnClick()}>Click me</button>
    );
});

export default ButtonNormal