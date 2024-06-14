

const http = require('http');
const fs = require('fs');
const url  =  require('url');


const myServer = http.createServer((req,resp)=>{
  const log = `${Date.now()}:${req.url} New Req Received\n`;
  const myUrl = url.parse(req.url,true);
  console.log(myUrl);
  fs.appendFile('log.txt',log,(err)=>{
    switch(myUrl.pathname)
    {
      case '/':
        resp.end('Homepage');
        break
      case '/about':
        const username = myUrl.query.username;
        resp.end(`Hi,${username}`);
        break;
      default:
        resp.end('404 Not Found');
        
    }
  });
});
myServer.listen(4500);