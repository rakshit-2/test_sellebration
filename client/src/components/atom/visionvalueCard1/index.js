import './index.css';

const VisionValueCard1=(props)=>{
return (
    <>
        <div className="vision__mid__card" >
            <div className="vision__mid__card__pic">
                <img src={props.img} className="vision__mid__card__pic__img"></img>
            </div>
            <div className="vision__mid__card__head">
                {props.heading}
            </div>
            <div className="vision__mid__card__content">
            {props.text}
            </div>
        </div>
    </>
);
}

export default VisionValueCard1;