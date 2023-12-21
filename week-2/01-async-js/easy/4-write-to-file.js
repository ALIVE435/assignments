let fs=require("fs");

function writeFile(path,dataToWrite){
    fs.writeFile(path,dataToWrite,function(){
        console.log("data has been written to thw file")
        fs.readFile(path,"utf-8",(err,data)=>{
            console.log(data);
        })
    })
}
writeFile("a.txt","hello World");