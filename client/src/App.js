import React, { useContext } from 'react'
import axios from 'axios'
import Chat from './components/Chat'
import Enter from './components/Enter'
import { Context } from "./context";
import './App.css';

function App() {
  const context = useContext(Context)
  const getCurrencies = async () => {
    const res = await axios.get("https://pruebasolati-backend.up.railway.app/currencies")
    context.dispatch({ type: "CURRENCIES", payload: res.data })
  }
  getCurrencies()


  return (
    <div className='conteiner'>
      <header>
        <h1>ConvertIO</h1>
      </header>
      <div className='chat'><Chat /><Enter /> </div>
    </div>
  );
}

export default App;
