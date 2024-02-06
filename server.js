// use the predefined modules
const http = require('http');
const url = require('url');

// use our date and messages modules
const date = require('./modules/utils');
const messages = require('./modules/messages');

// define our port
const port = process.env.PORT || 8888;

// listen on the port
http.createServer(function(req,res) {
    res.writeHead(200,{'Content-Type': 'text/html'});

    let currentDate = date.date();
    let param = url.parse(req.url,true);
    let name = param.query["name"] || "Coder";
    const color = 'style="color:blue;"';

    let text = `<p ${color}>${messages.part1}${name}${messages.part2}${currentDate}</p>`;
    res.end(text);
}).listen(port);