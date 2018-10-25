const express = require('express')
const app = express()
const port = 3000

app.get('/yt/:q', (req, res) => {
  console.log(new Date(), req.params)
  const q = req.params.q
  const str = q.replace(/ /g, "+") 
  
  res.redirect(`https://www.youtube.com/results?search_query=${str}`) 
})

app.listen(port, () => console.log(`yt-search-redirect running on ${port}!`))
