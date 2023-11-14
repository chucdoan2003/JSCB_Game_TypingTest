import {keydown} from './js/actionkeydown.js';

keydown()
var loginE=document.querySelector('.account__login')
var registerE=document.querySelector('.account__register')
var showE=document.querySelector('.login')
var overleyE=document.querySelector('.overley')
var userE=document.querySelector('.user')
var passE=document.querySelector('.pass')
var user_register=document.querySelector('.register__user')
var pass_register=document.querySelector('.register__pass')
var enterThePass=document.querySelector('.pass2')
var btn_login=document.querySelector('.btn-login')
var show_notification=document.querySelector('.notification')
var show_notification_register=document.querySelector('.notification__register')
var btn_register=document.querySelector('.btn-register')
var show_register=document.querySelector('.register')
var Eaction_start=document.querySelector('.action__start');
var resultE=document.querySelector('.result')



registerE.addEventListener('click',()=>{
    show_register.classList.add('dpl')
    overleyE.classList.add('dpl')

})
// hiện thị đăng nhập
loginE.addEventListener('click',function(){
    showE.classList.add('dpl');
    overleyE.classList.add('dpl')

})
//ẩn đăng nhập
overleyE.addEventListener('click',function(){
    resultE.classList.remove('dpl')
    showE.classList.remove('dpl')
    overleyE.classList.remove('dpl')
    show_register.classList.remove('dpl')
    show_notification.innerHTML=''
})
// lấy dữ liệu đăng nhập
var user_tk=[
    {
        user:'chucdoan',
        pass:'hihi',
        grade:0
    },
    {
        user:'user1',
        pass:'pass1',
        grade:0
    }
]
//login
btn_login.addEventListener('click',function(){
   var login= user_tk.find((user)=>{
        if(userE.value==user.user && passE.value==user.pass){
            return true;
        }
        else {
            return false;
    }

    })
    if(login){
        show_notification.innerHTML="Đăng nhập thành công";
    }
    else{
        show_notification.innerHTML="Tài khoản hoặc mật khẩu không đúng"
    }
})

// register
btn_register.addEventListener('click',()=>{
    console.log('register')
    if(user_register.value ==='' && pass_register.value ==='' && enterThePass.value==='' ){
        console.log("vui lòng điền đầy đủ thông tin")
        show_notification_register.innerHTML="vui lòng điền đầy đủ thông tin"
    }
    else if(pass_register.value != enterThePass.value){
        show_notification_register.innerHTML="mật khẩu nhập lại không khớp"
        
    }
    else {
        var newUser={
            user: user_register.value,
            pass: pass_register.value
        }
        user_tk.push(newUser)
        show_notification_register.innerHTML="Đăng ký thành công"
    }

})



