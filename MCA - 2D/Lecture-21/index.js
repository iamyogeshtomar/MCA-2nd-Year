const P1 = new Promise((yes, no) => {
    yes(console.log("Ho gaya"));
    no(console.log("Nahi hua"));
});

// P1.then(() => { yes; }).catch(() => { no; });

console.log("Hello World");

setTimeout(() => { console.log("Timer Done"); }, 1000);

console.log("Goodbye World");

setTimeout(() => { console.log("No Time"); }, 0);

P1.then(()=>{console.log("Done");})