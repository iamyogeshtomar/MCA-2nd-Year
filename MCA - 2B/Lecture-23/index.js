// SetTimeout

// SetInterval

// Promises

// const data = fetch("https://api.github.com/users");



console.log("Hello world");

setTimeout(() => {
    console.log("Timer executed");
}, 1000);

const P1 = new Promise((resolve, reject) => {
    resolve(console.log("Resolved"));
    reject(() => {
        console.log("rejected");
    });
});

const P2 = new Promise((resolve, reject) => {
    resolve(console.log("Ho gaya"));
    reject(console.log("Nahi hua"));
});

async function solve() {
    await P1.then(() => { resolve; });
    const res = await P2.then(() => { reject; }).catch(() => {
        console.log("Promise failed to work");
    });

}

solve();

console.log("Goodbye world");






// const id = setTimeout(() => { console.log(`Inside timeout`); }, 1000);