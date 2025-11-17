
// response.then((data) => { console.log(data); }).catch((err) => { console.log(err); })

async function getJSONData(url) {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    return data;
}

const githubUsersData = await getJSONData("https://api.github.com/users");

// function showUsers() {
//     githubUsersData.forEach((user) => { console.log(user.login); });
// }

// showUsers()

console.log(githubUsersData);