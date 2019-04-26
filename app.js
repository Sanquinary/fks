var express = require('express');
var app = express();

app.use(express.static(`${__dirname}/`));

app.listen(3000, function() {
  console.log('\n\n\n\n\n\n\n\n\n\nFKS is now running. Port: 3000\n\n\n\n\n\n\n\n\n\n');
});