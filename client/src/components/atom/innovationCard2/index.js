import './index.css';

const InnovationCard2=(props)=>{
    if(props.flag===0){
        return(
            <div key={props.id} className='innovation__sec2__inner__section3'>
                <div className='innovation__sec2__inner__section3__each1'  data-aos="fade-left">
                    <div className='innovation__sec2__inner__section3__each1__inner'>
                        <img src={props.img} className="innovation__sec2__section3__img"/>
                    </div>
                </div>
                <div className='innovation__sec2__inner__section3__each2'  data-aos="fade-right">
                    <div className='innovation__sec2__inner__section3__each2__inner'>
                        <div className='innovation__sec2__inner__section3__each2__inner__up'>
                            <div className='innovation__sec2__inner__section3__each2__inner__heading'>
                                {props.name}
                            </div>
                            <div className='innovation__sec2__inner__section3__each2__inner__text'>
                                {props.info}
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
    else
    {
        return (
            <div key={props.id}className='innovation__sec2__inner__section3'>
                <div className='innovation__sec2__inner__section3__each1'  data-aos="fade-left" style={{justifyContent:"flex-end"}}>
                    <div className='innovation__sec2__inner__section3__each1__inner'>
                        <img src={props.img} className="innovation__sec2__section3__img"/>
                    </div>
                </div>
                <div className='innovation__sec2__inner__section3__each2' data-aos="fade-right" style={{justifyContent:"flex-start"}}>
                    <div className='innovation__sec2__inner__section3__each2__inner'>
                        <div className='innovation__sec2__inner__section3__each2__inner__up'>
                            <div className='innovation__sec2__inner__section3__each2__inner__heading'>
                                {props.name}
                            </div>
                            <div className='innovation__sec2__inner__section3__each2__inner__text'>
                                {props.info}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default InnovationCard2;