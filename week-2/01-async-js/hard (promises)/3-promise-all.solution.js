/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    return new Promise((res)=>{
        setTimeout(res,t);
    });
}

function wait2(t) {
    return new Promise((res)=>{
        setTimeout(res,t);
    });
}

function wait3(t) {
    return new Promise((res)=>{
        setTimeout(res,t);
    });
}

function calculateTime(t1, t2, t3) {
    const startTime=Date.now()
    return Promise.all([wait1(t1*1000),wait2(t2*1000),wait3(t3*1000)])//sb promise ek saath execute ho gya,jb tk sb promise ka ans na aa jata .then() execute nhi hoga
    .then(()=>{
        const endTime = Date.now();
        const totalTime = endTime - startTime;
        console.log(`All functions completed in ${totalTime} milliseconds`);
        return totalTime;
    });
}
//calculateTime(3,4,5);

module.exports = calculateTime;
