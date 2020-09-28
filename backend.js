const http=require("http");
const fs=require("fs");
var requests=require("requests");

const homeFile= fs.readFileSync("home.html","utf-8");

const replaceval=(tempval,orgval)=>{
    let temprature=tempval.replace("{%tempval%}",orgval.main.temp);
    temprature=temprature.replace("{%tempmin%}",orgval.main.temp_min);
    temprature=temprature.replace("{%tempmax%}",orgval.main.temp_max);
    temprature=temprature.replace("{%location%}",orgval.name);
    temprature=temprature.replace("{%country%}",orgval.sys.country);
    temprature=temprature.replace("{%tempstatus%}",orgval.weather[0].main);
    return temprature;
}

const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        requests("http://api.openweathermap.org/data/2.5/weather?q=Bharatpur&units=metric&appid=36c9551c6942ca3b5949bda30b152cf4")
        .on('data',  (chunk)=> {
            const objData=JSON.parse(chunk);
            const arrData=[objData];
            const realTimeData=arrData.map((val)=>replaceval(homeFile,val)).join("");
            res.write(realTimeData);
            console.log(realTimeData);
        })
        .on('end',  (err)=> {
        if (err) return console.log('connection closed due to errors', err);
        res.end();
        });

    }else{
        res.end("File Not Found");
    }
});

server.listen(8000,"127.0.0.1");