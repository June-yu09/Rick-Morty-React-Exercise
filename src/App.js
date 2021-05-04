import { useState, useEffect } from 'react';
import { Navbar, Form, FormControl } from 'react-bootstrap';
import './App.css';
import Characters from './components/Characters.js'
import Loading from './components/Loading.js'

function App() {
  let [myData, setData] = useState([]);
  let [myInput, setMyInput] = useState('');
  let [loading, setLoading] = useState(true);
  

  const fetchAPI = ()=>{
    fetch('https://rickandmortyapi.com/api/character/')
    .then(response=>response.json())
    .then(data=>setData(data.results))
  }

  useEffect(()=>{
    fetchAPI();
    setLoading(false);
    
  })

  return (
    <div className="App">

      <Navbar bg="primary" variant="dark">
          <Form className="searchInput" inline>
            <FormControl onChange={(e)=>{
              setMyInput(e.target.value);
            }} type="text" placeholder="Search" className="mr-sm-2" />
          </Form>
      </Navbar>

      
      <Loading loading={loading} />
      


      <Characters myData={ myData } />
      
      
    </div>
  );
}

export default App;
