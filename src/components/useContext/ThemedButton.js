import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function ThemedButton(props) {
  const theme = useContext(ThemeContext);

  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  )
}

export default ThemedButton;