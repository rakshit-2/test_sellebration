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


// const set = require('./store/set.js');

const AllGetter= require('./store/allGetter.json');





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


const OurStories_Recommended_hindi = require('./store/hindi/OurStories_Recommended.json');
const OurStories_Csr_hindi = require('./store/hindi/OurStories_Csr.json');
const OurStories_Leadership_hindi = require('./store/hindi/OurStories_Leadership.json');
const OurStories_Sustainability_hindi = require('./store/hindi/OurStories_Sustainability.json');
const Home_LatestNews_hindi = require('./store/hindi/Home_LatestNews.json');
const Leadership_Director_hindi = require('./store/hindi/Leadership_Director.json');
const Leadership_Head_hindi = require('./store/hindi/Leadership_Head.json');
const Leadership_Leader_hindi = require('./store/hindi/Leadership_Leader.json');
const Leadership_Vanguard_hindi = require('./store/hindi/Leadership_Vanguard.json');
const event_hindi = require('./store/hindi/event.json');
const mediarelease_hindi = require('./store/hindi/mediarelease.json');
const pressreport_hindi = require('./store/hindi/pressreport.json');
const stories_hindi = require('./store/hindi/stories.json');
const investor_update_hindi = require('./store/hindi/investor_update.json');
const investor_Company_hindi = require('./store/hindi/investor_Company.json');
const Innovation_Insight_hindi = require('./store/hindi/Innovation_Insight.json');
const Innovation_Card_hindi = require('./store/hindi/Innovation_Card.json');
const Download_Log_hindi = require('./store/hindi/Download_Log.json');
const Download_Company_hindi = require('./store/hindi/Download_Company.json');
const Women_Leadership_Redefining_Boundaries_hindi = require('./store/hindi/Women_Leadership_Redefining_Boundaries.json');
const Women_Leadership_Better_Together_hindi = require('./store/hindi/Women_Leadership_Better_Together.json');


const OurStories_Recommended_french = require('./store/french/OurStories_Recommended.json');
const OurStories_Csr_french = require('./store/french/OurStories_Csr.json');
const OurStories_Leadership_french = require('./store/french/OurStories_Leadership.json');
const OurStories_Sustainability_french = require('./store/french/OurStories_Sustainability.json');
const Home_LatestNews_french = require('./store/french/Home_LatestNews.json');
const Leadership_Director_french = require('./store/french/Leadership_Director.json');
const Leadership_Head_french = require('./store/french/Leadership_Head.json');
const Leadership_Leader_french = require('./store/french/Leadership_Leader.json');
const Leadership_Vanguard_french = require('./store/french/Leadership_Vanguard.json');
const event_french = require('./store/french/event.json');
const mediarelease_french= require('./store/french/mediarelease.json');
const pressreport_french = require('./store/french/pressreport.json');
const stories_french= require('./store/french/stories.json');
const investor_update_french = require('./store/french/investor_update.json');
const investor_Company_french = require('./store/french/investor_Company.json');
const Innovation_Insight_french= require('./store/french/Innovation_Insight.json');
const Innovation_Card_french = require('./store/french/Innovation_Card.json');
const Download_Log_french = require('./store/french/Download_Log.json');
const Download_Company_french = require('./store/french/Download_Company.json');
const Women_Leadership_Redefining_Boundaries_french = require('./store/french/Women_Leadership_Redefining_Boundaries.json');
const Women_Leadership_Better_Together_french= require('./store/french/Women_Leadership_Better_Together.json');


const OurStories_Recommended_chinese = require('./store/chinese/OurStories_Recommended.json');
const OurStories_Csr_chinese = require('./store/chinese/OurStories_Csr.json');
const OurStories_Leadership_chinese = require('./store/chinese/OurStories_Leadership.json');
const OurStories_Sustainability_chinese = require('./store/chinese/OurStories_Sustainability.json');
const Home_LatestNews_chinese = require('./store/chinese/Home_LatestNews.json');
const Leadership_Director_chinese = require('./store/chinese/Leadership_Director.json');
const Leadership_Head_chinese = require('./store/chinese/Leadership_Head.json');
const Leadership_Leader_chinese = require('./store/chinese/Leadership_Leader.json');
const Leadership_Vanguard_chinese = require('./store/chinese/Leadership_Vanguard.json');
const event_chinese = require('./store/chinese/event.json');
const mediarelease_chinese= require('./store/chinese/mediarelease.json');
const pressreport_chinese = require('./store/chinese/pressreport.json');
const stories_chinese= require('./store/chinese/stories.json');
const investor_update_chinese = require('./store/chinese/investor_update.json');
const investor_Company_chinese = require('./store/chinese/investor_Company.json');
const Innovation_Insight_chinese= require('./store/chinese/Innovation_Insight.json');
const Innovation_Card_chinese = require('./store/chinese/Innovation_Card.json');
const Download_Log_chinese = require('./store/chinese/Download_Log.json');
const Download_Company_chinese = require('./store/chinese/Download_Company.json');
const Women_Leadership_Redefining_Boundaries_chinese = require('./store/chinese/Women_Leadership_Redefining_Boundaries.json');
const Women_Leadership_Better_Together_chinese= require('./store/chinese/Women_Leadership_Better_Together.json');



const OurStories_Recommended_german = require('./store/german/OurStories_Recommended.json');
const OurStories_Csr_german = require('./store/german/OurStories_Csr.json');
const OurStories_Leadership_german = require('./store/german/OurStories_Leadership.json');
const OurStories_Sustainability_german = require('./store/german/OurStories_Sustainability.json');
const Home_LatestNews_german = require('./store/german/Home_LatestNews.json');
const Leadership_Director_german = require('./store/german/Leadership_Director.json');
const Leadership_Head_german = require('./store/german/Leadership_Head.json');
const Leadership_Leader_german = require('./store/german/Leadership_Leader.json');
const Leadership_Vanguard_german = require('./store/german/Leadership_Vanguard.json');
const event_german = require('./store/german/event.json');
const mediarelease_german= require('./store/german/mediarelease.json');
const pressreport_german = require('./store/german/pressreport.json');
const stories_german= require('./store/german/stories.json');
const investor_update_german = require('./store/german/investor_update.json');
const investor_Company_german = require('./store/german/investor_Company.json');
const Innovation_Insight_german= require('./store/german/Innovation_Insight.json');
const Innovation_Card_german = require('./store/german/Innovation_Card.json');
const Download_Log_german= require('./store/german/Download_Log.json');
const Download_Company_german = require('./store/german/Download_Company.json');
const Women_Leadership_Redefining_Boundaries_german = require('./store/german/Women_Leadership_Redefining_Boundaries.json');
const Women_Leadership_Better_Together_german= require('./store/german/Women_Leadership_Better_Together.json');


const OurStories_Recommended_japnese = require('./store/japnese/OurStories_Recommended.json');
const OurStories_Csr_japnese = require('./store/japnese/OurStories_Csr.json');
const OurStories_Leadership_japnese = require('./store/japnese/OurStories_Leadership.json');
const OurStories_Sustainability_japnese = require('./store/japnese/OurStories_Sustainability.json');
const Home_LatestNews_japnese = require('./store/japnese/Home_LatestNews.json');
const Leadership_Director_japnese = require('./store/japnese/Leadership_Director.json');
const Leadership_Head_japnese = require('./store/japnese/Leadership_Head.json');
const Leadership_Leader_japnese = require('./store/japnese/Leadership_Leader.json');
const Leadership_Vanguard_japnese = require('./store/japnese/Leadership_Vanguard.json');
const event_japnese = require('./store/japnese/event.json');
const mediarelease_japnese= require('./store/japnese/mediarelease.json');
const pressreport_japnese = require('./store/japnese/pressreport.json');
const stories_japnese= require('./store/japnese/stories.json');
const investor_update_japnese = require('./store/japnese/investor_update.json');
const investor_Company_japnese = require('./store/japnese/investor_Company.json');
const Innovation_Insight_japnese= require('./store/japnese/Innovation_Insight.json');
const Innovation_Card_japnese = require('./store/japnese/Innovation_Card.json');
const Download_Log_japnese= require('./store/japnese/Download_Log.json');
const Download_Company_japnese = require('./store/japnese/Download_Company.json');
const Women_Leadership_Redefining_Boundaries_japnese = require('./store/japnese/Women_Leadership_Redefining_Boundaries.json');
const Women_Leadership_Better_Together_japnese= require('./store/japnese/Women_Leadership_Better_Together.json');



const OurStories_Recommended_portuguese = require('./store/portuguese/OurStories_Recommended.json');
const OurStories_Csr_portuguese = require('./store/portuguese/OurStories_Csr.json');
const OurStories_Leadership_portuguese = require('./store/portuguese/OurStories_Leadership.json');
const OurStories_Sustainability_portuguese = require('./store/portuguese/OurStories_Sustainability.json');
const Home_LatestNews_portuguese = require('./store/portuguese/Home_LatestNews.json');
const Leadership_Director_portuguese = require('./store/portuguese/Leadership_Director.json');
const Leadership_Head_portuguese = require('./store/portuguese/Leadership_Head.json');
const Leadership_Leader_portuguese = require('./store/portuguese/Leadership_Leader.json');
const Leadership_Vanguard_portuguese = require('./store/portuguese/Leadership_Vanguard.json');
const event_portuguese = require('./store/portuguese/event.json');
const mediarelease_portuguese= require('./store/portuguese/mediarelease.json');
const pressreport_portuguese = require('./store/portuguese/pressreport.json');
const stories_portuguese = require('./store/portuguese/stories.json');
const investor_update_portuguese = require('./store/portuguese/investor_update.json');
const investor_Company_portuguese = require('./store/portuguese/investor_Company.json');
const Innovation_Insight_portuguese= require('./store/portuguese/Innovation_Insight.json');
const Innovation_Card_portuguese = require('./store/portuguese/Innovation_Card.json');
const Download_Log_portuguese= require('./store/portuguese/Download_Log.json');
const Download_Company_portuguese = require('./store/portuguese/Download_Company.json');
const Women_Leadership_Redefining_Boundaries_portuguese = require('./store/portuguese/Women_Leadership_Redefining_Boundaries.json');
const Women_Leadership_Better_Together_portuguese = require('./store/portuguese/Women_Leadership_Better_Together.json');



const OurStories_Recommended_russian = require('./store/russian/OurStories_Recommended.json');
const OurStories_Csr_russian = require('./store/russian/OurStories_Csr.json');
const OurStories_Leadership_russian = require('./store/russian/OurStories_Leadership.json');
const OurStories_Sustainability_russian = require('./store/russian/OurStories_Sustainability.json');
const Home_LatestNews_russian = require('./store/russian/Home_LatestNews.json');
const Leadership_Director_russian = require('./store/russian/Leadership_Director.json');
const Leadership_Head_russian = require('./store/russian/Leadership_Head.json');
const Leadership_Leader_russian = require('./store/russian/Leadership_Leader.json');
const Leadership_Vanguard_russian = require('./store/russian/Leadership_Vanguard.json');
const event_russian = require('./store/russian/event.json');
const mediarelease_russian= require('./store/russian/mediarelease.json');
const pressreport_russian = require('./store/russian/pressreport.json');
const stories_russian= require('./store/russian/stories.json');
const investor_update_russian= require('./store/russian/investor_update.json');
const investor_Company_russian = require('./store/russian/investor_Company.json');
const Innovation_Insight_russian= require('./store/russian/Innovation_Insight.json');
const Innovation_Card_russian= require('./store/russian/Innovation_Card.json');
const Download_Log_russian= require('./store/russian/Download_Log.json');
const Download_Company_russian= require('./store/russian/Download_Company.json');
const Women_Leadership_Redefining_Boundaries_russian = require('./store/russian/Women_Leadership_Redefining_Boundaries.json');
const Women_Leadership_Better_Together_russian= require('./store/russian/Women_Leadership_Better_Together.json');



const OurStories_Recommended_spanish = require('./store/spanish/OurStories_Recommended.json');
const OurStories_Csr_spanish = require('./store/spanish/OurStories_Csr.json');
const OurStories_Leadership_spanish = require('./store/spanish/OurStories_Leadership.json');
const OurStories_Sustainability_spanish = require('./store/spanish/OurStories_Sustainability.json');
const Home_LatestNews_spanish = require('./store/spanish/Home_LatestNews.json');
const Leadership_Director_spanish = require('./store/spanish/Leadership_Director.json');
const Leadership_Head_spanish = require('./store/spanish/Leadership_Head.json');
const Leadership_Leader_spanish = require('./store/spanish/Leadership_Leader.json');
const Leadership_Vanguard_spanish = require('./store/spanish/Leadership_Vanguard.json');
const event_spanish = require('./store/spanish/event.json');
const mediarelease_spanish = require('./store/spanish/mediarelease.json');
const pressreport_spanish = require('./store/spanish/pressreport.json');
const stories_spanish= require('./store/spanish/stories.json');
const investor_update_spanish = require('./store/spanish/investor_update.json');
const investor_Company_spanish = require('./store/spanish/investor_Company.json');
const Innovation_Insight_spanish= require('./store/spanish/Innovation_Insight.json');
const Innovation_Card_spanish = require('./store/spanish/Innovation_Card.json');
const Download_Log_spanish= require('./store/spanish/Download_Log.json');
const Download_Company_spanish = require('./store/spanish/Download_Company.json');
const Women_Leadership_Redefining_Boundaries_spanish = require('./store/spanish/Women_Leadership_Redefining_Boundaries.json');
const Women_Leadership_Better_Together_spanish= require('./store/spanish/Women_Leadership_Better_Together.json');


const lang_checker={
  "hindi":
  {
    "OurStories_Recommended1":OurStories_Recommended_hindi,
    "OurStories_Csr1":OurStories_Csr_hindi,
    "OurStories_Leadership1":OurStories_Leadership_hindi,
    "OurStories_Sustainability1":OurStories_Sustainability_hindi,
    "Home_LatestNews1":Home_LatestNews_hindi,
    "Leadership_Director1":Leadership_Director_hindi,
    "Leadership_Head1":Leadership_Head_hindi,
    "Leadership_Leader1":Leadership_Leader_hindi,
    "Leadership_Vanguard1":Leadership_Vanguard_hindi,
    "event1":event_hindi,
    "mediarelease1":mediarelease_hindi,
    "pressreport1":pressreport_hindi,
    "stories1":stories_hindi,
    "investor_update1":investor_update_hindi,
    "investor_Company1":investor_Company_hindi,
    "Innovation_Insight1":Innovation_Insight_hindi,
    "Innovation_Card1":Innovation_Card_hindi,
    "Download_Log1":Download_Log_hindi,
    "Download_Company1":Download_Company_hindi,
    "Women_Leadership_Redefining_Boundaries1":Women_Leadership_Redefining_Boundaries_hindi,
    "Women_Leadership_Better_Together1":Women_Leadership_Better_Together_hindi,
  },
  "english":
  {
    "OurStories_Recommended1":OurStories_Recommended,
    "OurStories_Csr1":OurStories_Csr,
    "OurStories_Leadership1":OurStories_Leadership,
    "OurStories_Sustainability1":OurStories_Sustainability  ,
    "Home_LatestNews1":Home_LatestNews  ,
    "Leadership_Director1":Leadership_Director  ,
    "Leadership_Head1":Leadership_Head  ,
    "Leadership_Leader1":Leadership_Leader  ,
    "Leadership_Vanguard1":Leadership_Vanguard  ,
    "event1":event  ,
    "mediarelease1":mediarelease  ,
    "pressreport1":pressreport  ,
    "stories1":stories  ,
    "investor_update1":investor_update  ,
    "investor_Company1":investor_Company  ,
    "Innovation_Insight1":Innovation_Insight  ,
    "Innovation_Card1":Innovation_Card  ,
    "Download_Log1":Download_Log  ,
    "Download_Company1":Download_Company  ,
    "Women_Leadership_Redefining_Boundaries1":Women_Leadership_Redefining_Boundaries  ,
    "Women_Leadership_Better_Together1":Women_Leadership_Better_Together  ,
  },
  "french":
  {
    "OurStories_Recommended1":OurStories_Recommended_french,
    "OurStories_Csr1":OurStories_Csr_french,
    "OurStories_Leadership1":OurStories_Leadership_french,
    "OurStories_Sustainability1":OurStories_Sustainability_french,
    "Home_LatestNews1":Home_LatestNews_french,
    "Leadership_Director1":Leadership_Director_french,
    "Leadership_Head1":Leadership_Head_french,
    "Leadership_Leader1":Leadership_Leader_french,
    "Leadership_Vanguard1":Leadership_Vanguard_french,
    "event1":event_french,
    "mediarelease1":mediarelease_french,
    "pressreport1":pressreport_french,
    "stories1":stories_french,
    "investor_update1":investor_update_french,
    "investor_Company1":investor_Company_french,
    "Innovation_Insight1":Innovation_Insight_french,
    "Innovation_Card1":Innovation_Card_french,
    "Download_Log1":Download_Log_french,
    "Download_Company1":Download_Company_french,
    "Women_Leadership_Redefining_Boundaries1":Women_Leadership_Redefining_Boundaries_french,
    "Women_Leadership_Better_Together1":Women_Leadership_Better_Together_french,
  },
  "german":
  {
    "OurStories_Recommended1":OurStories_Recommended_german,
    "OurStories_Csr1":OurStories_Csr_german,
    "OurStories_Leadership1":OurStories_Leadership_german,
    "OurStories_Sustainability1":OurStories_Sustainability_german,
    "Home_LatestNews1":Home_LatestNews_german,
    "Leadership_Director1":Leadership_Director_german,
    "Leadership_Head1":Leadership_Head_german,
    "Leadership_Leader1":Leadership_Leader_german,
    "Leadership_Vanguard1":Leadership_Vanguard_german,
    "event1":event_german,
    "mediarelease1":mediarelease_german,
    "pressreport1":pressreport_german,
    "stories1":stories_german,
    "investor_update1":investor_update_german,
    "investor_Company1":investor_Company_german,
    "Innovation_Insight1":Innovation_Insight_german,
    "Innovation_Card1":Innovation_Card_german,
    "Download_Log1":Download_Log_german,
    "Download_Company1":Download_Company_german,
    "Women_Leadership_Redefining_Boundaries1":Women_Leadership_Redefining_Boundaries_german,
    "Women_Leadership_Better_Together1":Women_Leadership_Better_Together_german,
  },
  "chinese":
  {
    "OurStories_Recommended1":OurStories_Recommended_chinese,
    "OurStories_Csr1":OurStories_Csr_chinese,
    "OurStories_Leadership1":OurStories_Leadership_chinese,
    "OurStories_Sustainability1":OurStories_Sustainability_chinese,
    "Home_LatestNews1":Home_LatestNews_chinese,
    "Leadership_Director1":Leadership_Director_chinese,
    "Leadership_Head1":Leadership_Head_chinese,
    "Leadership_Leader1":Leadership_Leader_chinese,
    "Leadership_Vanguard1":Leadership_Vanguard_chinese,
    "event1":event_chinese,
    "mediarelease1":mediarelease_chinese,
    "pressreport1":pressreport_chinese,
    "stories1":stories_chinese,
    "investor_update1":investor_update_chinese,
    "investor_Company1":investor_Company_chinese,
    "Innovation_Insight1":Innovation_Insight_chinese,
    "Innovation_Card1":Innovation_Card_chinese,
    "Download_Log1":Download_Log_chinese,
    "Download_Company1":Download_Company_chinese,
    "Women_Leadership_Redefining_Boundaries1":Women_Leadership_Redefining_Boundaries_chinese,
    "Women_Leadership_Better_Together1":Women_Leadership_Better_Together_chinese,
  },
  "russian":
  {
    "OurStories_Recommended1":OurStories_Recommended_russian,
    "OurStories_Csr1":OurStories_Csr_russian,
    "OurStories_Leadership1":OurStories_Leadership_russian,
    "OurStories_Sustainability1":OurStories_Sustainability_russian,
    "Home_LatestNews1":Home_LatestNews_russian,
    "Leadership_Director1":Leadership_Director_russian,
    "Leadership_Head1":Leadership_Head_russian,
    "Leadership_Leader1":Leadership_Leader_russian,
    "Leadership_Vanguard1":Leadership_Vanguard_russian,
    "event1":event_russian,
    "mediarelease1":mediarelease_russian,
    "pressreport1":pressreport_russian,
    "stories1":stories_russian,
    "investor_update1":investor_update_russian,
    "investor_Company1":investor_Company_russian,
    "Innovation_Insight1":Innovation_Insight_russian,
    "Innovation_Card1":Innovation_Card_russian,
    "Download_Log1":Download_Log_russian,
    "Download_Company1":Download_Company_russian,
    "Women_Leadership_Redefining_Boundaries1":Women_Leadership_Redefining_Boundaries_russian,
    "Women_Leadership_Better_Together1":Women_Leadership_Better_Together_russian,
  },
  "japnese":
  {
    "OurStories_Recommended1":OurStories_Recommended_japnese,
    "OurStories_Csr1":OurStories_Csr_japnese,
    "OurStories_Leadership1":OurStories_Leadership_japnese,
    "OurStories_Sustainability1":OurStories_Sustainability_japnese,
    "Home_LatestNews1":Home_LatestNews_japnese,
    "Leadership_Director1":Leadership_Director_japnese,
    "Leadership_Head1":Leadership_Head_japnese,
    "Leadership_Leader1":Leadership_Leader_japnese,
    "Leadership_Vanguard1":Leadership_Vanguard_japnese,
    "event1":event_japnese,
    "mediarelease1":mediarelease_japnese,
    "pressreport1":pressreport_japnese,
    "stories1":stories_japnese,
    "investor_update1":investor_update_japnese,
    "investor_Company1":investor_Company_japnese,
    "Innovation_Insight1":Innovation_Insight_japnese,
    "Innovation_Card1":Innovation_Card_japnese,
    "Download_Log1":Download_Log_japnese,
    "Download_Company1":Download_Company_japnese,
    "Women_Leadership_Redefining_Boundaries1":Women_Leadership_Redefining_Boundaries_japnese,
    "Women_Leadership_Better_Together1":Women_Leadership_Better_Together_japnese,
  },
  "portuguese":
  {
    "OurStories_Recommended1":OurStories_Recommended_portuguese,
    "OurStories_Csr1":OurStories_Csr_portuguese,
    "OurStories_Leadership1":OurStories_Leadership_portuguese,
    "OurStories_Sustainability1":OurStories_Sustainability_portuguese,
    "Home_LatestNews1":Home_LatestNews_portuguese,
    "Leadership_Director1":Leadership_Director_portuguese,
    "Leadership_Head1":Leadership_Head_portuguese,
    "Leadership_Leader1":Leadership_Leader_portuguese,
    "Leadership_Vanguard1":Leadership_Vanguard_portuguese,
    "event1":event_portuguese,
    "mediarelease1":mediarelease_portuguese,
    "pressreport1":pressreport_portuguese,
    "stories1":stories_portuguese,
    "investor_update1":investor_update_portuguese,
    "investor_Company1":investor_Company_portuguese,
    "Innovation_Insight1":Innovation_Insight_portuguese,
    "Innovation_Card1":Innovation_Card_portuguese,
    "Download_Log1":Download_Log_portuguese,
    "Download_Company1":Download_Company_portuguese,
    "Women_Leadership_Redefining_Boundaries1":Women_Leadership_Redefining_Boundaries_portuguese,
    "Women_Leadership_Better_Together1":Women_Leadership_Better_Together_portuguese,
  },
  "spanish":
  {
    "OurStories_Recommended1":OurStories_Recommended_spanish,
    "OurStories_Csr1":OurStories_Csr_spanish,
    "OurStories_Leadership1":OurStories_Leadership_spanish,
    "OurStories_Sustainability1":OurStories_Sustainability_spanish,
    "Home_LatestNews1":Home_LatestNews_spanish,
    "Leadership_Director1":Leadership_Director_spanish,
    "Leadership_Head1":Leadership_Head_spanish,
    "Leadership_Leader1":Leadership_Leader_spanish,
    "Leadership_Vanguard1":Leadership_Vanguard_spanish,
    "event1":event_spanish,
    "mediarelease1":mediarelease_spanish,
    "pressreport1":pressreport_spanish,
    "stories1":stories_spanish,
    "investor_update1":investor_update_spanish,
    "investor_Company1":investor_Company_spanish,
    "Innovation_Insight1":Innovation_Insight_spanish,
    "Innovation_Card1":Innovation_Card_spanish,
    "Download_Log1":Download_Log_spanish,
    "Download_Company1":Download_Company_spanish,
    "Women_Leadership_Redefining_Boundaries1":Women_Leadership_Redefining_Boundaries_spanish,
    "Women_Leadership_Better_Together1":Women_Leadership_Better_Together_spanish,
  },
}


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


// const test = require('./../client/src/components/assets/store/LeadershipData.js');











var TJO = require('translate-json-object')();

TJO.init({
  googleApiKey: 'AIzaSyBiDW05Gs9yRKPvRgenjAltUN78TB_rAVU',
});


var ele=
{
  "0":
  [
    {
      "head":"INTRODUCTION:",
      "text":
      [
          "In the world where everything is overexposed, Sellebration Private Limited is following this privacy policy to protect your personal identifiable information that you provide to Sellebration Private Limited through www.sellebration.ltd. You must also review and accept our Website Terms of Use as it is also applicable and govern the use of the website.",
          "This Privacy Policy does not apply to any Personal Identifiable Information that you may share with the third-party entities (including Sellebration Private Limited Entities), such as through other websites that draw a connection to the website. Please be conscious in case you opt to visit any such third-party website, you should get in touch with third party directly for their privacy policy as that third parties privacy policy will govern your activities and any Personal Identifiable Information shared with them, this privacy policy won’t be applicable there.",
          "This privacy policy describes the purposes for which Sellebration Private Limited processes your Personal Identifiable Information through its Website."  
      ]
    }
  ],
  "11":
  {
      "head":"PURPOSE OF GATHERING AND PROCESSING:",
      "text1":
      [
        "We may gather your information like title, name, gender, date of birth, email addresses, mobile number, location, and other personal identifiable information that you submit on the website (“Personal Identifiable Information”) to provide you:"
      ],
      "bullets":
      [
        "Unwrinkled, structured, and customized experience,",
        "To enable Sellebration Private Limited entities to connect with you in relation to programs managed by them or products/ services offered by them,",
        "To enable us to refine our products & services, as well as of the Sellebration Private Limited entities,",
        "To process your communication requests (such as responding to your queries or complaints),",
        "To assess your candidature for anticipated career opportunities with us,",
        "To drive promotional communications, marketing campaign for which you have consented",
        "To protect our vital interest."
      ],
      "text2":
      [
        "The PII collected for the afore mentioned purposes will not be posted in areas of the website viewable by the public or the users of the site."
      ]
  },
  "22":{
      "id":1,
      "head":"How We Collect Your Personal Data:",
      "text1":
      [
        "We collect your data in the following ways:"
      ],
      "bullets":[
        "Personal Identifiable Information provided to us by you, and",
        "Personal Identifiable Information gathered automatically conforming to your visit to the website."
      ],
      "headSmall1":"A. Data provided by you",
      "textSmall1":"Sellebration Private Limited may gather your Personal Identifiable Information in different ways from your use of this website, for instances:",
      "bulletsSmall1":
      [
        "When you reach out to us through the website (through any form via e-mail address, hyperlink or social media address posted therein),",
        "When you enroll with us to receive products and/or services of any of the Sellebration Companies,",
        "When you take part in surveys conducted by or for us,",
        "When you elect to receive any communication (including any promotional offers, any newsletter) from us, and",
        "Details may be voluntarily provided by you"
      ],
      "headSmall2":"B. Data that is gathered automatically",
      "textSmall2":"Some information about your visit to the website is automatically collected by us. This information helps us to upgrade website content and navigation and includes your IP address and the way you use and interact with its content, namely:",
      "bulletsSmall2":
      [
        "Our web servers or affiliates who provide analytics and execution enhancement services collects IP address, Operating System attributes, browsing attributes, device attributes, and language settings. The information is aggregated to estimate the number of visits, average time spent on the website, pages viewed and similar information. Sellebration Private Limited uses this information to measure the site usage, improve content, and to guarantee safety and security, as well enhance the performance of website.",
        "We may gather your Personal Identifiable Information automatically via cookies, in line with the cookie settings on your browser. For more information about Cookies, please see the section below titled “Cookies”."
      ]
  },
  "cookie":
  {
    "head":"Use of Cookies:",
    "headSmall1":"TYPE OF COOKIE",
    "headSmall2":"PURPOSE",
    "inner1Small1":"_utma,_utmb,_utmc, _utmz, display_features_cookie",
    "inner1Small2":"_clck, _clsk, CLID, ANONCHK, MR, MUID, SM",
    "inner2Small1":
    [
      "Google Analytics is used on the Websites to track visitor traffic and site performance traffic by collecting anonymous information about the average time spent on the website, the pages viewed and other relevant usage statistics.",
      "To opt out of being tracked by Google Analytics visit:"
    ],
    "inner2Small2":
    [
      "Microsoft Clarity is used on the Website to track visitor traffic and site performance traffic by collecting anonymous information about the average time spent on the website, the pages viewed and other relevant usage statistics.",
      "To opt out of being tracked by Microsoft Clarity visit:"
    ]
  },
  "1":
  [
    {
      "head":"TRANSFER OF PERSONAL IDENTIFIABLE INFORMATION TO SELLEBRATION PRIVATE LIMITED ENTITIES:",
      "text":
      [
          "The www.sellebration.ltd website is designed to give you one stop view of Sellebration Private Limited Conglomerate and enable you to uprise issues related to any product / services being offered by Sellebration Private Limited Entities. To enable us to provide you flawless experience, we may have to share your personal identifiable information with Sellebration Private Limited entities, including but not limited those listed on website. To the scope that these entities have access to your Personal Identifiable Information, we will appeal them to treat it at least as protectively as they treat Personal Identifiable Information they obtain from their authorized sources. It is possible that any of the Sellebration Private Limited Entities or amalgamation of them could merge or be acquired by another business entity. Should such a combination occur, you should expect that Sellebration Private Limited would share some or all your Personal Identifiable Information to continue to maintain and provide access to the website.  "  
      ]
    },
    {
      "head":"TRANSFER OF PERSONAL IDENTIFIABLE INFORMATION:",
      "text":
      [
          "The Personal Identifiable Information that we gather from you may be conveyed to and reserved at locations that may or may not be in India. It may be processed by the workforce operating outside the territory of India, who work for or are engaged by Sellebration Private Limited."  
      ]
    },
    {
      "head":"LINKS TO OTHER WEBSITES:",
      "text":
      [
          "Our website has links that switch you to our social networking pages such as Twitter, Facebook, LinkedIn, YouTube, and others that may be added in future. Your visits and activity thereon vis-à-vis those portals shall be looked after by their own privacy policy applicable for visiting their websites. Please read their privacy policy for getting information on their privacy practices."  
      ]
    },
    {
      "head":"PARTNER:",
      "text":
      [
          "To allow us to provide you intensified and secured user experience, we may foot into contract with various third-party vendors on periodic basis. Such engagements may include sharing of your personal identifiable information, we will ask them to treat it at least as protectively as they treat personally identifiable information they obtain from their other authorized sources.",
          "We do not market or sell your personal data to any third party."
      ]
    },
    {
      "head":"DATA RETENTION POLICY:",
      "text":
      [
        "We keep possession of your data for a reasonable time and/or as may be judicially required to be maintained as per applicable law/ or arising out of admissible purposes. We shall take reasonable steps to knock down or permanently de-identify Personal Identifiable Information that is no longer needed, including that managed by third party vendors engaged by the company quite often."
      ]
    },
    {
      "head":"CHANGING YOUR PERSONAL IDENTIFIABLE INFORMATION:",
      "text":
      [
        "Sellebration Private Limited gives you the ability to amend your Personal Identifiable Information at any time, an appeal should be made to hello@sellebration.ltd. We will, however, hold information in our files and databases Personal Identifiable Information you have requested to remove to use it in some set of conditions, such as to resolve disputes, troubleshoot problems, and implement terms and conditions of use. Further, such old Personal Identifiable Information is never completely removed from our databases due to technical and legal reasons, not limited to stored “back-up” systems. Therefore, you should be clear that all your Personal Identifiable Information will not be completely removed from our systems in response to your appeal."
      ]
    }
    ,
    {
      "head":"REGULATORY OBLIGATIONS:",
      "text":
      [
        "Due to existing regulatory environment, we can’t guarantee that all of your Personal Information will never be disclosed in ways not otherwise described in this Privacy Policy. By way of example (without limiting the foregoing), we may be required to disclose your Personal Identifiable Information to the government, law enforcement agencies, etc."
      ]
    },
    {
      "head":"DATA SECURITY:",
      "text":
      [
        "To safeguard your privacy and security, we will also take reasonable steps to verify your identity before granting access. We are committed for safeguarding your Personal Identifiable Information in our custody and have taken the steps to ensure appropriate physical, technical and managerial safeguards to protect your Personal Data from unauthorized access, alteration, transmission, and deletion. Encryption is being used at relevant points to protect your data. We test our systems on periodic basis for ensuring security of data processing."
      ]
    },
    {
      "head":"DISCLAIMER:",
      "text":
      [
        "To safeguard your privacy as mentioned above, we take finest efforts and adopt best Industry Standards Information Practice, however you acknowledge that 100% does not exist over internet. You are accountable for protecting your Personal Identifiable Information and you should not share your login credentials and/or leave your personal devices unattended while you are accessing the website, etc. The company does not guarantee, and you should not expect in the event of malware attack or negligence on your part that your Personal Information will remain private. "
      ]
    },
    {
      "head":"YOUR CONSENT:",
      "text":
      [
        "By agreeing this privacy policy and our Terms, you expressly consent to our use and disclosure of your Personal Information in the manner prescribed in this Privacy Policy."
      ]
    },
    {
      "head":"RIGHTS UNDER APPLICABLE LAWS:",
      "text":
      [
        "Your personal data is processed basis the consent you have provided by accepting this Privacy Policy.",
        "Your right to access, rectification, erasure, restriction of the processing, data portability and object to the processing of your personal data is being acknowledged by us. However, these rights are not absolute in nature and are subjected to contract, applicable legislation, record keeping requirement under applicable statutes, ongoing disputes, or potential disputes Sellebration Private Limited may foresee. To exercise these rights with respect to your personal data you may contact hello@sellebration.ltd.",
        "In the event of any misconduct/fraud/cybercrime, etc. on your part, the Company shall be at liberty to use your PII as evidence in the Court of law and shall also be entitled to carry out investigations/inquiries as it deems fit with the help of private agencies or authorities as it deems fit. By you consenting to this Notice, you agree to sharing of your PII for the aforesaid purposes and understand that exercise of your rights to that extent shall be restricted."
      ]
    },
    {
      "head":"QUESTIONS AND GRIEVANCES/ RIGHT TO LODGE A COMPLAINT:",
      "text":
      [
        "In the event, you are of the view that your personal data is not processed in accordance with the purposes as disclosed in this Privacy Policy or if you have any query related to your privacy of information or in relation to your rights under applicable law, please feel free to contact us at hello@sellebration.ltd. "
      ]
    },
    {
      "head":"NOTIFICATION OF CHANGES:",
      "text":
      [
        "Sellebration Private Limited expressly reserves at its sole discretion the right to change this Privacy Policy periodically in the future without prior notice to the Users. User shall review our Privacy Policy regularly to be sure you are fully updated with our practices and procedures in this area."
      ]
    },
    {
      "head":"Questions and updates ",
      "text":
      [
        "If you have any questions or suggestions about our privacy practices, please feel free to contact us at hello@sellebration.ltd. "
      ]
    }
  ]
}

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

  TJO.translate(ele, 'es')
  .then(function(data) 
  {
    const jsonData=JSON.stringify(data,null,2)
    fs.writeFile('./store/check/runES.json',jsonData,finished);
  }).catch(function(err) 
  {
    console.log('error',err)
  });
  TJO.translate(ele, 'fr')
  .then(function(data) 
  {
    const jsonData=JSON.stringify(data,null,2)
    fs.writeFile('./store/check/runFR.json',jsonData,finished);
  }).catch(function(err) 
  {
    console.log('error',err)
  });
  TJO.translate(ele, 'hi')
  .then(function(data) 
  {
    const jsonData=JSON.stringify(data,null,2)
    fs.writeFile('./store/check/runHI.json',jsonData,finished);
  }).catch(function(err) 
  {
    console.log('error',err)
  });
  TJO.translate(ele, 'ja')
  .then(function(data) 
  {
    const jsonData=JSON.stringify(data,null,2)
    fs.writeFile('./store/check/runJA.json',jsonData,finished);
  }).catch(function(err) 
  {
    console.log('error',err)
  });
  TJO.translate(ele, 'ru')
  .then(function(data) 
  {
    const jsonData=JSON.stringify(data,null,2)
    fs.writeFile('./store/check/runRU.json',jsonData,finished);
  }).catch(function(err) 
  {
    console.log('error',err)
  });
  TJO.translate(ele, 'pt')
  .then(function(data) 
  {
    const jsonData=JSON.stringify(data,null,2)
    fs.writeFile('./store/check/runPT.json',jsonData,finished);
  }).catch(function(err) 
  {
    console.log('error',err)
  });
  
  TJO.translate(ele, 'de')
  .then(function(data) 
  {
    const jsonData=JSON.stringify(data,null,2)
    fs.writeFile('./store/check/runDE.json',jsonData,finished);
  }).catch(function(err) 
  {
    console.log('error',err)
  });

  TJO.translate(ele, 'zh-CN')
  .then(function(data) 
  {
    const jsonData=JSON.stringify(data,null,2)
    fs.writeFile('./store/check/runCH.json',jsonData,finished);
  }).catch(function(err) 
  {
    console.log('error',err)
  });
})

// cron.schedule('0 0 0 * * *', () => {

//   const finished=(err)=>{
//     if(err)
//     {
//       console.log(err)
//       return;
//     }
//   }

//   AllGetter.english.map((ele)=>{
//     const{query,name}=ele;
//     createJson(query,name)
//   })

  
//   all_eng.map((ele)=>{
    // const{id,label,name}=ele;
    // TJO.translate(label, 'hi')
    // .then(function(data) 
    // {
    //   const jsonData=JSON.stringify(data,null,2)
    //   fs.writeFile('./store/hindi/'+name,jsonData,finished);
    // }).catch(function(err) 
    // {
    //   console.log('error',err)
    // });
//   })

//   all_eng.map((ele)=>{
//     const{id,label,name}=ele;
//     TJO.translate(label, 'fr')
//     .then(function(data) 
//     {
//       const jsonData=JSON.stringify(data,null,2)
//       fs.writeFile('./store/french/'+name,jsonData,finished);
//     }).catch(function(err) 
//     {
//       console.log('error',err)
//     });
//   })

//   all_eng.map((ele)=>{
//     const{id,label,name}=ele;
//     TJO.translate(label, 'de')
//     .then(function(data) 
//     {
//       const jsonData=JSON.stringify(data,null,2)
//       fs.writeFile('./store/german/'+name,jsonData,finished);
//     }).catch(function(err) 
//     {
//       console.log('error',err)
//     });
//   })

//   all_eng.map((ele)=>{
//     const{id,label,name}=ele;
//     TJO.translate(label, 'ru')
//     .then(function(data) 
//     {
//       const jsonData=JSON.stringify(data,null,2)
//       fs.writeFile('./store/russian/'+name,jsonData,finished);
//     }).catch(function(err) 
//     {
//       console.log('error',err)
//     });
//   })


//   all_eng.map((ele)=>{
//     const{id,label,name}=ele;
//     TJO.translate(label, 'zh-CN')
//     .then(function(data) 
//     {
//       const jsonData=JSON.stringify(data,null,2)
//       fs.writeFile('./store/chinese/'+name,jsonData,finished);
//     }).catch(function(err) 
//     {
//       console.log('error',err)
//     });
//   })

//   all_eng.map((ele)=>{
//     const{id,label,name}=ele;
//     TJO.translate(label, 'ja')
//     .then(function(data) 
//     {
//       const jsonData=JSON.stringify(data,null,2)
//       fs.writeFile('./store/japnese/'+name,jsonData,finished);
//     }).catch(function(err) 
//     {
//       console.log('error',err)
//     });
//   })

//   all_eng.map((ele)=>{
//     const{id,label,name}=ele;
//     TJO.translate(label, 'pt')
//     .then(function(data) 
//     {
//       const jsonData=JSON.stringify(data,null,2)
//       fs.writeFile('./store/portuguese/'+name,jsonData,finished);
//     }).catch(function(err) 
//     {
//       console.log('error',err)
//     });
//   })


//   all_eng.map((ele)=>{
//     const{id,label,name}=ele;
//     TJO.translate(label, 'es')
//     .then(function(data) 
//     {
//       const jsonData=JSON.stringify(data,null,2)
//       fs.writeFile('./store/spanish/'+name,jsonData,finished);
//     }).catch(function(err) 
//     {
//       console.log('error',err)
//     });
//   })
 



// });







app.get('/test', (req, res) => {
  const getAll="select * from test;";
  db.query(getAll,(err,result)=>{
      res.send(result)
  })
})


app.get('/', (req, res) => {
  res.send("sellebration.pvt.ltd alert email sent to IT TEAM")
})

//Home -- connection 4 table our stories 1 table latest news

app.get('/home/our-stories/OurStories',(req,res)=>{
  var x=req.query.name;
  if(x=="recommended")
  {
    res.send(lang_checker[req.query.language].OurStories_Recommended1);
  }
  else if(x==="leadership")
  {
    res.send(lang_checker[req.query.language].OurStories_Leadership1);
  }
  else if(x==="csr")
  {
    res.send(lang_checker[req.query.language].OurStories_Csr1);
  }
  else if(x=="sustainability")
  {
    res.send(lang_checker[req.query.language].OurStories_Sustainability1);
  }
  else
  {
    var result={data:["err"]}
    res.send(result)
  }
  
})

app.get('/home/latest-news',(req,res)=>{
  res.send(lang_checker[req.query.language].Home_LatestNews1);
})











//Leadership -- connection 4 table

app.get('/leadership/detail-each',(req,res)=>{
  var y=req.query.name;
  if(y=="director")
  {
    res.send(lang_checker[req.query.language].Leadership_Director1)
  }
  else if(y=="head")
  {
    res.send(lang_checker[req.query.language].Leadership_Head1)
  }
  else if(y=="leader")
  {
    res.send(lang_checker[req.query.language].Leadership_Leader1)
  }
  else if(y=="vanguard")
  {
    res.send(lang_checker[req.query.language].Leadership_Vanguard1)
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