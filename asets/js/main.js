var inputName = document.getElementById('inputName')
var inputEmail = document.getElementById('inputEmail')
var inputPass = document.getElementById('inputpass')
var signBtn = document.getElementById('signUpbtn')
var logBtn = document.getElementById('logInbtn')
var errorBox = document.getElementById('errorbox')
var Welcome = document.getElementById('WELCOME')
var container = [];
var LogoutBtn = document.getElementById('LogoutBtn')



if (localStorage.getItem('users')) {
    container = JSON.parse(localStorage.getItem('users'))
}



if (signBtn) {
    signBtn.addEventListener('click', function () {
        var cartona = ''
        if (emailExist()) {
            cartona += `
                    <p class="text-danger mb-0">Email already exists </p>
               `
            errorBox.innerHTML = cartona;
        } else {
            adduser()
            cartona = ''
            errorBox.innerHTML = cartona;
        }
    })
}
function adduser() {
    var user = {
        name: inputName.value,
        email: inputEmail.value,
        password: inputPass.value
    };
    container.push(user)
    localStorage.setItem('users', JSON.stringify(container))
}
var username = localStorage.getItem('username')
if(username){
    var home= ''
    home+=`
    Welcome ${username}
    `
    if(Welcome){
        Welcome.innerHTML= home;

    }
}


if (logBtn) {
    logBtn.addEventListener('click', function () {
        enteredEmail = inputEmail.value;
        enteredPass = inputPass.value;

        for (let i = 0; i < container.length; i++) {
            if (container[i].email.toLowerCase() === enteredEmail.toLowerCase() && container[i].password.toLowerCase() === enteredPass.toLowerCase()) {
                errorBox.classList.add('d-none')

                window.location.href = 'home.html'
                localStorage.setItem('username', container[i].name)
               
            }
            else {
                errorBox.classList.remove('d-none')
            }
        }
    })
}


function validateuser() {
    var enteredEmail = inputEmail.value
    console.log(enteredEmail)
}
function emailExist() {
    for (let i = 0; i < container.length; i++) {
        if (container[i].email.toLowerCase() == inputEmail.value.toLowerCase()) {
            console.log('already here ??')
            return 1
        }

    }
}
if (LogoutBtn) {
    LogoutBtn.addEventListener('click', function () {
        window.location.href = 'index.html'
    })
}



