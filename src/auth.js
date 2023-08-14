//Check the sessionStorage
let user = JSON.parse(sessionStorage.getItem('user'))

if (user) {
    document.getElementById('welcomeMessage').innerText = `Welcome ${user.username}!`

}
/* else {
    window.location.href = "/docs/login.html"
}*/