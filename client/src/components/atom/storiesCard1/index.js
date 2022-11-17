import './index.css';
import share_img from './../../assets/image/event/share_img.svg';



const StoriesCard1 = (props) => {
  return(
      <>
      <div key={props.id} className='stories__inner__section2__col__each' data-aos="fade-up">
            <div className='stories__inner__section2__col__each__img'>
                <img src={props.img} style={{width:"100%",height:"100%"}}/>
            </div>
            <div className='stories__inner__section2__col__each__text'>
                <div className='stories__inner__section2__col__each__text__topic'>
                    {props.topic}
                </div>
                <div className='stories__inner__section2__col__each__text__date'>
                    {props.date}
                </div>
                <div className='stories__inner__section2__col__each__text__heading'>
                    {props.name}
                </div>
                <div className='stories__inner__section2__col__each__text__info'>
                    {props.info}
                </div>
                <div className='stories__inner__section2__button'>
                    Share {'\u00A0'}<img src={share_img} style={{width:"15px",height:"15px"}}/>
                </div>
            </div>
        </div>
      </>
  );
};
 
export default StoriesCard1;