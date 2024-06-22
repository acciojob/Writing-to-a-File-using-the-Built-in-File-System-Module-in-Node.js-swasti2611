const fs = require('fs');
const http=require('http')
// TODO: Write the message "Hello, World!" to the file "output.txt"


  fs.writeFile("./output.txt","Hello, World!",(err)=>{
    if(err){
        console.error('Error writing to file:', err);
        throw err; 
    }
    console.log('Message has been written to output.txt');
  })
