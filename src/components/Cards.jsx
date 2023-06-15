import Card from './Card';
//import "./css/Cards.css"
export default function Cards({ characters, onClose }) {
   //console.log(characters)
   return <div className="cardContainer">
      {characters.map(e => {
         return <>
            <Card
            id={e.id}
            name={e.name}
            status={e.status}
            species={e.species}
            gender={e.gender}
            origin={e.origin.name}
            image={e.image}
            onClose={onClose}
            />
         </>
      })}
   </div>;
}
