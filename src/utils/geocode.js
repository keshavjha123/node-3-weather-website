const request = require('request');
const geocode=(address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoia2VzaGF2aWl0MiIsImEiOiJja24zMHBrNHcwMzg0MnlxcmtkM2FxdmxjIn0.2SJlx23H6XXeo-RkTr-oog&limit=1';
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('The server failed to connect',undefined);
        }else if (response.body.features.length===0) {
            callback('The server failed to find the location.Please try again!',undefined);
        }else{
            callback(undefined,{
                latitude:response.body.features[0].center[1],
                longitude:response.body.features[0].center[0],
                location:response.body.features[0].place_name
            })
        }
    })
}

module.exports=geocode;