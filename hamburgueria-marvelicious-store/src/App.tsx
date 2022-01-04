import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import axios from 'axios'
import './App.css';

function App() {
  const [textoApi, setTextoApi] = useState('');

  async function getTextoApi() {
    try {
      const { data } = await axios({ url: 'http://localhost:5000/enzo', method: 'GET' })

      console.log(data);

      setTextoApi(data)
    } catch (error) {
      console.log(error);
    }
  }

  // useEffect(() => {
  //   getTextoApi()
  // }, [])

  

  return (
    <div className="App">
      <header className="App-header">
        
        <img src={logo} className={textoApi === '' ? '' : 'App-logo-animation'} alt="logo" />  
        {textoApi !== '' && 
        <iframe width="400" height="500" src="https://www.youtube.com/embed/JUp0huDPFcw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        }
        <p>
          Edit <code>src/App.tsx</code> and save to { textoApi === '' ? 'carregue da api' : textoApi }.
        </p>
        <button className={textoApi === '' ? '' : 'botao-clicado'} onClick={() => getTextoApi()}>Carregar da api</button><br />
        <button onClick={() => setTextoApi('')}>resetar</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
