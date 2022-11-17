import './index.css';

const DownloadCard2=(props)=>{
return (
    <>
    <div className='downloads__card2__outer'>
        <div className='downloads__card2__img__outer'>
            <img className='downloads__card2__img' src={props.img}/>  
        </div>
        <div className='downloads__card2__button__outer'>
            <div className='downloads__card2__button__inner'>
                Download
            </div>
        </div>
        <div className='downloads__card2__size'>
            {props.size}
        </div>

    </div>
    </>
);
}

export default DownloadCard2;