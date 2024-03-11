import './styles.css'

import { FaSearch } from "react-icons/fa";

export const InputSearch = ({ handleInputChange, valInput, handleSubmit }) =>{
    return(
        <div className='groupInput'>
            <input 
                type="text" 
                placeholder='Digite o perfil desejado...' 
                onChange={handleInputChange} 
                value={valInput}
            />
            <button onClick={handleSubmit}><span>Pesquisar <FaSearch /></span></button>
        </div>
    )
};