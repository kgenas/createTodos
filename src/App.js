import { AppUI } from './componentes/AppUI';
import { TodoProvider } from './TodoContext';



function App() {
    
  return (
    <TodoProvider>
      {/* todo lo que esta andentro del TodoProvider puede usar sus propiedad  por esto ==> {props.children}
          - Los componentes que consumen el contexto deben estar envueltos en la etiqueta proveedora
      */}
      <AppUI />
    </TodoProvider>
  );
}

export default App;
/**
 * ? Analisis de nuestra aplicacion
 * * Counter: para llevar un conteo de las tareas totales y las completadas
 * * Search: para filtrar los TODOs de la lista
 * * List: en donde tendremos cada uno de los TODOs
 * * Item: sera cada uno de los TODOs
 * * Add Todo: boton para agregar un nuevo TODO
 */