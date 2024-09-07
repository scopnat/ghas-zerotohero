const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Scopnat World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// Non functional code....
app.get('/some/path', function(req, res) {
  let url = req.param('url'),
      host = urlLib.parse(url).host;
  let regex = /^((www|beta).)?example.com/;
  if (host.match(regex)) {
      res.redirect(url);
  }
});