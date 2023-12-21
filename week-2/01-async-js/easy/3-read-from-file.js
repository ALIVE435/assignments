let fs=require("fs")

// function promisifiedAsyncFunc(path){
//     let p=new Promise(function(resolve,reject){
//         fs.readFile(path,"utf-8",function(err,data){
//             if(err)reject(err);
//             else resolve(data)
//         })
//     })
//     return p;
// }

// async function readFile(filePath){
//     try{
//         let response=await promisifiedAsyncFunc(filePath)
//         console.log(response)
//     } 
//     catch(err){
//         console.log(err.message)
//     }
// }
// readFile("a.txt")

function readFile(path){
    fs.readFile(path,"utf-8",function(err,data){
        console.log(data)
    })
    for(let i=0;i<=10000;i++){console.log(i)}
}
readFile("a.txt")