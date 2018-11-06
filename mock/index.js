let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let port = 5005;
let $data = require('./routes/data');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get("/", (req, res) => res.json({ message: "Hello! Its API!" }));

app.route('/getTest')
    .get($data.testGetRequest);

app.route('/postTest')
    .post($data.testPostRequest);

app.route('/postNew')
    .post($data.postMessage);

app.route('/chat')
    .get($data.getChat);

app.route('/user/:id/')
    .get($data.getUser);

app.route('/menu')
    .get($data.getMenu);

app.route('/about')
    .get($data.aboutProject);

app.route('/contacts')
    .get($data.contacts);

app.route('/books')
    .get($data.getBooks);


app.listen(port);
console.log("Mock server listening on port " + port);

module.exports = { app };