const http = require("http");
const url = require("url");
const { getDate } = require("./modules/utils.js");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  const name = parsedUrl.query.name || "Guest(no entry in URL)";

  const greetingMessage = require("./lang/en/user.js").greetingMessage;

  const currentTime = getDate();

  //use replace func to replace %1 with name from url string
  const formattedGreeting = greetingMessage.replace("%1", name);
  const responseMessage = `<div style="color: blue;">${formattedGreeting}. Server current date and time is ${currentTime}</div>`;

  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(responseMessage);
  res.end();
});

const port = process.env.PORT || 8999;

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
