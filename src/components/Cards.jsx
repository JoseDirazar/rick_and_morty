import Card from './Card';

export default function Cards({ characters }) {
   //console.log(characters)
   return <div>
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
            onClose={() => window.alert('Emulamos que se cierra la card')}
               />
         </>
      })}
   </div>;
}
