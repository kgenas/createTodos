import { useEffect, useState } from "react";

function useLocalStorage( itemName, initialValue ) {
  
    const [error, setError] = useState(false);
    const  [ loading, setLoading ] = useState(true);
    const [item, setItem ]= useState(initialValue)
    useEffect(() =>{
      setTimeout(() => {
        try {
          
          //? uso de localStorage
          const localStorageTodos = localStorage.getItem(itemName);
          let parseItem;
          
          if(!localStorageTodos){
            localStorage.setItem(itemName,JSON.stringify(initialValue));
            parseItem = [];
          }else{
            parseItem = JSON.parse(localStorageTodos);
          }
          setItem(parseItem);
          setLoading(false);
  
        } catch (error) {
  
          setError(error);
        }
      }, 1000);
    },[initialValue,itemName])
  
    //? guardar en localStorage
    const saveItem = (newItem) =>{
  
      try {
  
        const stringfiedItem = JSON.stringify( newItem );
        localStorage.setItem(itemName,stringfiedItem);
        setItem(newItem);
        
      } catch (error) {
        setError(error);
      }
    };
    // * si hay menos de dos valores [] pero si hay mas de dos {}
    return {
      item,
      saveItem,
      loading,
      error,
  };
  }

export { useLocalStorage }