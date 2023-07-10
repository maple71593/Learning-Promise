/**
 * 封装一个函数 mineReadFile 读取文件内容
 * 参数:  path  文件路径
 * 返回:  promise 对象
 */
mineRedFile = (path)=>{
    return new Promise((resolve,reject)=>{
        //讀取文件
       require('fs').readFile(path,(err,data)=>{
        //判斷
        if(err) reject(err);
        //成功
        resolve(data);
        });
    });
}

// 讀取文件
mineRedFile('./resource/content.txt')
// then方法
.then((result) => {
    console.log(result.toString());
},(err) => {
    console.log(err);
});