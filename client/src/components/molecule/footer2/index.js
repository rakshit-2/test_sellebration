import './index.css';
// import FooterData from './../../assets/store/footerData';
import call from './../../assets/image/footer2_img/call_img.svg';
import print from './../../assets/image/footer2_img/print_img.svg';
import mail from './../../assets/image/footer2_img/mail_img.svg'

const Footer2=(props)=>{
return (
    <>
    <div className='footer2__outer'>
        <div className="footer2__inner">

            <div className="footer2__inner__left" style={{alignItems:"flex-start"}}>
                <div className="footer2__inner__left__heading">
                    For media related enquiries, please contact:
                </div>
                <div className="footer2__inner__left__smallheading">
                    XYZ Name
                </div>
                <div className="footer2__inner__left__text">
                    Lorem Ipsum is simply dummy text of 
                    the printing and typesetting industry. 
                    Lorem Ipsum 
                </div>
            </div>
            <div className="footer2__line">
            </div>
            <div className="footer2__line2">
            </div>
            <div className="footer2__inner__left">
                <div className="footer2__inner__left__each">
                    <img src={call} className="footer2__inner__left__each__img"/>
                    <div className="footer2__inner__left__each__text">
                        +91-00-0000-0000
                    </div>
                </div>
                <div className="footer2__inner__left__each">
                    <img src={print} className="footer2__inner__left__each__img"/>
                    <div className="footer2__inner__left__each__text">
                        +91-00-0000-0000
                    </div>
                </div>
                <div className="footer2__inner__left__each">
                    <img src={mail} className="footer2__inner__left__each__img"/>
                    <div className="footer2__inner__left__each__text">
                        Example@selebration.com
                    </div>
                </div>
            </div>
            <div className="footer2__inner__right" style={{backgroundColor:"white",height:"10rem"}}>
                <div className="footer2__inner__right__div__heading">
                    Subscribe for updates on selebration
                </div>
                <div className="footer2__inner__right__div__each">
                    <input type="email" placeholder="Enter your email" className="footer2__input"/>
                    <div className="footer2_button">
                        Submit
                    </div>
                </div>
            </div>

        </div>
    </div>
    </>
);
}

export default Footer2;