import './index.css';

const businessbrandCard1=(props)=>{
return (
    <>
        <div className="businessbrandCard1__outer" >
            <div className="businessbrandCard1__inner" >
                {props.info}
            </div>
        </div>
    </>
);
}

export default businessbrandCard1;