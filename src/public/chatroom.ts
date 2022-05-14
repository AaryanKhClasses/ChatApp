if(!localStorage.getItem('username')) localStorage.setItem('username', '')
if(!localStorage.getItem('password')) localStorage.setItem('password', '')

if(!localStorage.getItem('username') || !localStorage.getItem('password')) location.href = '/login'