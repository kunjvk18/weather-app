const request = require('request')

const forcast = (latitude, longitude, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/onecall?lat='+latitude+'&lon='+longitude+'&appid=f7d27a2fdf8d27a661443807e459f603'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,  ' It is currently ' + Math.round((response.body.current.temp-273.15)) + ' degree out. There is a ' + response.body.current.wind_speed + 'km/h is wind speed in your area')
        }
    })
}

module.exports = forcast