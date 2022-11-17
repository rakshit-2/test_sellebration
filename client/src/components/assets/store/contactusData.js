
import logo from './../image/test.png'

const ContactUsData={

    input:[
        {
            id:0,
            name:"Name",
            star:"block",
            type:"text",
            placeholder:"Ravi Sharma",
            inputfield:"input",
        },
        {
            id:1,
            name:"Organisation",
            star:"none",
            type:"text",
            placeholder:"ABC company ltd",
            inputfield:"input",
        },
        {
            id:2,
            name:"Email",
            star:"block",
            type:"text",
            placeholder:"Youremail@gmail.com",
            inputfield:"input",
        },
        {
            id:3,
            name:"Contact Number",
            star:"none",
            type:"number",
            placeholder:"Contact no.",
            inputfield:"input",
        },
    ]
    ,
    selectCompany:[
        {id:0,name:"Select Company"},
        {id:1,name:"company1"},
        {id:2,name:"company2"},
        {id:3,name:"company3"},
        {id:4,name:"company4"}

    ],
    selectQuery:[
        {id:0,name:"Select Query"},
        {id:1,name:"query1"},
        {id:2,name:"query2"},
        {id:3,name:"query3"},
        {id:4,name:"query4"}

    ]
    ,
    selectTextarea:{
        type:"text",
        placeholder:"Type your message",
    }
}
export default ContactUsData;