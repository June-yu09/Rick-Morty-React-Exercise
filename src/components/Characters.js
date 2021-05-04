import { flipCard } from 'react'

function Characters(props) {

    
    return (
        <>
        


                {
                    props.myData.length !== 0?
                    props.myData.map((d,i)=>{
                    return (
                        <div className="flipCard">
                        
                                <div className="flipCardInner">
                                    <div className="flipCardFront">
                                        <img key={d.id} src={d.image} alt="characterImage"/>

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