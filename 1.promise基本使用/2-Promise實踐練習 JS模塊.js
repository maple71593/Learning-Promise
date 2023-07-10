//
const fs = require('fs');

//回調函数 形式
// fs.readFile('./resource/content.txt', (err, data) => {
//     // 如果出錯 則抛出錯誤
//     if(err)  throw err;
//     //輸出文件内容
//     console.log(data.toString());
// });

//Promise 形式
let p = new Promise((resolve , reject) => {
    fs.readFile('./resource/content.tx', (err, data) => {
        //如果出错
        if(err) reject(err);
        //如果成功
        resolve(data);
    });
});

//調用 then 
p.then(value=>{
    console.log(value.toString());
}, reason=>{
    console.log(reason);
});
