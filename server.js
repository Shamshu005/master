var express = require('express');
var app = express();
var mongojs = require('mongojs');
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
var db = mongojs('mongodb://localhost:27017/mydb')

//var db = mongojs('http://localhost:27017/mydb', ['collection']);
app.get('/', function(req, res) {
    var obj = {
        "aa": "aa"
    };
    db.collection('mycollection').insert(obj, function(err, result) {
        if (err)
           console.log(err);
        else if(result!=''){
            res.send('<h1 style="color:green">Hello World!'+JSON.stringify(result)+'</h1>');
        }
    });
})

// app.listen(3000, function() {
//     console.log('Example app listening on port 3000!');
// })
app.listen(process.env.PORT || 3000, function(){
  console.log('listening on', http.address().port);
});
