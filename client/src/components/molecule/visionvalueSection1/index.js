import './index.css';
import VisionValueDisplayData from '../../assets/store/visionvaluedisplayData';

const VisionValueSection1=(props)=>{
return (
    <>
    <div className="vision__top">
        <div className="vision__top__inner">
            <div className="vision__top__home">
                {VisionValueDisplayData.section1.heading1}
            </div>
            <div className="vision__top__values">
                {VisionValueDisplayData.section1.heading2}
            </div>
            <div className="vision__top__box">
                {VisionValueDisplayData.section1.card.map((ele)=>{
                    const{id,heading,text}=ele;
                    return(
                    <div key={id} className="vision__top__box__left" >
                        <div className="vision__top__box__left__inner1">
                            {heading}
                        </div>
                        <div className="vision__top__box__left__inner2">
                            {text} 
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    </div>
    </>
);
}

export default VisionValueSection1;


