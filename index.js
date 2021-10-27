const express = require('express');
const app = express();
const db = require('quick.db')
const chalk = require('chalk');

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

app.get('/github', async(req, res) => {
   res.redirect('https://github.com/CodeNime')
})

app.get('/discord', async(req, res) => {
   res.redirect('https://discord.gg/XYjacbW3rj')
})

app.get('/facebook', async(req, res) => {
   res.redirect('https://facebook.com/codenime.xyz')
})

app.use(function (req, res){
  res.status(404);
 
  if (req.accepts('html')) {
    res.sendFile(__dirname + '/views/404.html');
    return;
  }
});

const listener = app.listen(3000, () => {
    console.log(chalk.cyan("[ EXPRESS ] ") + "Your app is listening on port " + listener.address().port);
    
   console.log(chalk.cyan(" [ READY ] ") + "https://codenime.xyz");
  });

