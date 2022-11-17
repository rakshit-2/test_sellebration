import './index.css';
import img from '../../assets/image/womenleadership_img/women_leadership_img1.svg';
const WomenLeaderShipCard2 =(props)=>{
    return (
        <>
        <div className='WomenLeaderShipCard2__outer'>
            <div className='WomenLeaderShipCard2__head' style={{backgroundColor:props.col,justifyContent:props.dis}}>
                <img className='WomenLeaderShipCard2__head_img' src={img}/>
            </div>
            <div className='WomenLeaderShipCard2__bottom'>
                <div className='WomenLeaderShipCard2__bottom__title'>
                    {props.title}
                </div>
                <div className='WomenLeaderShipCard2__bottom__info'>
                    {props.info}
                </div>
            </div>

        </div>
        </>
    )
}

export default WomenLeaderShipCard2;