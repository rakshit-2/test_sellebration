
import './index.css';


import AOS from 'aos';
import 'aos/dist/aos.css'

import VisionValueDisplayData from '../../assets/store/visionvaluedisplayData';
import VisionValueCard1 from '../../atom/visionvalueCard1';

const VisionValueSection2=(props)=>{

    AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
    });
return (
    <>
    <div className="vision__mid">
        <div className="vision__mid__head">
            {VisionValueDisplayData.section2.heading}
        </div>
        <div className="vision__mid__box"  data-aos="fade-up">
            {VisionValueDisplayData.section2.card.map((ele)=>{
                const{id,img,heading,text}=ele;
                if(id===4)
                {
                    return(
                        <VisionValueCard1 id={id} img={img} heading={heading} text={text}/>
                    )
                }
                return(
                    <>
                    <VisionValueCard1 id={id} img={img} heading={heading} text={text}/>
                    <div className="visionvalue__line">
                    </div>
                    </>
                    
                )
            })}
        </div>
        <p id="message"></p>
    </div>
    </>
);
}

export default VisionValueSection2;