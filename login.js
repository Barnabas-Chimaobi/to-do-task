
const login = document.getElementById('login')
const sign = document.getElementById('signup')



//login code
login.addEventListener('click', (e)=>{
 const name = document.querySelector('.in').value
 const word = document.querySelector('.put').value
  

  const save = JSON.parse(localStorage.getItem('access'))
  save.forEach(element => {
  if(name === element.pUsername && word === element.pPassword){
    alert('login successful')
    location.replace('todo.html')
    
  }else{
    alert('incorrect username or password')
  }

  });

 e.preventDefault()
})

signup.addEventListener('click', (e)=>{
 location.replace('signup.html')

 e.preventDefault()
})