import './index.css';
import { useNavigate } from 'react-router-dom';
const CsrCard3=(props)=>{

    const navigate = useNavigate();

    
    if(props.id%2===0)
    {
        return(
            <div className='csr__inner__section3' data-aos="fade-left">
                <div className='csr__inner__section3__each1'>
                    <div className='csr__inner__section3__each1__inner'>
                        <img src={props.img} className="csr__section3__img"/>
                    </div>
                </div>
                <div className='csr__inner__section3__each2'>
                    <div className='csr__inner__section3__each2__inner'>
                        <div className='csr__inner__section3__each2__inner__up'>
                            <div className='csr__inner__section3__each2__inner__heading'>
                                {props.heading}
                            </div>
                            <div className='csr__inner__section3__each2__inner__text'>
                                {props.text}
                            </div>
                        </div>
                        {props.flag ? (
                            <>
                            <div className='csr__inner__section3__each2__inner__down'>
                                <div className='csr__button' onClick={()=>{navigate('/career')}}>
                                    {props.button}
                                </div>
                            </div>
                            <div className='csr__inner__section3__each2__inner__down2'>
                                <div className='csr__button'>
                                    More..
                                </div>
                            </div>
                            </>
                            
                        ):(
                            <>
                            </>
                        )}
                    </div>
                </div>
            </div>
        )
    }
    else
    {
        return (
            <div className='csr__inner__section3' data-aos="fade-right">
                <div className='csr__inner__section3__each1' style={{justifyContent:"flex-end"}}>
                    <div className='csr__inner__section3__each1__inner'>
                        <img src={props.img} className="csr__section3__img"/>
                    </div>
                </div>
                <div className='csr__inner__section3__each2' style={{justifyContent:"flex-start"}}>
                    <div className='csr__inner__section3__each2__inner'>
                        <div className='csr__inner__section3__each2__inner__up'>
                            <div className='csr__inner__section3__each2__inner__heading'>
                                {props.heading}
                            </div>
                            <div className='csr__inner__section3__each2__inner__text'>
                                {props.text}
                            </div>
                        </div>
                        {props.flag ? (
                            <>
                            <div className='csr__inner__section3__each2__inner__down'>
                                <div className='csr__button' onClick={()=>{navigate('/career')}}>
                                    {props.button}
                                </div>
                            </div>
                            <div className='csr__inner__section3__each2__inner__down2'>
                                <div className='csr__button'>
                                    More..
                                </div>
                            </div>
                            </>
                        ):(
                            <>
                            </>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default CsrCard3;