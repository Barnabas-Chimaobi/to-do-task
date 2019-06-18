const firstname = document.getElementById('first')
const lastname = document.getElementById('last')
const username = document.getElementById('user')
const password = document.getElementById('pass')
const sign = document.getElementById('sign')



// sign in code
sign.addEventListener('click', (e)=>{


  const identity = {
    pFirstname: firstname.value,
    pLastname: lastname.value,
    pUsername: username.value,
    pPassword: password.value,

  }
  let access = [];
  if(firstname.value === '' || lastname.value === '' ||username.value === '' || password.value === ''){
    alert('please fill in all the details')
  
  } else if(localStorage.getItem('access') === null){
   access.push(identity)
   localStorage.setItem('access', JSON.stringify(access))
 }else {
   access = JSON.parse(localStorage.getItem('access'))
   access.push(identity)
   localStorage.setItem('access', JSON.stringify(access))

   alert('you have successfully signed up. you can now log in');
 location.replace('login.html');
 }

//  alert('welcome');
//  location.replace('login.html');
 password.value = ''
 username.value = ''
 e.preventDefault();
 })
 