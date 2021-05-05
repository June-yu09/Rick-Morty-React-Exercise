import '/Users/jiyoonyu/Desktop/coding/Rick_Morty_React_Exercise/src/App.css';
import { Button } from 'react-bootstrap';

function Characters(props) {

    
    return (
        <>
           
        


                {
                    props.wholeData.length !== 0?
                    props.wholeData.map((d,i)=>{
                    return (
                        <div className="flipCard">
                        
                                <div className="flipCardInner">
                                    <div className="flipCardFront">
                                        <img className='characterImage' key={d.id} src={d.image} alt="characterImage"  />
                                    </div>
                                    <div className='flipCardBack'>
                                        <h4> { d.name } </h4>
                                        <p>Status: { d.status } </p>
                                        <Button variant="primary">More Details</Button>

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