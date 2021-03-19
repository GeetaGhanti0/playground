
/* const doWork = () => {

}

console.log(doWork()) //returns undefined 
 */



const add = (a, b) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
        if( a < 0 || b < 0){ 

            return reject('This is wrong, and sum cannot be generated')

        }
            resolve(a+b)

        }, 2000)
    })
}


const doWork = async() => {

const sum = await add(99, -1)
const sum2 = await add(sum, 100)
const sum3  = await add(sum2, -100)

return sum3

}


//console.log(doWork())  // returns promise, async function a;ways returns promise, with value defined by developer, this case its undefined

doWork().then((result) => {
    console.log('result', result)

}).catch((e) => {
    console.log('e', e)
}) 