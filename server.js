const express = require('express')
const path = require('path')

const scraper = require('./utils/scraper')
const app = express()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



app.get('/', (req, res) => {
  const indexArticles = new Promise((resolve, reject) => {
    scraper
      .scrapeIndex()
      .then(data => {
        resolve(data)
        
      })
      .catch(err => reject('Medium scrape failed'))
  })

  const leftSidebar = new Promise((resolve, reject) => {
    scraper
      .scrapeLeftSidebar()
      .then(data => {
      console.log(data)
      resolve(data)
          
      })
      .catch(err => reject(' Scrape failed'))
    })
  
 

  Promise.all([indexArticles,leftSidebar])
  
    .then(data => {
      res.render('index', { data: { articles: data[0],main: data[1]} })
    })
    .catch(err => res.status(500).send(err))
})

app.listen(process.env.PORT || 5000)