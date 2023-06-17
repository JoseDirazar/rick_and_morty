
//import cardStyle from "./css/Card.css"
import { NavLink } from "react-router-dom";
import { addFav, removeFav } from '../redux/actions';
import { connect } from 'react-redux';
import { useEffect, useState } from "react";
function Card({addFav, removeFav, name, species, id, gender, image, onClose, myFavorites}) {
    //consolelog()
    const [isFav, setIsFav] = useState(false)

    const handleFavorite = () => {
      if (isFav) {
         setIsFav(false); 
         removeFav(id)
      } else {
         setIsFav(true);
         addFav({name, species, id, gender, image, onClose})
      }
    }
    useEffect(() => {
      myFavorites.forEach((fav) => {
         if(fav.id ===  id) {
            setIsFav(true)
         }
      })
    })
    return (
       <div className="divCard">
         {
            /* isFav ? (
               <button onClick={handleFavorite}>3</button>
            ) : (
               <button onClick={handleFavorite}>e</button>
            ) */
            <button onClick={handleFavorite}>{isFav ? "❤️" : "🤍"}</button>
         }
          <button onClick={() => onClose(id)}>X</button>
          <img src={image} alt={name} />
          <NavLink to={`/detail/${id}`}>
          <h2>{name}</h2>
          </NavLink>
         {/*  <h2>{status}</h2>   */}     
          <h2>{gender}</h2>
       </div>
    );
}
 const mapStateToProps = (state) => {
   return {
     myFavorites: state.myFavorites
   };
 };
 
 const mapDispatchToProps = (dispatch) => {
   return {
     addFav: (character) => {dispatch(addFav(character))},
     removeFav: (id) => {dispatch(removeFav(id))}
   };
 };

export default connect(mapStateToProps, mapDispatchToProps)(Card);