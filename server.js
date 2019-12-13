//import 套件
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//把html傳給使用者
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/toDoList.html');
})

app.use("*", function (req, res) {
    res.status(404).send("404");
})

app.listen(3000);