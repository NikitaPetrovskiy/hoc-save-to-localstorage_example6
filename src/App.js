import React from 'react';
import {TextInput} from "./Components/TextInput";
import {withLocalStorage} from "./Components/hoc/withLocalStorage";
import './App.css';

const InputWithLocalStorage = withLocalStorage(TextInput, 'test')
const InputWithLocalStorageToo = withLocalStorage(TextInput, 'test2')
const onClick = e => e.preventDefault();

const App = (props) => {
  return (
    <div className="App">
        <InputWithLocalStorage type="text" className="autocomplete">
            <input type="submit" value="Отправить" onClick={onClick}/>
        </InputWithLocalStorage>
      <InputWithLocalStorageToo type="text" className="autocomplete" placeholder='save to localStorage'>
          <input type="submit" value="Отправить" onClick={onClick}/>
      </InputWithLocalStorageToo>
    </div>
  );
}

export default App;
