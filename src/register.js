document.getElementById('registerForm').addEventListener("submit", event => {
    event.preventDefault()

    let user = {}
    user.username = document.getElementById("inputUsername").value;
    user.email = document.getElementById("inputEmail").value;
    user.password = document.getElementById("inputPassword").value;
    user.password2 = document.getElementById("inputPassword2").value;

    //Check the passwords
    if (user.password == user.password2) {
        //Register the user
        getData("https://web-2-backend-fresh-kickz.onrender.com/register", "POST", user).then(data => {
            alert("User has been saved!"), window.location.replace("login.html");
        })
    } else {
        alert("Passwords do not match")
    }
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