/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    return new Promise((res,rej)=>{
        setTimeout(res,t*1000);
    });
}

function wait2(t) {
    return new Promise((res,rej)=>{
        setTimeout(res,t*1000);
    });
}

function wait3(t) {
    return new Promise((res,rej)=>{
        setTimeout(res,t*1000);
    });
}

function calculateTime(t1, t2, t3) { //this function returns a promise chain
    let startTime=Date.now();
    return wait1(t1).then(()=>{             //yahan promise ek k baad ek execute ho rha
        console.log(Date.now()-startTime);
        return wait2(t2);
    })
    .then(()=>{
        console.log(Date.now()-startTime);
        return wait3(t3);
    })
    .then(()=>{
        let endTime=Date.now();
        const totalTime = endTime - startTime;
        console.log(`All promises get resolved in ${totalTime}`);
        return totalTime;
    })

    
}

calculateTime(1,2,3);
module.exports = calculateTime;
