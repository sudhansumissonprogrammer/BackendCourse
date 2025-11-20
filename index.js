import http from "http"
const port=8005
const server=http.createServer((req,res)=>{
    if(req.url="/"){
        res.end("welcome to Home Page");
    }
    else if(req.url="/about"){
        res.end("welcome to about Page");
    }
    else if(req.url="contact"){
        res.end("welcome to Contact Page");
    }
    else{
        res.end("404 not found");
    }
})


server.listen(port,()=>{
    console.log("server is started")
})  