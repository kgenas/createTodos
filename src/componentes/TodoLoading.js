
import '../css/TodoLoading.css';
const TodoLoading = () => {
    return (
        <>
        <div className='LoadingTodo-container'>
            <span className='LoadingTodo-completeIcon'></span>
            <p className='LoadingTodo-text'>cargando TODOS...</p>
            <span className='LoadingTodo-deleteIcon'></span>
        </div>
        <div className='LoadingTodo-container'>
            <span className='LoadingTodo-completeIcon'></span>
            <p className='LoadingTodo-text'>cargando TODOS...</p>
            <span className='LoadingTodo-deleteIcon'></span>
        </div>
        <div className='LoadingTodo-container'>
            <span className='LoadingTodo-completeIcon'></span>
            <p className='LoadingTodo-text'>cargando TODOS...</p>
            <span className='LoadingTodo-deleteIcon'></span>
        </div>
        </>
        
    );
}

export { TodoLoading }