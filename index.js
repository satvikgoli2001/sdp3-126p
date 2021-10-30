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
} else if(req.query.q === "count") {
 res.status(200).json({
    data: {
        count: db.fetch('base')
    }
    }) 
} else {
  res.status(400).sendFile(__dirname + '/views/http-err/400.html')
}
})

app.get('/tags/:tag?', function (req, res) {

  // akan di perlengkap nanti saat sudah ada beberapa category terisi!
if(!req.params.tag) {
   res.sendFile(__dirname + '/views/tags.html')
 } else if(req.params.tag === "tagName") { 
    res.sendFile(__dirname + '/views/tags/baseTags.html')
  } else {
    res.sendFile(__dirname + '/views/http-err/404.html')
  }
 
})

app.get('/page/:num?', function (req, res) {
  if(!req.params.num) {
    res.redirect('https://codenime.xyz/')
  } else if(req.params.num === "1") {
    res.redirect('https://codenime.xyz/')
  } else if(req.params.num === "2") {
    res.sendFile(__dirname + '/views/page/2.html')
  } else {
    res.sendFile(__dirname + '/views/http-err/404.html')
  }
})

app.get('/projects/:project?', function (req, res) {
  if(!req.params.project) {
    res.sendFile(__dirname + '/views/soon.html')
  } else if(req.params.project === "projectName") {
    res.sendFile(__dirname + '/views/soon.html')
  } else {
    res.sendFile(__dirname + '/views/http-err/404.html')
  }
})

app.get('/test', async(req, res) => {
  res.sendFile(__dirname + '/views/test.html')
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
    res.sendFile(__dirname + '/views/http-err/404.html');
    return;
  }
});

const listener = app.listen(3000, () => {
    console.log(chalk.cyan("[ EXPRESS ] ") + "Your app is listening on port " + listener.address().port);
    
   console.log(chalk.cyan("[ READY ] ") + "https://codenime.xyz");
  });
