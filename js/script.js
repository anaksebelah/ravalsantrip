const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const adminLoginLink = document.querySelector('.admin-login-link');
const userLoginLink = document.querySelector('.user-login-link');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
    wrapper.classList.remove('admin-active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
    wrapper.classList.remove('admin-active');
});

adminLoginLink.addEventListener('click', ()=> {
    wrapper.classList.add('admin-active');
    wrapper.classList.remove('active');
});

userLoginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('admin-active');
    wrapper.classList.remove('active');
});