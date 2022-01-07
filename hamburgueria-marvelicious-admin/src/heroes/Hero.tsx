import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './Hero.css';

class Alien {
  id: number;
  name: string;
  position: number;
  picture: string;
}

function Hero() {
  const [aliens, setAliens] = useState<Alien[]>([]);
  const [alien, setAlien] = useState<Alien>(new Alien());

  async function getAliens() {
    try {
      const { data } = await axios({ url: 'http://localhost:5000/aliens', method: 'GET' })

      console.log(data);

      setAliens(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAliens()
  }, [])

  async function createAlien() {
    try {
      console.log(alien)
      await axios.post('http://localhost:5000/aliens', alien)

      alert("alien criado com sucesso!")

      getAliens();
    } catch (error) {
      alert("erro ao criar alien")
      console.log(error)
    }
    
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setAlien(oldValue => {
      return { ...oldValue, [name]: value }
    })    
  }

  async function handleDelete(id: number) {
    try {
      await axios.delete(`http://localhost:5000/aliens/${id}`)

      alert("alien deletado com sucesso!")

      getAliens();
    } catch (error) {
      alert("erro ao deletar alien")
      console.log(error)
    }  
  }

  return (
    <div className="App">
        <h1>Lista de Aliens: </h1>
        <br />
        { aliens.map(alien => (
          <div key={alien.id}>
            {alien.name}
            <img className='image' src={alien.picture} alt={alien.name} />
            <button onClick={() => handleDelete(alien.id)}>deletar</button>
          </div>
        ))}
        
        <div>criar novo alien: </div> <br />
        <input type="text" name="name" placeholder="name" value={alien.name} onChange={(e) => handleInputChange(e)} />
        <input type="text" name="position" placeholder="position" value={alien.position} onChange={(e) => handleInputChange(e)} />
        <input type="text" name="picture" placeholder="picture" value={alien.picture} onChange={(e) => handleInputChange(e)} />
        <button onClick={() => createAlien()}>criar alien</button>
    </div>
  );
}

export default Hero;
