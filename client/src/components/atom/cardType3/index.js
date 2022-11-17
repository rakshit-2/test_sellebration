import './index.css';

const CardType3=(props)=>{
  return (
    <div key={props.id} className="cardtype3__team__card__each">
        <div className="cardtype3__team__card__title">
            {props.job}
        </div>
        <div className="cardtype3__team__card__name">
            {props.name}
        </div>
        <div className="cardtype3__team__card__pic">
        <img src={props.img} className="cardtype3__team__card__pic__img"/>
        </div>
    </div>
  );
}

export default CardType3;