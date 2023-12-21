/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res()
        },milliseconds);
    });
}

async function main(milliseconds){
    //console.log("thread is busy")
    await sleep(milliseconds); //async call krke thread next line pr nhi jayega,it will wait until promise get resolved or rejected(come out of pending)
    //console.log("thread is free now")
}
main();

module.exports = sleep;
