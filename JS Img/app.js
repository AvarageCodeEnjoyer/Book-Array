const imgContainer = document.getElementById('img-container')
const button = document.getElementById('submit')
const form = document.querySelector('form')

let i = 0

class AddPeople{
  constructor(name, img){
    this.name = name
    this.img = img
  }
}

let people = [
  /* {
    name: 'Alan Turing',
    img: './Images/Alan_turing.jpg'  
  },
  {
    name: 'Ana Lovelace',
    img: './Images/ana_lovelace.jpg'  
  },
  {
    name: 'Charles Babbage',
    img: './Images/Charles_Babbage.jpg'  
  },
  {
    name: 'Elon Musk',
    img: './Images/Elon_musk.jpg'  
  },
  {
    name: 'Steve Jobs',
    img: './Images/steve_jobs.jpg'  
  },
  {
    name: 'Bill Gates',
    img: './Images/bill_gates.jpg'  
  } */
]

// addImage()

/* body.style.display = 'flex'
body.style.height = '100%'
body.style.justifyContent = 'center'
body.style.alignItems = 'center' */

/* form.style.display = 'flex'
form.style.flexDirection = 'column'
form.style.alignItems = 'center'
form.style.rowGap = '10px' */

/* imgContainer.style.width = '1000px'
imgContainer.style.display = 'flex'
imgContainer.style.flexWrap = 'wrap' */

form.addEventListener('submit', e => {
  e.preventDefault()
  let name = document.getElementById('name').value
  let img = document.getElementById('img').value
  if(name === "" || img === "") return
  let newObj = new AddPeople(name, img)
  people.push(newObj)
  addImage()
  form.reset()
})

function addImage(){
  // for(let i = 0; i < people.length; i++){
    let imgDiv = document.createElement('div')
    let text = document.createTextNode(people[i].name)
    let newImg = document.createElement('img')
    imgDiv.classList.add('imgDiv')
    newImg.classList.add('newImg')
    newImg.src = people[i].img
    imgDiv.appendChild(newImg)
    imgDiv.appendChild(text)
    imgContainer.appendChild(imgDiv)
    i++
  // } 
}