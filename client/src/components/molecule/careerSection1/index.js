



import './index.css';
import CareerData from './../../assets/store/careerData'

const CareerSection1=(props)=>{
return (
    <>
    <div className="career__inner__section1">
        
        <div className="career__inner__section1__inner" data-aos="fade-left">
            <div className='career__inner__section1__inner__head'>
                <div className='career__inner__section1__inner__head__left'>
                    {CareerData.section1.heading}
                </div>
                <div className='career__inner__section1__inner__head__right'>
                {CareerData.section1.icon.map((ele)=>{
                    const{id,img}=ele;
                    return(
                        <img key={id} src={img} className="career__section1__each"/>
                    )
                })}
                </div>
            </div>
            <div className='career__inner__section1__inner__content'>
                <div className='career__inner__section1__inner__content__vid'>
                    <iframe width="100%" height="100%" src={CareerData.section1.vid} title="Demons, Counting Stars, Hymn for the Weekend - Imagine Dragons, OneRepublic, Coldplay (Lyrics)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className='career__inner__section1__inner__content__text'>
                    {CareerData.section1.text}
                </div>
            </div>
        </div>
    </div>
    </>
    
);
}

export default CareerSection1;