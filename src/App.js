import logo from './logo.svg';
import './App.css';

import UseContext from './components/useContext/UseContext'
import UseReducer from './components/useReducer/UseReducer'
import UseCallback from './components/useCallback/UseCallback'

function App() {
  return (
    <div className="App">
      {/* <UseContext /> */}
      {/* <UseReducer /> */}
      <UseCallback />
    </div>
  );
}

export default App;
