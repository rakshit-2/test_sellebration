import './index.css';

const DownloadCard1=(props)=>{
return (
    <>
    <div className='downloads__card1__outer'  data-aos="fade-up">
        <div className='downloads__card1__img__outer'>
            <img className='downloads__card1__img' src={props.img}/>  
        </div>
        <div className='downloads__card1__data'>
            {props.name}
        </div>
        <div className='downloads__card1__button__outer'>
            <div className='downloads__card1__button__inner'>
                Download
            </div>
        </div>
        <div className='downloads__card1__size'>
            {props.size}
        </div>

    </div>
    </>
);
}

export default DownloadCard1;