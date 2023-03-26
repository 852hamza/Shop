firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
        location.replace("../login/index.html")
    }

})

function logout() {
    firebase.auth().signOut()

}
