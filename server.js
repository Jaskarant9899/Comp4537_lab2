const http = require("http");
const url = require("url");
const getDate  = require("./modules/utils.js");
const greetingMessage = require("./modules/messages.js").greetingMessage;
const port = process.env.PORT || 8999;

 http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  const parsedUrl = url.parse(req.url, true);

  const name = parsedUrl.query.name || "Guest(no entry in URL)";

  const currentTime = getDate.getDate();

  //use replace func to replace %1 with name from url string
  const formattedGreeting = greetingMessage.replace("%1", name);
  const responseMessage = `<div style="color: blue;">${formattedGreeting}. Server current date and time is ${currentTime}</div>`;

  
  res.end(responseMessage);
}).listen(port);



// server.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });
