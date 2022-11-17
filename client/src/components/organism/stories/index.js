import './index.css';
import Navbar from './../NavBar/index';
import { useEffect,useState } from 'react';
import Axios from 'axios';
import ApiLink from '../../assets/store/apiLink';
import LoadingScreen from '../../atom/loadingScreen';
import StoriesCard1 from './../../atom/storiesCard1/index';
import test from './../../assets/image/test.png';
import Footer from './../../molecule/footer/index';
import Footer2 from './../../molecule/footer2/index';
import alert from './../../assets/image/event/alert.svg';
import back_img from './../../assets/image/stories_img/background_img.svg';
// background_img.svg

const Stories=(props)=>{
    const[all,setAll]=useState();
    const[displayerData,setDisplayerData]=useState();
    const[company,setCompany]=useState();
    const[topic,setTopic]=useState();
    const[cname,setCname]=useState("");
    const[tname,setTname]=useState("");
    const[errHiding,setErrHiding]=useState("none");
    const[splitting,setSplitting]=useState();
    const[loadMore,setLodeMore]=useState("flex")
    
    
    const[len,setLen]=useState(8);



    


    const monthLis=["January","February","March","April","May","June","July","August","September","October","November","December"]
    const[storiesLoading,setStoriesLoading]=useState(true);


    // scroll to top

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  function getCompanyName(li)
  {
    if(li.length!==0)
    {
        var company_name=[{id:0,name:"Company Name"}];
        var checker=[]
        var k=1;
        
        for(var i=0;i<li.length;i++)
        {
            var flag=0;
            for(var j=0;j<checker.length;j++)
            {
                if(checker[j]==li[i].name)
                {
                    flag=1;
                    break
                }
            }
            if(flag===0)
            {
                company_name.push({id:k,name:li[i].name});
                checker.push(li[i].name)
                k+=1;
            }
        }
        setCompany(company_name);
    }
  }

  function getTopicName(li)
  {
    if(li.length!==0)
    {
        var topic_name=[{id:0,topic:"Topic Name"}];
        var checker=[];
        var k=1;
        
        for(var i=0;i<li.length;i++)
        {
            var flag=0;
            for(var j=0;j<checker.length;j++)
            {
                if(checker[j]==li[i].topic)
                {
                    flag=1;
                    break
                }
            }
            if(flag===0)
            {
                topic_name.push({id:k,topic:li[i].topic});
                checker.push(li[i].topic)
                k+=1;
            }
        }
        setTopic(topic_name);
    }
  }

  function getSplitting(len)
  {
    var ele=parseInt(len/3);
    var per=parseInt(len%3);
    var n=parseInt(ele);
    var lis=[0,ele,ele,n+ele,n+ele,n+n+ele];
    var flag=0;
    for(var i=0;i<per;i++)
    {
        if(flag===0)
        {
            for(var j=1;j<lis.length;j++)
            {
                lis[j]=lis[j]+1;
            }
            flag=1;
        }
        else if(flag===1)
        {
            for(var j=3;j<lis.length;j++)
            {
                lis[j]=lis[j]+1;
            }
            flag=2
        }
        else if(flag===2)
        {
            lis[5]=lis[5]+1
            flag=0
        }
    }
    setSplitting(lis);
  }

  function filterAllData(len,li)
  {
    getCompanyName(li);
    getTopicName(li);
    getSplitting(len);
    setStoriesLoading(false);
  }


  
  useEffect(() => {
      Axios.get(ApiLink+'/stories/all-data',
      {
      params:{
          name:"all",
      }
      }).then((res)=>{
            filterAllData(len,res.data);
            res.data.reverse();
            setAll(res.data);
            setDisplayerData(res.data);
      })
  }, []);




  function changeLen()
  {
    filterAllData(displayerData.length,[]);
    setLen(displayerData.length);
    setLodeMore("none");
    window.scrollTo({
        top: 200,
        behavior: 'smooth'
    });
  }


  function hidingError()
  {
      setErrHiding("none")
  }

  function filterClicked()
  {
    if((cname==="" || cname==="Company Name") || (tname==="" || tname==="Topic Name"))
    {
        setErrHiding("flex")
        setTimeout(hidingError, 3000);
        return;
    }
    else
    {
        var li=[]
        for(var i=0;i<all.length;i++)
        {
            if(all[i].name===cname && all[i].topic===tname)
            {
                li.push(all[i])
            }
        }
        
        if(li.length===0)
        {
            setDisplayerData([{id:0,name:"No Story",topic:"-",date:"-",info:"",link:"",img:""}]);
        }
        else
        {
            getSplitting(li.length);
            setDisplayerData(li);
        }

    }
    window.scrollTo({
        top: 500,
        behavior: 'smooth'
    });
  }
  return (
    <>
    <div className="stories__outer">
        <div className="stories__inner">
            <Navbar navDisplay={props.navDisplay} openNav={props.openNav}  closeNav={props.closeNav}/>
            
            
            <div className="stories__inner__section1">
                <div className='stories__inner__section1__img'>

                </div>
                <div className="stories__inner__section1__inner">
                    <div className="stories__inner__section1__inner__top">
                        Home / media
                    </div>
                    <div className="stories__inner__section1__inner__bottom">
                        Stories
                    </div>
                </div>
            </div>

            
            <div className='stories__inner__inner'>
                <div className='stories__inner__section2'>
                    {
                        storiesLoading ? (
                            <div className='loading__outer'>
                                <LoadingScreen/>    
                            </div>
                            
                        ):(
                            <>
                            <div className='stories__inner__section2__left__panel'>
                                <select className='stories__inner__section2__left__panel__field' onChange={(e)=>[setCname(e.target.value)]}>
                                    {company.map((ele)=>{
                                        const{id,name}=ele;
                                        return(
                                            <option key={id} value={name}>{name}</option>
                                        )
                                    })}
                                </select>
                                <select className='stories__inner__section2__left__panel__field' onChange={(e)=>[setTname(e.target.value)]}>
                                    {topic.map((ele)=>{
                                        const{id,topic}=ele;
                                        return(
                                            <option key={id} value={topic}>{topic}</option>
                                        )
                                    })}
                                </select>
                                <div className='stories__inner__section2__button__filter' onClick={()=>{filterClicked()}}>
                                    Filters
                                </div>
                            </div>
                                <div className='event__wronddata__modale' style={{display:errHiding}}>
                                    <div className='event__wronddata__modale__text'>
                                        <img src={alert} className="event__wronddata__modale__text__img"></img>{'\u00A0'}{'\u00A0'}Invalid Information Entered 
                                    </div>
                                </div>
                                <div className='stories__inner__section2__display'>
                                    <div className='stories__inner__section2__col'>
                                        {displayerData.slice(splitting[0],splitting[1]).map((ele)=>{
                                            const{id,name,date,info,topic,link}=ele;
                                            var year=date.slice(0,4);
                                            var month=parseInt(date.slice(5, 7));
                                            var day=date.slice(8,10);
                                            var date_value=day+" "+monthLis[month-1]+" "+year;
                                            return(
                                                <StoriesCard1 id={id} name={name} date={date_value} info={info} topic={topic} link={link} img={test}/> 
                                            )
                                        })}
                                    </div>
                                    <div className='stories__inner__section2__col'>
                                        {displayerData.slice(splitting[2],splitting[3]).map((ele)=>{
                                            const{id,name,date,info,topic,link}=ele;
                                            var year=date.slice(0,4);
                                            var month=parseInt(date.slice(5, 7));
                                            var day=date.slice(8,10);
                                            var date_value=day+" "+monthLis[month-1]+" "+year;
                                            return(
                                                <StoriesCard1 id={id} name={name} date={date_value} info={info} topic={topic} link={link} img={test}/>
                                            )
                                        })}
                                    </div>
                                    <div className='stories__inner__section2__col'>
                                        {displayerData.slice(splitting[4],splitting[5]).map((ele)=>{
                                            const{id,name,date,info,topic,link}=ele;
                                            var year=date.slice(0,4);
                                            var month=parseInt(date.slice(5, 7));
                                            var day=date.slice(8,10);
                                            var date_value=day+" "+monthLis[month-1]+" "+year;
                                            return(
                                                <StoriesCard1 id={id} name={name} date={date_value} info={info} topic={topic} link={link} img={test}/>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className='stories__inner__section2__loadmore' style={{display:loadMore}}>
                                    <div className='stories__inner__section2__loadmore__button'  onClick={()=>{changeLen()}}>
                                        Load More
                                    </div>
                                </div>
                                
                            </>
                        )
                    }
                </div>
            </div>
            <Footer2/>

            <Footer/>

        </div>
    </div>
    </>
  );
}

export default Stories;