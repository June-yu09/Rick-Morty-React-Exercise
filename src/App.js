import React, { useState, useEffect, useRef} from 'react';
import './App.css';
import Characters from './components/Characters.js';
import Loading from './components/Loading.js';
import { Form, Navbar, FormControl } from 'react-bootstrap';


function App() {
  let [myData, setData] = useState([]);
  let [myInput, setMyInput] = useState('');
  let [loading, setLoading] = useState(true);
  let [displayingData, setDisplayingData] = useState([]);
  
  const inputRef = useRef('');

  const fetchAPI = ()=>{
    fetch('https://rickandmortyapi.com/api/character/')
    .then(response=>response.json())
    .then(data=>{
      return data.results
    })
    .then(d=>{
      setData(d);
      setDisplayingData(d);
    })
    
  }
  
  useEffect(()=>{
    fetchAPI();
    setLoading(false);
  },[])


  function matchingName(){
    let displayData = [];
    myData.forEach(obj=>{
      if (((obj.name).toUpperCase()).includes(myInput.toUpperCase())){
        displayData.push(obj);
      }
    });
    setDisplayingData(displayData);
  }

  useEffect(()=>{
    if(myData){
      matchingName();
      console.log("works")
      console.log(myData);
    }else{
      console.log('my data is still empty')
    }
  },[myInput])

  useEffect(()=>{
    inputRef.current.focus();
  },[])

  return (
    <div className="App">

      <div>
          <Navbar bg="primary" variant="dark">
              <Form className="searchInput" inline>
                  <FormControl ref={inputRef} onChange={(e)=>{
                    setMyInput(e.target.value);
                    console.log(e.target.value);
                  }} type="text" placeholder="Search" className="mr-sm-2" />
              </Form>
          </Navbar>
      </div>
      { myInput }
      
      
      <Loading loading={loading} />

      

      <Characters wholeData={ displayingData } />
      
      
    </div>
  );
}

export default App;
