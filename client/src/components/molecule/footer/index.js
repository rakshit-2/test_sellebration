import './index.css';
import { useNavigate } from 'react-router-dom';
import FooterData from './../../assets/store/footerData';


const Footer=(props)=>{
    const navigate = useNavigate();
    function footerLinkClicked(link)
    {
        navigate(link);
        return;
    }



return (
    <>
    <div className='footer__outer'>
        <div className='footer__inner'>
            <div className='footer__inner__top'>
                <div className='footer__inner__top__left'>
                {FooterData.top.left.map((item) => {
                    const {id,data,link}=item;
                    return(
                        <div key={id} className='footer__inner__top__left__each' onClick={()=>{footerLinkClicked(link)}}>
                            {data}
                        </div>
                    )
                })}
                </div>
                <div className='footer__inner__top__right'>
                {FooterData.top.right.map((item) => {
                    const {id,img}=item;
                    return(
                        <div key={id} className='footer__inner__top__left__each2'>
                            <img src={img} className="footer__img"/>
                        </div>
                    )
                })}
                </div>
            </div>
            <div className='footer__inner__mid'>
                {FooterData.middle}
            </div>
            <div className="footer__inner__bottom">
                {FooterData.bottom.map((item) => {
                    const {id,data}=item;
                    return(
                        <div key={id} className='footer__inner__top__left__each3'>                           
                        {data}
                        </div>
                    )
                })}
            </div>
        </div>  
    </div>
    </>
);
}

export default Footer;