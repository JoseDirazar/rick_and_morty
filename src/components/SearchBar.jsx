import { useState } from "react";
export default function SearchBar({onSearch}) {
    //console.log(characterID)
    let [id, setID] = useState("")

    function handleOnChange(event) {
      setID(event.target.value)
     
    }
    function handleOnClick() {
      onSearch(id);
      setID(""); // Limpiar el contenido del input
   }

   const randomChar = () => {
      const numRan = Math.floor(Math.random() * 825) + 1
      onSearch(numRan)
   }
    
    return (
       <div>
          <input type='search' value={id} onChange={handleOnChange}/>
          <button onClick={handleOnClick/* () => onSearch(id) */}>Agregar</button>
          <button onClick={randomChar}>Random</button>
       </div>
    );
 }
 