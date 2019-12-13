//import 套件
const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const app = express();

//把html傳給使用者
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/toDoList.html');
})

app.use(serveStatic(path.join(__dirname, 'public')))

app.use("*", function (req, res) {
    res.status(404).send("404");
})

app.listen(3000);