import '/Users/jiyoonyu/Desktop/coding/Rick_Morty_React_Exercise/src/App.css';
import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';

function Characters(props) {

    
    const [activeModal, setActive] = useState('');

    return (
        <>
                {
                    props.wholeData.length !== 0?
                    props.wholeData.map((d)=>{

                        return (
                            <div key={d.id} className="flipCard col-3">
                                
                            
                                <div className="flipCardInner">
                                    <div className="flipCardFront">
                                        <img className='characterImage' key={d.id} src={d.image} alt="characterImage"  />
                                    </div>
                                    <div className='flipCardBack'>
                                        <h4> { d.name } </h4>
                                        <p>Status: { d.status } </p>
                                        <Button id={d.id} variant="primary" onClick={()=>{
                                                setActive(d.id);
                                            }}>More Details</Button>
                                        <Modal show={ d.id === activeModal } key={d.id} onHide={()=>{setActive('something')}} centered>
                                            <Modal.Header closeButton>
                                            <Modal.Title><h1> { d.name } </h1></Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <img className='characterImage'  src={d.image} alt="characterImage"  />
                                                <p>Status: { d.status } </p>
                                                <p>Gender: { d.gender }  </p>
                                                <p>Species: { d.species }  </p>
                                            </Modal.Body>
                                            <Modal.Footer>
                                            <Button variant="primary" onClick={()=>{setActive('something')}}>
                                                Close
                                            </Button>
                                            </Modal.Footer>
                                        </Modal>
                                            
                                    </div>

                                </div>
                            </div>
            
                            )
                    })
                    
                    : null
                }
            

         </>   
    )
}

export default Characters