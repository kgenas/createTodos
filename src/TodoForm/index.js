import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

const TodoForm = () =>{

    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal
    } = useContext( TodoContext )

    const onChange = (event) =>{
        setNewTodoValue( event.target.value );
    }
    const onCancel = () =>{
        //para no recargar la pagina        
        setOpenModal(false);
    }
    const onSubmit = (event) =>{

        //para no recargar la pagina
        event.preventDefault();
        //lo va enviar donde se creo el addTodo
        newTodoValue !== '' && addTodo( newTodoValue );
        //cerrar el modal
        setOpenModal(false);
    }
    //* opcion cuando click enter
    const onKeyUp = (e) =>{
        //lo va enviar donde se creo el addTodo
        if ( newTodoValue !== '' && e.charCode === 13) {
            //para no recargar la pagina
            e.preventDefault();
            addTodo( newTodoValue );
            //cerrar el modal
            setOpenModal(false);
        }
    }
    return (
        <form 
            onSubmit={onSubmit}
            onKeyPress= {onKeyUp}
        >
            <label>Escribe tu nuevo TODO</label>
            <textarea
                value={ newTodoValue }
                onChange = { onChange }
                placeholder="Cortar la cebolla"
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type="submit"                    
                    className="TodoForm-button TodoForm-button--add"
                >
                    Anadir
                </button>
            </div>
        </form>
    );
}

export { TodoForm }