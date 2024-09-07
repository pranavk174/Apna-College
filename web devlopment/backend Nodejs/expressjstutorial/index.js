const express = require("express");
const app = express();


app.use(express.json())  // this is body parser jiske wajha se request ke body ka data fectch krne me help krta

//app.use(express.urlencoded())  // ye parser use hota jb jb aap form se data bhej rhe ho

// built-in middle-ware
// app.use(express.static("public"));  // iss middleware me ye hoga ki public naam k folder me jo v file hoga usko host krwa dega ye 



app.listen(3000, () =>{
    console.log("server started ")
})

// ye authentication middleware bnaya hai query parameters k liye
// const auth = ((req,res,next) =>{
//     console.log(req.query)

//     if(req.query.password==123){                    // iss condition k according agr passswrd ki value match nhi hui to authorization nhi milegi
//         next();
//     }
//     else{
//         res.sendStatus(401)                 // 401 unauthorized status code hai
//     }
// })


// ye authentication middleware bnaya hai requst k body k liye
const auth = ((req,res,next) =>{
    // console.log("hyyyyy",req.body)

    if(req.body.password==123){                    // iss condition k according agr passswrd ki value match nhi hui to authorization nhi milegi
        next();
    }
    else{
        res.sendStatus(401)                 // 401 unauthorized status code hai
    }
})

//third party middleware
const morgan = require("morgan")  //logger
app.use(morgan('default')); 

//middleware logger
// app.use((req,res,next) =>{
//     console.log(req.get("User-Agent"),req.method, req.ip, req.hostname);
//     next();  //this method is called to execute the next middleware after the execution of this middleware
// })




// ye dono same get methid ye btana chahta hai ki agr path same hai to fir phle get1 code aayega vo execute hoga 
app.get('/product/:id',  (req,res)=>{       // authentication hmne iss route pe lga diya
    res.send(
        "<h1>login success full buddy<h1>"
    )
    console.log(req.params)     
})

app.get('/', (req,res)=>{
    res.send({
        type:"Get2"
    })
})


app.post('/', auth, (req,res)=>{
    res.send({
        type:"POST"
    })
})