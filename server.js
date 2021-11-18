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

//routing middleware function
//will only be triggered if methods match. (html method get, and url /about)
app.get('/about', function(req, res, next){ 
    console.log("-- about page requested")
    res.satus(200)
    res.send("<html><body><h1>About Page</h1></body></html>")
})
app.get('/', function(req, res, next){
    console.log("-- home page requested")
    res.status(200).sendFile(_dirname + '/public/index.html')
})

app.get('/:user/status/:id', function(req, res, next){
    console.log("tweet page requested")
    console.log(" -- req.params.person:", req.params.person)
    var person = req.params.person
    if(availablePeople)
    res.status(200).sendFile(_dirname + '/public/person')
    next()
})

app.get('*', function(req, res, next){
    console.log("404!")
    res.status(404).sendFile(_dirname + '/public/404.html')
})

// app.post()
// app.patch()
// app.put()


app.listen(8000, function(){
    console.log("== server is listening to port 8000")
})