const add = (a, b) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(a+b)

        }, 2000)
    })
}

/* add(5, 6).then((sum) => {
    console.log(sum)

    add(5, 9).then((sum) => {
        // second promise call
        console.log(sum)

    }).catch(() => {
    console.log(e)

    })

}).catch((e) => {
    console.log(e)

})
 */


add(1, 1).then((sum) => {

    // first promise
    console.log(sum)
    return add(sum, 4) // begenning of second promise

}).then((sum2) => {
    console.log(sum2)
    
}).catch((e) => {
    console.log(e)

})




/* const doWorkPromise = new Promise((resolve, reject) => {
setTimeout(() => {

 //reject('Things went wrong')
  resolve([5, 4, 7])
  
}, 2000);
})

doWorkPromise.then((result) => {
    console.log('success', result)
}).catch((error) => {
    console.log('Error!!', error)
}) */

// This is an example of promise, if you uncomment both reject and reolve (on line number 4, 5), depending on which statement is written (either reject or resolve) the respective callback is called, and other callback function is never called. 
// Promise either resolves either to 'resolve' or ' reject'

// promise  ---- pending  ----->  Fulfilled 
                ///            |
               ////////// / rejected