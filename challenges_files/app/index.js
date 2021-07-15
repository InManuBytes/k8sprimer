const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const path = require('path');
const bodyParser = require('body-parser');
var needle = require('needle');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {
    //get quote
    //const uri = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.y9uwq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
    const uri = `mongodb+srv://devslop:09CweCYpHc5tOvwS@cluster0.y9uwq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log(uri)
    client.connect(err => {
        if (err) {
            //throw new Error("bad authentication")
            console.log(err)
            res.render('error', { error: err, connection: uri })
            return err;
         
        }
        var random = Math.floor(Math.random() * 363).toString()
        var query = { num: random };
        console.log(query)
        const collection = client.db("devslop").collection("starwars");
        // perform actions on the collection object
        collection.find(query).toArray(function(err, result) {
            if (err) throw err;
            result = result[0].quote
            res.render('index', { quote: result, resp_body: "" })
            client.close()
        })
  
    });


});

app.post('/', (req, res) => {
    console.log("in post")
    console.log(req.body.URL)
    url = req.body.URL
    //k8_ctf{D0NTRENDERUnTRusTEDur1$}
    needle.get(url, { timeout: 3000 }, function(error, ssrf_resp) {
        if (!error && ssrf_resp.statusCode == 200) {
          var resp_body = ssrf_resp.body;
          res.write(ssrf_resp.body);
          res.end();
        } else {
          res.writeHead(404, {'Content-Type': 'text/html'});
          res.write('<h2>404\'ing: <font color="blue">'+url+'</font> for you\n</h2><br><br>\n\n\n');
          res.end();
          console.log('error')
  
        }
      });

    
})

app.listen(3000, function() {
    console.log('this is on 3000');
})



