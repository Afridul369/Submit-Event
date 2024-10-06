let form = document.querySelector('form');
let name = document.querySelector(' #name');
let email = document.querySelector('#email');
let password = document.querySelector('#password');


form.addEventListener('submit',handler);

function handler (e){
    e.preventDefault()
    // console.log('submit');
    // console.log(name.value);

    let userinfo ={
        Name : name.value,
        Email : email.value,
        Password : password.value
    }
    console.log(userinfo);

    name.value=''
    email.value=''
    password.value=''
}
