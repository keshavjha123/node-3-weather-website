const request=require('request');
const forecast=(latitude,longitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=75d9da3631c25cc6ca335a603bbd38f3&query='+latitude+','+longitude+'&units=f';
    // const url='http://api.weatherstack.com/current?access_key=75d9da3631c25cc6ca335a603bbd38f3&query=32.8267,-122.4233&units=f';
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('sorry couldnt connect to the server',undefined);
        }else
        {
            callback(undefined,response.body.current.weather_descriptions[0]+'. It is currently '+(response.body.current.temperature)+' feels like '+response.body.current.feelslike)    
        }
    })

}


module.exports=forecast;