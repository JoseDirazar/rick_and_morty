
//import cardStyle from "./css/Card.css"
import { NavLink } from "react-router-dom";
export default function Card({name, status, id, species, gender, origin, image, onClose}) {
    //consolelog()
    return (
       <div className="divCard">
          <button onClick={() => onClose(id)}>X</button>
          <img src={image} alt={name} />
          <NavLink to={`/detail/${id}`}>
          <h2>{name}</h2>
          </NavLink>
          <h2>{status}</h2>       
          <h2>{gender}</h2>
       </div>
    );
 }
 