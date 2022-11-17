import './index.css';


const CardType2=(props)=>{

    
    return(
    <>
    
        <div key={props.id} className="cardtype2__center__card">
            <div className="cardtype2__center__pic" >
                <img src={props.img} className="cardtype2__center__pic__img"/>
            </div>
            <div className="cardtype2__center__card__head">
                {props.name}
            </div>
            <div className="cardtype2_center__card__info">
                {props.info} 
            </div>
        </div>
    </>
  );
}

export default CardType2;