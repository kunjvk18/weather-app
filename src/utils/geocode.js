
const request = require('request')
/*const add = (a,b,callback) =>{
    setTimeout(() => {
        const sum = a+b
        callback(sum)
    },2000)

}

add(1,4,(sum) =>{
    console.log(sum)
})
*/

const geocode = (add,callback) =>{
    const Geourl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' +encodeURIComponent(add)+ '.json?access_token=pk.eyJ1Ijoia3VuanZrMTgiLCJhIjoiY2tsMjNhbWo4MDZjOTJ3bW4xOG9kMGtneSJ9.31jFHRUHpdMEGcew1Jj_nw'

    request({url : Geourl, json : true},(error,response) => {
        if(error){
            callback('Unable to find location request..',undefined)
        }
        else if(response.body.features.length === 0){
            callback('Unable to find location.. , Try another search',undefined)
        }
        else{
        callback(undefined,{
            lat : response.body.features[0].center[1],
            long : response.body.features[0].center[0],
            location : response.body.features[0].place_name

        })
    }
    })

}

module.exports = geocode
