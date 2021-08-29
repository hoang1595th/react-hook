import React, { useMemo } from 'react';
import Toolbar from './Toolbar';
import { themes, ThemeContext } from './ThemeContext';


function UseContext(props) {

    return (
        <ThemeContext.Provider value={themes.light}>
            <Toolbar />
        </ThemeContext.Provider>
    );
}

export default UseContext;