import '../css/CreateTodoButton.css';
const CreateTodoButton = ( props )=>{
    const onClickButton = () =>{
        // prevState => !prevState  ==> podemos cambiar el estado del modal
        props.setOpenModal(prevState => !prevState );
    };
    return(        
        <button 
            className='CreateTodoButton'
            onClick={ onClickButton }
        >
            {props.openModal ? 'x' : '+'}
        </button>        
    );
};

export { CreateTodoButton };