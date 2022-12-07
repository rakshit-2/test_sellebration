
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

const FooterData={
 top:{
    left:[
        {id:0,data:"About Us",link:'/home'},
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
        {id:0,img:faTwitter},
        {id:1,img:faLinkedin},
        {id:2,img:faInstagram},
        {id:3,img:faFacebook},
        {id:4,img:faYoutube},
    ]
 },
 middle:"2022 All Rights Reserved, Selebration Pvt. Ltd.",
 bottom:[
    {id:0,data:"Terms and Conditions",link:"/termsandcondition"},
    {id:1,data:"Privacy Policy",link:"/privacypolicy"},
    {id:2,data:"Site Map",link:'/sitemap'},
 ]
}
export default FooterData;