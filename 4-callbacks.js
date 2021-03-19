const doWorkCallback = (callback) => {
setTimeout( ()=> {

   // callback('This is my error', undefined)
    callback(undefined, [1, 4, 7])
}, 2000)

}

doWorkCallback((error, result) => {
    if(error){
        return console.log(error)
    }

    console.log(result)

})













/* 


























setTimeout(() => {
console.log('2 ms gap');

}, 2000);

const name = ['andrew', 'Jen', 'Rikita'];

// wrong way of using asynchronous callbacks 
// const geocode = (address, callback) => {

//     setTimeout(() => {
//         const data = {
//             latitude: 0, 
//             longitude: 0
//         }
//         return data;
//     }, 2000);

// }
// const data = geocode('Bangalore');
//  console.log(data);

// right way of defining and using callback functions
// const geocode = (address, callback) => {
//     setTimeout(() => {

//         const data = {
//             latitude : 0, 
//             longitude: 0
//         }
//         callback(data);
//     }, 2000);
// }

// geocode('bangalore', (data) => {
// console.log(data);
// })


const add = (x, y, callback) => {
    setTimeout(() => {
        callback( x + y );
    }, 2000);
}

add(4, 7, (sum) => {
console.log('Sum of two numbers  ' + sum);
})


 */