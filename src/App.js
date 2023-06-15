import './App.css';
import Cards from './components/Cards.jsx';
import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';
import Error404 from './components/Error404';
import Error404 from './components/Error404';

const EMAIL = 'jo@gmail.com';
const PASSWORD = '123asd';

function App() {
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   } 

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const [characters, setCharacters] = useState([])
   //console.log(characters)
   function onSearch(id) {
      //console.log(id)
        
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({data}) => {  
      if (data.name) {
         const char = characters.find((ch) => ch.id === Number(id))
         if(char) return alert("El personaje ya existe")
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
      
   });
   }

   function onClose(id) {
      const idBuscado = Number(id)
      //console.log(idBuscado)
      const notID = characters.filter(e => e.id !== idBuscado)
      setCharacters(notID)
   }
   const location = useLocation()
   const {id} = useParams()
   
   return (
      <div className='App' >
         {/* {location.pathname !== "/" && location.pathname !== "/home" && location.pathname !== "/about" && location.pathname !== `/detail/${id}` ? <Error404 /> : null} */}
         
         {location.pathname !== '/' && <Nav onSearch={onSearch} />}
         <Routes>
            <Route path="/" element={<Form  login={login}/>}/>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose}/* id={characters.id} *//>}/>
            <Route path="/about" element={<About />}/>
            <Route path="/detail/:id" element={<Detail />}/>
            <Route path="*" element={<Error404/>} />
         </Routes>
         
         
      </div>
   );
}

export default App;
