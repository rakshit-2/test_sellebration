
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'


const NavData=[
    {
        id:0,
        heading:"About Us",
        data:[
            {id:0,info:"Our Profile"},
            {id:1,info:"Leadership"},
            {id:2,info:"Women Leaders"},
            {id:3,info:"Vision&Values"},
            {id:4,info:"Milestones"}
        ],
        icon:[""]
    },
    {
        id:1,
        heading:"Businesses & Brands",
        data:[
            {id:0,info:"Sustainability"}
        ],
        icon:[""]
    },
    {
        id:2,
        heading:"CSR",
        data:[
            {id:0,info:"CSR At Sellebration"},
            {id:1,info:"Bringing The Change"},
            {id:2,info:"Our Strategy"},
            {id:3,info:"Stories of Hope"},
            {id:4,info:"CSR Policy"}
        ],
        icon:[""]
    },
    {
        id:3,
        heading:"Media",
        data:[
            {id:0,info:"Media Releases"},
            {id:1,info:"Media Reports"},
            {id:2,info:"Stories"},
            {id:3,info:"Events"},
            {id:4,info:"Downloads"},
            {id:5,info:"Our Logo"}
        ],
        icon:[""]
    },
    {
        id:4,
        heading:"",
        data:[
            {id:0,info:"Innovation"},
            {id:1,info:"Investors"},
            {id:2,info:"Careers"},
            {id:3,info:"Contact Us"}
        ],
        icon:[
            {id:0,info:faTwitter,link:"https://twitter.com/i/flow/login"},
            {id:1,info:faLinkedin,link:"https://in.linkedin.com/"},
            {id:2,info:faInstagram,link:"https://www.instagram.com/?hl=en"},
            {id:3,info:faFacebook,link:"https://www.facebook.com/login/"},
            {id:4,info:faYoutube,link:"https://www.youtube.com/account"},
        ]
    }
]

export default NavData;