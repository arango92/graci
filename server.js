var express=require("express"),
path=require("path"),
http=require("http"),
app=express(),
port=process.env.PORT || 5000;

app.get('/api', function(request, response){ /* When this gets called, our server has RECEIVED a request from our client */
  var firstname = request.query.firstname; /* Here, we pull the firstname and lastname query parameters sent by the client */
  var lastname = request.query.lastname; /* Example url: mywebsite.herokuapp.com/api?firstname=Gene&lastname=Lewis */
  response.send('Hello ' + firstname + ' ' + lastname + '!'); /* This line sends back the special data; here, 'Hello Gene Lewis' */
});


app.use(express.static(__dirname + "/public"));

var server = http.createServer(app);

server.listen(port);

