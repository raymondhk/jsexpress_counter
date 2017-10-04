var express = require('express')
var session = require('express-session')
var app = express()
app.use(session({secret: 'thisissecret'}))
app.get('/', function(req, res){
    if(!req.session.count){
        req.session.count = 0
    }
    req.session.count += 1
    res.render('index', {count: req.session.count})
})

app.get('/plustwo', function(req, res){
    req.session.count += 1
    res.redirect('/')
})

app.get('/reset', function(req, res){
    req.session.count = 0
    res.redirect('/')
})

app.use(express.static(__dirname + "/static"))

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

app.listen(8000, function(){
    console.log('listening on port 8000')
})