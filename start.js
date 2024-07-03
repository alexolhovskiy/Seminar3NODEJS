const fs = require("fs");
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

var obj = { "home": 0, "about": 0 };
//var temp = JSON.stringify(obj);
//console.log(obj);
//console.log(temp);

fs.writeFileSync('test.json', JSON.stringify(obj));

function wr_file(item) {

    fs.readFile('test.json', 'utf-8', (err, data) => {
        var arr = JSON.parse(data);
        arr[item]++;
        console.log(item + ":" + arr[item]);
        fs.writeFileSync('test.json', JSON.stringify(arr));
        console.log("GET Request");
    });
}

app.get('/', (req, res) => {
    wr_file("home");
    res.render('index', {page_name:"Home"});
});


app.get('/about', (req, res) => {
    wr_file("about");
    res.render('about', { page_name: "About" });
});


app.get('/other', (req, res) => {
    res.render('other', { page_name: "Other" });
});

app.listen(3000, () => {
    console.log("Server start");
});
