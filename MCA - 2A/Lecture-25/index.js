console.log("HEllo World");

setTimeout(()=>{console.log("New timer");}, 1000)

// Promise.resolve(console.log("PRomise done"));

setTimeout(()=>{console.log("New timer 1");}, 5000)

setTimeout(()=>{console.log("New timer 2");}, 8000)

setTimeout(() => { console.log("Timer done"); }, 0);

const P1 = new Promise((resolve, reject) => {
    resolve(console.log("Ho gaya"));
    reject(console.log("nahi hua"));
});

P1.then(() => { resolve; }).catch(() => { reject; });

console.log("Goodbye World");