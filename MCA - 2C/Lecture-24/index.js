// console.log("A");

// setTimeout(() => { console.log("B"); }, 0);

// Promise.resolve().then(() => {
//     console.log("C");
//     setTimeout(() => { console.log("D"); }, 0);
// });

// Promise.resolve("Hello World").then((message) => { console.log(message); });

// console.log("F");

const typicode = "https://jsonplaceholder.typicode.com/posts";

async function getJSONData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
}

const data = await getJSONData();

console.log(data);

// data.forEach((user) => { console.log(user); });

// console.log(data);
