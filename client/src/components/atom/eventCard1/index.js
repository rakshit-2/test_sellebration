import './index.css';
import share_img from './../../assets/image/event/share_img.svg';

const EventCard1=(props)=>{
    return (
        <>
        <div key={props.id} className='event__inner__section2__left__each'>
            <div className='event__inner__section2__left__each__left'>
                <img src={props.test} style={{width:"100%",height:"100%"}}/>
            </div>
            <div className='event__inner__section2__left__each__right'>
                <div className='event__inner__section2__left__each__right__date'>
                    {props.date_value}
                </div>
                <div className='event__inner__section2__left__each__right__name'>
                    {props.name}
                </div>
                <div className='event__inner__section2__left__each__right__text'>
                    {props.info}
                </div>
                <div className='event__inner__section2__left__each__right__button'>
                    <div className='event__inner__section2__button__card'>
                        Know more
                    </div>
                    <div className='event__inner__section2__button__card'>
                        Share {'\u00A0'}<img src={share_img} style={{width:"10px",height:"10px"}}/>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
    }

export default EventCard1;