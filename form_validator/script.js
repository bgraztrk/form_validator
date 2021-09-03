const form = document.querySelector('#form');
const user_name = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const re_password = document.getElementById('re-password');

function error(input, message){
    input.className = 'form-control is-invalid'
    const div = input.nextElementSibling 
    div.innerText = message
    div.className ='invalid-feedback'
}
function success(input){
    input.className = 'form-control is-valid'
}

function checkEmail(e) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(e.value)){
        success(e)
    }else{
        error(e,"please enter a correct e-mail address")
    }
}

function checkRequired(inputs){

    inputs.forEach(function(input){
        if(input.value === ''){
            error(input,`${input.id} is required`);
        }else{
            success(input);
        }
    });

}

function checkLength(input, min, max){
    if(input.value.length < min){
        error(input,`${input.id} is must have at least 6 characters`);
    }else if(input.value.length > max){
        error(input,`${input.id} is can be up to 30 characters`);
    }else{
        success(input);
    }
}

function checkPasswords(input1, input2){
    if(input1.value !== input2.value){
        error(input2,"passwords are not the same")
    }
}

function checkPhone(input){
    var exp = /^\d{10}$/;
    if(!exp.test(input.value)){
        error(input,'must be 10 characters');
    }
}

form.addEventListener('click',function(e){
    
    e.preventDefault();
    checkRequired([user_name,email,phone,password,re_password]);
    checkEmail(email);
    checkLength(password,6,30);
    checkLength(user_name,6,15);
    checkPasswords(password,re_password);
    checkPhone(phone);

});