const http = require('http');
const { clearScreenDown } = require('node:readline');

const latitude = 40;
const longitude = -70

const url = 'http://api.weatherstack.com/current?access_key=abd94eec52fec7dfac6471c42cb0bc28&query='+encodeURIComponent(latitude)+','+encodeURIComponent(longitude)+'&units=f';

const request = http.request(url, (response) => {
    let data = '';
    response.on('data', (chunk) => {

        console.log(chunk);

    })

    response.on('end', () => {

    })
})

request.end();


