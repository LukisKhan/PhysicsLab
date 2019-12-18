//Using express server
const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port);
console.log("server started");


// Server without express
// const http = require('http');

// const server = http.createServer( (req, res) => {
//   if(req.url === '/') {
//     res.write('Hello world');
//     res.end();
//   }
// }); 

// server.listen(3000);

// console.log('Listening on port 3000...')
