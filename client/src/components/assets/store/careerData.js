import linkedin from './../image/career/nav_linkedin_img.svg';
import twitter from './../image/career/nav_twitter_img.svg';
import youtube from './../image/career/nav_youtube_img.svg';
import test from './../image/test.png';


import mountain from './../image/career/mountain_img.svg';
import book from './../image/career/book_img.svg';
import stage from './../image/career/stage_img.svg';
import ppl from './../image/career/ppl_img.svg';

const CareerData={
    section1:{
        heading:"A WORLD FULL OF POSSIBILITIES AWAITS YOU",
        vid:"https://www.youtube.com/embed/B7bSbcYNfRw",
        icon:[
            {id:0,img:twitter},
            {id:1,img:linkedin},
            {id:2,img:youtube}
        ],
        text:"Take a glimse at the selebration journey here",
    },
    section3:{
        img:"",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, the industry's standard dummy text ever since the 1500s,",
        name:'XYZ NAME',
    },
    section4:{
        heading:"OUR BRANDS",
        card:[
            {id:0,img:test,text:"Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry."},
            {id:1,img:test,text:"Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry."},
            {id:2,img:test,text:"Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry."},
            {id:3,img:test,text:"Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry."},
        ]
    },
    section5:{
        heading:"A World Of Opportunities",
        text:"Click THROUGH AND EXPLORE THE 4 PILLARS OF OUR EMPLOYEE VALUE PROPOSITION",
        card:[
            {id:0,img:mountain,text:"ENHANCE CAREERS",col:"#374E91"},
            {id:1,img:book,text:"LEARNING & DEVELOPMENT",col:"#FF4A46"},
            {id:2,img:stage,text:"REWARDS & RECOGNITION",col:"#C67BF3"},
            {id:3,img:ppl,text:"ENRICH YOUR LIFE",col:"#C9460D"},
        ]
    },
    section6:{
        heading:"CORPORATE SOCIAL RESPONSIBILITY",
        card:[
            {id:0,text:"Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry."},
            {id:1,text:"Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry."},
            {id:2,text:"Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry."},
        ]
    }
}
export default CareerData;