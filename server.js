var express =  require('express')

var app = express()

app.use(function(req, res, next){
    console.log("request recieved")
    console.log("req.url", req.url)
    console.log("req.methods", req.method)
    next()
    // res.send()
})
app.use(function(req, res, next){
    console.log("second middleware")
    next()
    // res.send()
})
app.use(function(req, res, next){
    console.log("third middleware")
    next()
    // res.send()
})


app.listen(8000, function(){
    console.log("== server is listening to port 8000")
})