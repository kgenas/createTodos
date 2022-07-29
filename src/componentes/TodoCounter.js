import { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import '../css/TodoCounter.css';
const TodoCounter = ()=>{

    const { totalTodos:total, completedTodos:completed } =  useContext(TodoContext);
    return(
        <h2 className='TodoCounter'>Has completado { completed } de { total } TODOs</h2>            
    )
}

// *    export default ==> al momento de importarlo se puede nombra con el nombre 
//*     que se desea y esto podria causar un problema
     //? export default TodoCounter;
export { TodoCounter };