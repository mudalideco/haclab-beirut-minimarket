const http = require("http"), fs = require("fs"), path = require("path");
const dir = "C:\\A\\ngrok\\data\\sites\\fc915b84-d483-4a49-99c8-22a72404d525\\site\\out";
const ct = { ".html":"text/html", ".css":"text/css", ".js":"application/javascript", ".png":"image/png", ".jpg":"image/jpeg", ".svg":"image/svg+xml", ".ico":"image/x-icon" };
http.createServer((q,r) => { let p = path.join(dir, q.url==="/"?"index.html":q.url); fs.readFile(p,(e,d)=>{ if(e){r.writeHead(404);r.end("NF")}else{r.writeHead(200,{"Content-Type":ct[path.extname(p)]||"text/plain"});r.end(d)} }); }).listen(3099,"0.0.0.0",()=>console.log("OK 3099"));
