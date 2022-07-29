import '../css/TodoList.css';

const TodoList = (props)=>{
    return(<>
        <section>
            <ul>
                {props.children}
                {/* 
                props.children => es
                    {todos.map( todo => (          
                      <TodoItem/>
                    ))}
                */}
            </ul>
        </section>
    </>
    );
};

export {TodoList};