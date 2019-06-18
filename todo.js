const save = document.getElementById('add')
const input = document.querySelector('.input')
const display = document.querySelector('#display')
const clear = document.querySelector('#clear')
const log = document.getElementById('logout')


// coode to add task

save.addEventListener('click', ()=>{
  let task = {
     list: input.value
   }
   const dove = document.createElement('div')
   dove.className = 'divname'
   const li = document.createElement('p')
   li.className = 'li'
   li.appendChild(document.createTextNode(input.value))
   dove.appendChild(li)
   document.querySelector('#display').appendChild(dove)
 
   const link = document.createElement('h') ;
   link.innerHTML =  '<button>X</button>';
   link.className = 'delete-item';
   li.appendChild(link);
 

   let inputs = []
 
   if(localStorage.getItem('inputs') === null){
    inputs.push(task)
    localStorage.setItem('inputs', JSON.stringify(inputs))
   }else{
     inputs = JSON.parse(localStorage.getItem('inputs'))
     inputs.push(task)
     localStorage.setItem('inputs', JSON.stringify(inputs))
   }
 
 })
 
//  delete task
 display.addEventListener('click', (e)=> {
   if(e.target.parentElement.classList.contains('delete-item')) {
      e.target.parentElement.parentElement.remove();
  }
 })
 
 // clear task
 clear.addEventListener('click', ()=>{
   while(display.firstChild) {
     display.removeChild(display.firstChild);
   }
 })
 
 logout.addEventListener('click', (e)=>{
   alert('have a nice day')
   location.replace('login.html')
   e.preventDefault()
 })

//  const appear =  JSON.parse(localStorage.getItem('access'))

//  let disp = appear.forEach(element => {
//   if(name === element.pUsername && word === element.pPassword){
//  const come = document.createElement('li')
//  const added = li.appendChild(document.createTextNode(disp))
//  document.getElementById('logout').appendChild(added)
// }
// })