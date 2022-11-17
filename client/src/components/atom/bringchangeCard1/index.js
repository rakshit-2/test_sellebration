import './index.css';
const BringChangeCard1=(props)=>{
    if(props.flag===1)
    {
        return(
            <>
            <div className='bringchangecard1__outer' style={{marginBottom:"3rem",marginTop:"0rem"}}>
                <div className='bringchangecard1__image'>
                    <img style={{width:"100%",height:"100%"}} src={props.image}/>
                </div>
                <div className='bringchangecard1__title'>
                    {props.title}
                </div>
            </div>
            </>
        )
    }
    else
    {
        return(
            <>
            <div className='bringchangecard1__outer'>
                <div className='bringchangecard1__image'>
                    <img style={{width:"100%",height:"100%"}} src={props.image}/>
                </div>
                <div className='bringchangecard1__title'>
                    {props.title}
                </div>
            </div>
            </>
        )
    }
    
}
export default BringChangeCard1;