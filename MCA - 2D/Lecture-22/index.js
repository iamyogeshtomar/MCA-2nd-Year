// console.log("Hello World");


// console.log(response);

// response.then((data) => { console.log(data.json()); }).catch((err) => { console.log(err); });

async function getJsonData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
    return data;
}

// const list = document.querySelector(".get");

const data = await getJsonData();

