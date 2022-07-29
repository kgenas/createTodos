import '../css/TodoItem.css'
const TodoItem = (props) =>{
    
    return(<>
        <li className="TodoItem">
            <span 
                className={`Icon Icon__check ${props.completed && 'Icon__check--active'}`}
                onClick = { props.onComplete }    
            >

                </span>
            <p className={`TodoItem__task ${props.completed && 'TodoItem__task--complete'}`}>{props.text}</p>
            <span 
                className="Icon Icon__delete"
                onClick={ props.onDelete }
            >
            </span>
        </li>
    </>
    );
};

export { TodoItem }; 