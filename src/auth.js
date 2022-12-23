//Check the sessionStorage
let user = JSON.parse(sessionStorage.getItem('user'))

if (user) {
    document.getElementById('welcomeMessage').innerText = `Welcome ${user.username}!`
    //set username in nav bar
    
    //load in user specific date: favorites.
}
/* else {
    window.location.href = "/docs/login.html"
} */