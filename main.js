const fs = require('fs');
const http=require('http')
// TODO: Write the message "Hello, World!" to the file "output.txt"

const server=http.createServer((res,req)=>{
  fs.writeFile("./output.txt","Hello, World!",(err)=>{
    if(err){
        console.log(err);
    }
  })
})
server.listen(3000,()=>{
    console.log("sever started");
})