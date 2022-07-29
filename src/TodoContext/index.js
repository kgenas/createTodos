import { v4 as uuidv4 } from "uuid";
import { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const  TodoContext = createContext();
// compartir la propiedad a cualquier hijo o nieto que lo necesita
const TodoProvider = ( props ) => {

    /**
     ** Nos traemos todo el estado y las funciones de nuestra aplicacion que
     ** queremos globales
     */
    // * renombrar ==> saveItem:saveTodos
    const  {item:todos, saveItem:saveTodos , loading, error } = useLocalStorage('TODOS_V1',[]);
    
    //* para nuestro modal y mandarlo a TodoContext.Provider
    const [ openModal, setOpenModal ] = useState(false);
    const [ searchValue, setSearchValue ] = useState('');
    const completedTodos = todos.filter(todo => !!todo.completed).length;//* !! doble negacion => value === true
    const totalTodos = todos.length;
    
    let searchedTodos = [];
    if (!searchValue.length >= 1){
        // * si no es cierto muestra esto
        searchedTodos = todos;
    } else{
        searchedTodos = todos.filter( todo => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes( searchText );
        });
    }

    const addTodo = ( text ) => {
        const newTodos = [...todos,{ completed: false, text , id:uuidv4() }];
        saveTodos( newTodos );
    };

    const completeTodo = ( id ) => {

        const todoIndex = todos.findIndex( todo => todo.id === id );
        const newTodos = [...todos];
        newTodos[ todoIndex ].completed =  !todos[todoIndex].completed;
        saveTodos( newTodos );
    };

    const deleteTodo = ( id ) => {
        const todoIndex = todos.findIndex( todo => todo.id === id );
        const newTodos = [...todos];
        newTodos.splice( todoIndex, 1 ); //* eliminar un elemento
                                        //* splice: indicar en la posicion que se va eliminar y despues cuantos valores a eliminar
        saveTodos( newTodos );
    }

    return (
        /**
         ** Retornamos nuestro proveedor con nuestro contexto en la etiqueta value,
         ** que recibira a toda nuestra aplicacion,
         ** por eso necesitamos la prop children 
         */
        <TodoContext.Provider
            value={{
                loading ,
                error ,
                totalTodos ,
                completedTodos ,
                searchValue ,
                setSearchValue ,
                searchedTodos ,
                addTodo ,
                completeTodo ,
                deleteTodo ,
                openModal ,
                setOpenModal ,
            }}
        >
            {/* cualquier propiedad del componente que quiere usar en donde sea invocado */}
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext , TodoProvider }