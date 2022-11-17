import facebook from './../image/home_img/nav_facebook_img.svg';
import insta from './../image/home_img/nav_insta_img.svg';
import linkedin from './../image/home_img/nav_linkedin_img.svg';
import twitter from './../image/home_img/nav_twitter_img.svg';
import youtube from './../image/home_img/nav_youtube_img.svg';




const FooterData={
 top:{
    left:[
        {id:0,data:"About Us",link:'/'},
        {id:1,data:"Businesses",link:'/bussinessbrand'},
        {id:2,data:"Investors",link:'/investor'},
        {id:3,data:"CSR",link:'/csr'},
        {id:4,data:"Sustainability",link:'/noroute'},
        {id:5,data:"Innovation",link:'/Innovation'},
        {id:6,data:"Media",link:'/mediarelease'},
        {id:7,data:"Careers",link:'/career'},
        {id:8,data:"Contact Us",link:'/contactus'},
    ],
    right:[
        {id:0,img:twitter},
        {id:1,img:linkedin},
        {id:2,img:insta},
        {id:3,img:facebook},
        {id:4,img:youtube},
    ]
 },
 middle:"2022 All Rights Reserved, Selebration Pvt. Ltd.",
 bottom:[
    {id:0,data:"Terms and Conditions"},
    {id:1,data:"Privacy policy"},
    {id:2,data:"site map"},
 ]
}
export default FooterData;