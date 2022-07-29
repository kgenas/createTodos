import { useContext } from 'react';
import { TodoCounter } from '../componentes/TodoCounter';
import { TodoSearch } from '../componentes/TodoSearch';
import { TodoList } from '../componentes/TodoList';
import { TodoItem } from '../componentes/TodoItem';
import { CreateTodoButton } from '../componentes/CreateTodoButton';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodoError } from './TodoError';
import { TodoLoading } from './TodoLoading';
import { TodoEmpty } from './TodoEmpty';


/**
 *? Consumir el contexto desde otro componente
 ** Una vez ya tenemos nuestro proveedor envolviendo toda nuestra aplicacion, ya
 ** podemos acceder a los datos desde cualquier componente hijo y olvidamos
 ** de pasar props componente por componente
 */
const AppUI = () =>{
    
    //* forma 1 de mandar variables globales con hooks de react
    /**
     *? value: todas las variables definidas en TodoContext/index 
     *? desestrucutrar value == { error , ...}

         <TodoContext.Consumer>
                    {({ error,
                        loading 
                    })=> (
                        <TodoList>  
                             { error && <p>Desesperate, hubo un error ....</p> }
                             { loading && <p>Estamos cargando, no desesperes ...</p> }
                        </TodoList>
                    )}
        </TodoContext.Consumer>
     */
    //* forma 2 de mandar variables globales con hooks de react
    //* las variables los consume <TodoList>
    const {
        error , 
        loading , 
        searchedTodos , 
        completeTodo , 
        deleteTodo , 
        openModal ,
        setOpenModal ,
    } = useContext( TodoContext );
    
    return ( 
        // * una etiqueta por componente
        // ? React.Fragment o <>
        <>
            <TodoCounter />
            <TodoSearch />     
            <TodoList>   
                { error && <TodoError/>}
                { loading && <TodoLoading/>}
                { (!loading && !searchedTodos.length) && <TodoEmpty/>}

                { searchedTodos.map( todo => (    
                          
                    <TodoItem 
                    key={ todo.id } 
                    text= { todo.text } 
                    completed={todo.completed}
                    onComplete = {() => completeTodo(todo.id)}
                    onDelete = {() => deleteTodo(todo.id)}
                    />          
                ))}
            </TodoList>
            {/*!! exista y que sea true */}
            {!!openModal && (
                <Modal>
                    <TodoForm/>
                    {/* con css aparece el valor en el modal y en la pantalla inicial  */}
                </Modal>
            )}
            <CreateTodoButton 
                setOpenModal = { setOpenModal }                
            />      
        </>
    );
}
export { AppUI };