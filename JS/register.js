// register
let register = document.querySelector('.register_form');
let name = document.querySelector('.name');
let password = document.querySelector('.password');
let enter = document.querySelector('.enter');
let toHome = document.querySelector('.toHome');

const userInfo = {
    name: name.value,
    password: password.value 
}
const memory = localStorage.getItem('userInfo');



function getUserInfo() {
    if(memory){
        userInfo.name = JSON.parse(memory).name;
        userInfo.password = JSON.parse(memory).password;
        name.value = userInfo.name;
        password.value = userInfo.password;
    }
}


function EnterMainPage() {
    
    userInfo.name = name.value;
    userInfo.password = password.value; 
    
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    
    userInfo.name !== '' && userInfo.password !== '' ? toHome.href = './pages/level.html': alert('parol yoki nom kiritilmagan') 
}
