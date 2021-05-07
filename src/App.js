import React, { useState, useEffect, useRef} from 'react';
import './App.css';
import Characters from './components/Characters.js';
import Loading from './components/Loading.js';
import { Form, Navbar, FormControl, Button } from 'react-bootstrap';


function App() {
  let [myData, setData] = useState([]);
  let [myInput, setMyInput] = useState('');
  let [loading, setLoading] = useState(true);
  let [displayingData, setDisplayingData] = useState([]);
  let [myPage, setMyPage] =useState(1);
  
  const inputRef = useRef('');

  const fetchAPI = ()=>{
    fetch(`https://rickandmortyapi.com/api/character/?page=${myPage}`)
    .then(response=>response.json())
    .then(data=>{
      return data.results
    })
    .then(d=>{
      setData(d);
      matchingName(d);
    })
    }
  
  useEffect( ()=>{
    fetchAPI();
    setLoading(false);
    console.log('fetchAPI effect is rendering now');
    console.log('myPage Number is ', myPage);
  },[myPage])


  function matchingName(data){
    if(myInput.length!== 0){
      let displayData = [];
      data.forEach(obj=>{
        if (((obj.name).toUpperCase()).includes(myInput.toUpperCase())){
          displayData.push(obj);
        }
      });
      console.log(displayData)
      setDisplayingData(displayData);
    } else {
      setDisplayingData(data);
    }
  }

  useEffect(()=>{
    matchingName(myData);
  },[myInput])

  useEffect(()=>{
    inputRef.current.focus();
  },[])


  return (
    <div className="App">

      <div>
          <Navbar bg="primary" className="justify-content-center" variant="dark">
              <Form className="searchInput" inline>
                  <FormControl ref={inputRef} onChange={(e)=>{
                    setMyInput(e.target.value);
                    console.log(e.target.value);
                  }} type="text" placeholder="Search" className="mr-sm-2" />
              </Form>
          </Navbar>
      </div>
      
      
      <Loading loading={loading} />

      

      <div className='flexContainer'>
        <div className='row'>
          <Characters wholeData={ displayingData } />


        </div>

      </div>

      <div className='arrowContainer'>
        <div className="row  justify-content-center" >
          {
            myPage===1
            ?<Button variant="primary" className='col-xs-2 justify-content-center' onClick={()=>{
              setMyPage(myPage-1);
            }} disabled>
              이전 페이지
            </Button>
            :<Button variant="primary" className='col-xs-2 justify-content-center' onClick={()=>{
              setMyPage(myPage-1);
            }}>이전 페이지
              
            </Button>
          }

          {
            myPage===34
            ?<Button variant="primary" className='col-xs-2 justify-content-center' onClick={()=>{
              setMyPage(myPage+1);
            }} disabled>다음 페이지
              
            </Button>
            :<Button variant="primary" className='col-xs-2 justify-content-center' onClick={()=>{
              setMyPage(myPage+1);
            }}>다음 페이지
              
            </Button>
          }
          
          


          
        </div>

      </div>
      
      
    </div>
  );
}

export default App;
