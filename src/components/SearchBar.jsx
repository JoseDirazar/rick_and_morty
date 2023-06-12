export default function SearchBar({onSearch}) {
    //console.log(characterID)
    
    
    return (
       <div>
          <input type='search' />
          <button onClick={(id) => onSearch(id)}>Agregar</button>
       </div>
    );
 }
 