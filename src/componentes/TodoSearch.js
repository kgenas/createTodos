import { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import '../css/TodoSearch.css';
const TodoSearch =()=>{

    const { searchValue, setSearchValue } = useContext(TodoContext);
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
        //console.log( event.target.value );
    };

    return(
        <input 
            type='text'             
            className='TodoSearch'  
            placeholder='Buscar'
            value={searchValue}
            onChange={onSearchValueChange}
        />
    );
};

export { TodoSearch };