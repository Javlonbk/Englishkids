// register
let register = document.querySelector('.register_form');
let name = document.querySelector('.name');
let notification = document.querySelector('.notification');

function EnterMainPage() {
    event.preventDefault();

    if(name.value){
        const userInfo = {
            name: name.value,
        }

        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        Enter();
    } else{
        notification.style.display = 'block';
    }
}

function Enter(){
    console.log('ishladi')
    window.location = 'pages/level.html'
}