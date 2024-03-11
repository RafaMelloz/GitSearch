import { useEffect, useState } from 'react';
import { BoxSearch } from '../components/BoxSearch';
import './styles.css';
import { InputSearch } from '../components/InputSearch';

import { FaGithubAlt } from "react-icons/fa6";

function App() {


  const [fetchData, setFetchData] = useState([])
  const [valInput, setValInput] = useState('RafaMelloz')
  const [error, setError] = useState(false)


  const handleInputChange = (event) => {
    setValInput(event.target.value);
    console.log(valInput)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchDados(valInput)
  };
  
  const fetchDados = async (valInput) => {
    try {
        let res = await fetch(`https://api.github.com/users/${valInput}`);
        if (!res.ok) {
          throw new Error('Erro ao buscar dados');
      }
      let data = await res.json();
      setError(false);
      setFetchData(data);

    } catch (error) {
      setError(true);
    }
    
  }


  useEffect(()=>{
    fetchDados(valInput);
  },[])

  return (
    <div className="flex__Section">
      <h1>GitHub Search  <FaGithubAlt/></h1>
      <InputSearch handleInputChange={handleInputChange} valInput={valInput} handleSubmit={handleSubmit} />
      <BoxSearch data={fetchData} error={error}/>
    </div>
  );
}

export default App;
