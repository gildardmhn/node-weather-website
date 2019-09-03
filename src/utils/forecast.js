const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/0987539c3e63dd113e9c5b9268d66d32/' + latitude + ',' + longitude + '?units=si&lang=fr'
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to the server', undefined)
        } else if (body.error) {
            callback('Unable to find this location. Try another', undefined)
        } else {
            callback(undefined, body.currently.summary + ' .Il fait actuellement ' + body.currently.temperature + ' degré dehors. il y a ' + body.currently.precipProbability + ' % de chance de pluie')
        }
    })
}

module.exports = forecast