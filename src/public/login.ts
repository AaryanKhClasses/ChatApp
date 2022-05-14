if(!localStorage.getItem('username')) localStorage.setItem('username', '')
if(!localStorage.getItem('password')) localStorage.setItem('password', '')
if(localStorage.getItem('username') || localStorage.getItem('password')) location.href = '/'

const loginBtn = document.querySelector<HTMLButtonElement>('#login-btn')
const registerBtn = document.querySelector<HTMLButtonElement>('#register-btn')
const username = document.querySelector<HTMLInputElement>('#username')
const password = document.querySelector<HTMLInputElement>('#password')

loginBtn?.addEventListener('click', () => {
    if(username?.value == '' || password?.value == '') return alert('Please fill in all fields')

    fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            username: username?.value,
            password: password?.value
        })
    })
    .then(res => res.json())
    .then(data => {
        if(data.error === 'inv_cred') return alert('Invalid credentials')
        else {
            localStorage.setItem('username', data.username)
            localStorage.setItem('password', data.password)
            window.location.href = '/'
        }
    })
})

registerBtn?.addEventListener('click', () => {
    if(username?.value == '' || password?.value == '' ) return alert('Please fill in all fields')

    fetch('/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            username: username?.value,
            password: password?.value
        })
    })
    .then(res => res.json())
    .then(data => {
        if(data.error === 'user_exists') return alert('User already exists')
        else {
            localStorage.setItem('username', data.username)
            localStorage.setItem('password', data.password)
            window.location.href = '/'
        }
    })
})