const express = require('express');
const app = express();
const db = require('quick.db')

app.use(express.static('public'))

let base = db.fetch(`base`); 

setInterval(function() {
  base = db.fetch(`base`)
}, 5000)

app.get('/', async(req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/base', async(req, res) => {
    if(!req.query.q) {
       db.add('base', 1)
res.sendFile(__dirname + '/views/artikel/base.html')
} else if(req.query.q === "count")

   res.status(200).json({
    data: {
        count: db.fetch('base')
    }
    }) 
})

app.get('/test', async(req, res) => {
    res.sendFile(__dirname + '/views/artikel/test.html')
})

app.get('/dibilangin', async(req, res) => {
    res.send("Never gonna' give you up\nNever gonna' let you down\nNever gonna' run around\nand desert you")
})

const listener = app.listen(3000, () => {
    console.log("Your app is listening on port http://localhost:" + listener.address().port);
  });