document.getElementById('loginform').addEventListener("submit", event => {
    event.preventDefault()

    let user = {}
    user.email = document.getElementById("inputEmail").value;
    user.password = document.getElementById("inputPassword").value;

    //Check for login
    getData("https://web-2-backend-fresh-kickz.onrender.com/login", "POST", user).then(result => {
        sessionStorage.setItem('user', JSON.stringify(result.data)), window.location.replace("index.html")
    })
})

async function getData(url, method, data) {
    let resp = await fetch(url, {
        method: method,
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(data)
    });
    return await resp.json();
}