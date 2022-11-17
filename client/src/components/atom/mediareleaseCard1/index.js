import './index.css';
import share_img from './../../assets/image/event/share_img.svg'


const MediaReleaseCard1=(props)=>{

    if(props.flag===1)
    {
        return(
            <>
            <div key={props.id} className='mediareleasecard1__outer'  data-aos="fade-right">
                <div className='mediareleasecard1__outer__date'>
                    <div className='mediareleasecard1__outer__date__left'>
                        {props.date}
                    </div>
                    <div className='media__line'></div>
                    <div className='mediareleasecard1__outer__date__right'>
                        {props.name}
                    </div>
                </div>
                <div className='mediareleasecard1__outer__text'>
                    {props.info}
                </div>
                <div className='mediareleasecard1__outer__button' style={{display:props.buttonDisplay}}>
                    Share {'\u00A0'}<img src={share_img} className="mediareleasecard1__share__icon"/>
                </div>
            </div>
            </>
        )
    }
    else
    {

    return(
    <>
        <div key={props.id} className='mediareleasecard1__outer'  data-aos="fade-right">
            <div className='mediareleasecard1__outer__date'>
                <div className='mediareleasecard1__outer__date__left'>
                    {props.date}
                </div>
            </div>
            <div className='mediareleasecard1__outer__text'>
                {props.info}
            </div>
            <div className='mediareleasecard1__outer__button' style={{display:props.buttonDisplay}}>
                Share {'\u00A0'}<img src={share_img} className="mediareleasecard1__share__icon"/>
            </div>
        </div>
        </>
    );
    }

}

export default MediaReleaseCard1;