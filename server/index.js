require('dotenv').config();
const express = require('express')
const app = express()
const bodyParser=require('body-parser');
const cors=require('cors');
const cron = require('node-cron');

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
const fs=require('fs')

const mysql = require('mysql2')
const db = mysql.createConnection(process.env.DATABASE_URL);


const OurStories_Recommended = require('./store/english/OurStories_Recommended.json');
const OurStories_Csr = require('./store/english/OurStories_Csr.json');
const OurStories_Leadership = require('./store/english/OurStories_Leadership.json');
const OurStories_Sustainability = require('./store/english/OurStories_Sustainability.json');

const Home_LatestNews = require('./store/english/Home_LatestNews.json');

const Leadership_Director = require('./store/english/Leadership_Director.json');
const Leadership_Head = require('./store/english/Leadership_Head.json');
const Leadership_Leader = require('./store/english/Leadership_Leader.json');
const Leadership_Vanguard = require('./store/english/Leadership_Vanguard.json');

const event = require('./store/english/event.json');
const mediarelease = require('./store/english/mediarelease.json');
const pressreport = require('./store/english/pressreport.json');
const stories = require('./store/english/stories.json');

const investor_update = require('./store/english/investor_update.json');
const investor_Company = require('./store/english/investor_Company.json');

const Innovation_Insight = require('./store/english/Innovation_Insight.json');
const Innovation_Card = require('./store/english/Innovation_Card.json');

const Download_Log = require('./store/english/Download_Log.json');
const Download_Company = require('./store/english/Download_Company.json');

const Women_Leadership_Redefining_Boundaries = require('./store/english/Women_Leadership_Redefining_Boundaries.json');
const Women_Leadership_Better_Together = require('./store/english/Women_Leadership_Better_Together.json');

const all_eng=[
  {id:0,label:OurStories_Recommended,name:'OurStories_Recommended.json'},
  {id:1,label:OurStories_Csr,name:'OurStories_Csr.json'},
  {id:2,label:OurStories_Leadership,name:'OurStories_Leadership.json'},
  {id:3,label:OurStories_Sustainability,name:'OurStories_Sustainability.json'},
  {id:4,label:Home_LatestNews,name:'Home_LatestNews.json'},
  {id:5,label:Leadership_Director,name:'Leadership_Director.json'},
  {id:6,label:Leadership_Head,name:'Leadership_Head.json'},
  {id:7,label:Leadership_Leader,name:'Leadership_Leader.json'},
  {id:8,label:Leadership_Vanguard,name:'Leadership_Vanguard.json'},
  {id:9,label:event,name:'event.json'},
  {id:10,label:mediarelease,name:'mediarelease.json'},
  {id:11,label:pressreport,name:'pressreport.json'},
  {id:12,label:stories,name:'stories.json'},
  {id:13,label:investor_update,name:'investor_update.json'},
  {id:14,label:investor_Company,name:'investor_Company.json'},
  {id:15,label:Innovation_Insight,name:'Innovation_Insight.json'},
  {id:16,label:Innovation_Card,name:'Innovation_Card.json'},
  {id:17,label:Download_Log,name:'Download_Log.json'},
  {id:18,label:Download_Company,name:'Download_Company.json'},
  {id:19,label:Women_Leadership_Redefining_Boundaries,name:'Women_Leadership_Redefining_Boundaries.json'},
  {id:20,label:Women_Leadership_Better_Together,name:'Women_Leadership_Better_Together.json'},
]



const all_static=[
  {id:0,label:OurStories_Recommended,name:'OurStories_Recommended.json'},
  {id:1,label:OurStories_Csr,name:'OurStories_Csr.json'},
  {id:2,label:OurStories_Leadership,name:'OurStories_Leadership.json'},
  {id:3,label:OurStories_Sustainability,name:'OurStories_Sustainability.json'},
  {id:4,label:Home_LatestNews,name:'Home_LatestNews.json'},
  {id:5,label:Leadership_Director,name:'Leadership_Director.json'},
  {id:6,label:Leadership_Head,name:'Leadership_Head.json'},
  {id:7,label:Leadership_Leader,name:'Leadership_Leader.json'},
  {id:8,label:Leadership_Vanguard,name:'Leadership_Vanguard.json'},
  {id:9,label:event,name:'event.json'},
  {id:10,label:mediarelease,name:'mediarelease.json'},
  {id:11,label:pressreport,name:'pressreport.json'},
  {id:12,label:stories,name:'stories.json'},
  {id:13,label:investor_update,name:'investor_update.json'},
  {id:14,label:investor_Company,name:'investor_Company.json'},
  {id:15,label:Innovation_Insight,name:'Innovation_Insight.json'},
  {id:16,label:Innovation_Card,name:'Innovation_Card.json'},
  {id:17,label:Download_Log,name:'Download_Log.json'},
  {id:18,label:Download_Company,name:'Download_Company.json'},
  {id:19,label:Women_Leadership_Redefining_Boundaries,name:'Women_Leadership_Redefining_Boundaries.json'},
  {id:20,label:Women_Leadership_Better_Together,name:'Women_Leadership_Better_Together.json'},
]





const AllGetter= require('./store/allGetter.json');





var TJO = require('translate-json-object')();

TJO.init({
  googleApiKey: 'AIzaSyBiDW05Gs9yRKPvRgenjAltUN78TB_rAVU',
});





const createJson=(query,name,lang)=>
{
  const finished=(err)=>{
    if(err)
    {
      console.log(err)
      return;
    }
  }
  db.query(query,(err,result)=>{
    const jsonData=JSON.stringify(result,null,2)
    fs.writeFile("./store"+name,jsonData,finished);
    return;
  })
}


cron.schedule('0 0 0 * * *', () => {

  const finished=(err)=>{
    if(err)
    {
      console.log(err)
      return;
    }
  }


  AllGetter.english.map((ele)=>{
    const{query,name}=ele;
    createJson(query,name)
  })


  all_eng.map((ele)=>{
    const{id,label,name}=ele;
    TJO.translate(label, 'hi')
    .then(function(data) 
    {
      const jsonData=JSON.stringify(data,null,2)
      fs.writeFile('./store/hindi/'+name,jsonData,finished);
    }).catch(function(err) 
    {
      console.log('error',err)
    });
  })

  all_eng.map((ele)=>{
    const{id,label,name}=ele;
    TJO.translate(label, 'fr')
    .then(function(data) 
    {
      const jsonData=JSON.stringify(data,null,2)
      fs.writeFile('./store/french/'+name,jsonData,finished);
    }).catch(function(err) 
    {
      console.log('error',err)
    });
  })

  all_eng.map((ele)=>{
    const{id,label,name}=ele;
    TJO.translate(label, 'de')
    .then(function(data) 
    {
      const jsonData=JSON.stringify(data,null,2)
      fs.writeFile('./store/german/'+name,jsonData,finished);
    }).catch(function(err) 
    {
      console.log('error',err)
    });
  })

  all_eng.map((ele)=>{
    const{id,label,name}=ele;
    TJO.translate(label, 'ru')
    .then(function(data) 
    {
      const jsonData=JSON.stringify(data,null,2)
      fs.writeFile('./store/russian/'+name,jsonData,finished);
    }).catch(function(err) 
    {
      console.log('error',err)
    });
  })


  all_eng.map((ele)=>{
    const{id,label,name}=ele;
    TJO.translate(label, 'zh-CN')
    .then(function(data) 
    {
      const jsonData=JSON.stringify(data,null,2)
      fs.writeFile('./store/chinese/'+name,jsonData,finished);
    }).catch(function(err) 
    {
      console.log('error',err)
    });
  })

  all_eng.map((ele)=>{
    const{id,label,name}=ele;
    TJO.translate(label, 'ja')
    .then(function(data) 
    {
      const jsonData=JSON.stringify(data,null,2)
      fs.writeFile('./store/japnese/'+name,jsonData,finished);
    }).catch(function(err) 
    {
      console.log('error',err)
    });
  })

  all_eng.map((ele)=>{
    const{id,label,name}=ele;
    TJO.translate(label, 'pt')
    .then(function(data) 
    {
      const jsonData=JSON.stringify(data,null,2)
      fs.writeFile('./store/portuguese/'+name,jsonData,finished);
    }).catch(function(err) 
    {
      console.log('error',err)
    });
  })


  all_eng.map((ele)=>{
    const{id,label,name}=ele;
    TJO.translate(label, 'es')
    .then(function(data) 
    {
      const jsonData=JSON.stringify(data,null,2)
      fs.writeFile('./store/spanish/'+name,jsonData,finished);
    }).catch(function(err) 
    {
      console.log('error',err)
    });
  })
  
  // TJO.translate(Download_Log, 'hi')
  // .then(function(data) 
  // {
  //   console.log(data);
  // }).catch(function(err) 
  // {
  //   console.log('error',err)
  // }); 



});







app.get('/test', (req, res) => {
  const getAll="select * from test;";
  db.query(getAll,(err,result)=>{
      res.send(result)
  })
})


app.get('/', (req, res) => {
  res.send("hello")
})

//Home -- connection 4 table our stories 1 table latest news

app.get('/home/our-stories/OurStories',(req,res)=>{
  var x=req.query.name;
  if(x=="recommended")
  {
    res.send(OurStories_Recommended);
  }
  else if(x==="leadership")
  {
    res.send(OurStories_Leadership);
  }
  else if(x==="csr")
  {
    res.send(OurStories_Csr);
  }
  else if(x=="sustainability")
  {
    res.send(OurStories_Sustainability);
  }
  else
  {
    var result={data:["err"]}
    res.send(result)
  }
})

app.get('/home/latest-news',(req,res)=>{
  res.send(Home_LatestNews);
})











//Leadership -- connection 4 table

app.get('/leadership/detail-each',(req,res)=>{
  var y=req.query.name;
  if(y=="director")
  {
    res.send(Leadership_Director)
  }
  else if(y=="head")
  {
    res.send(Leadership_Head)
  }
  else if(y=="leader")
  {
    res.send(Leadership_Leader)
  }
  else if(y=="vanguard")
  {
    res.send(Leadership_Vanguard)
  }
  else
  {
    var result={data:["err"]}
    res.send(result)
  }
})









// event section data get

app.get('/event/all-data',(req,res)=>{
  var e=req.query.name;
  res.send(event)
})





// mediarelease section data get

app.get('/media-release/all-data',(req,res)=>{
  var e=req.query.name;
  res.send(mediarelease)
})




// pressreport section data get

app.get('/press-report/all-data',(req,res)=>{
  var e=req.query.name;
  res.send(pressreport)
})


// Stories section data get

app.get('/stories/all-data',(req,res)=>{
  var e=req.query.name;
  res.send(stories)
})




// investor_update section data get

app.get('/investor/update-data',(req,res)=>{
  var e=req.query.name;
  res.send(investor_update)
})

// investor_company section data get

app.get('/investor/company-data',(req,res)=>{
  var e=req.query.name;
  res.send(investor_Company)
})





// innovation_insight section data get

app.get('/innovation/insight-data',(req,res)=>{
  var e=req.query.name;
  res.send(Innovation_Insight)
})

app.get('/innovation/card-data',(req,res)=>{
  var e=req.query.name;
  res.send(Innovation_Card)
})

//downloads sec1 log data

app.get('/download/log-data',(req,res)=>{
  res.send(Download_Log)
})

app.get('/download/company-data',(req,res)=>{
  res.send(Download_Company)
})



//women leadership log data

app.get('/women-leadership/redefining-data',(req,res)=>{
  res.send(Women_Leadership_Redefining_Boundaries)
})

app.get('/women-leadership/better-data',(req,res)=>{
  res.send(Women_Leadership_Better_Together)
})


// post request


//contact us data update
// ContactUs

console.log()



app.post('/contact-us/full-data',(req,res)=>{
  var name=req.body.name;
  var email=req.body.email;
  var org=req.body.org;
  var contact=req.body.contact;
  var qfor=req.body.qfor;
  var qtype=req.body.qtype;
  var yourQ=req.body.yourQ;
  
  const ele="insert into ContactUs(name,Organisation,Email,contact,queryFor,queryType,yourQuery) values(?,?,?,?,?,?,?);";

  db.query(ele,[name,org,email,contact,qfor,qtype,yourQ],(err,result)=>{
    res.send(result);
  })
})

const port=process.env.PORT || 3001;
app.listen(port,()=>{
    console.log(`listning on port ${port}`);
});