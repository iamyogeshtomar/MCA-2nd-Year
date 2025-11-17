console.log("Hello there");

// console.log("Nice to meet you");



const P1 = new Promise((yes, no) => {
    let x = 3;
    if (x % 2 === 0) {
        yes("Phone");
    }
    else {
        no("Laptop");
    }
});

setTimeout(() => { console.log("Timer Done"); }, 0);

P1.then((yes) => { console.log(yes); }).then().catch((no) => { console.log(no); });



console.log("Goodbye");


// P1.resolve(console.log(message));

// console.log(typeof P1);