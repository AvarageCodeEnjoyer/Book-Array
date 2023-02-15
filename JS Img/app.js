const imgContainer = document.getElementById('img-container')

/* - Comment this code to next section and uncomment that section for class - */

let people = [
  {
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
  }
]

imgContainer.style.width = '1000px'
imgContainer.style.display = 'flex'
imgContainer.style.flexWrap = 'wrap'

function addImage(){
  for(let i = 0; i < people.length; i++){
    let imgDiv = document.createElement('div')
    let text = document.createTextNode(people[i].name)
    let newImg = document.createElement('img')
    imgDiv.classList.add('imgDiv')
    newImg.classList.add('newImg')
    newImg.src = people[i].img
    imgDiv.appendChild(newImg)
    imgDiv.appendChild(text)
    imgContainer.appendChild(imgDiv)
  } 
}

addImage()



/* ------ Uncomment code for class with form to add pictures and titles ----- */

/* let i = 0
let people = []

class AddPeople{
  constructor(name, img){
    this.name = name
    this.img = img
  }
}

const form = document.createElement('form')
form.innerHTML = `
  <label for="name">Name</label>
  <input type="text" id="name">
  <label for="img">Img URL</label>
  <input type="text" id="img">
  <input type="submit" id="submit" value="Add Image"></input>`

form.style.display = 'flex'
form.style.flexDirection = 'column'

const formContainer = document.createElement('div')
formContainer.appendChild(form)

document.body.insertBefore(formContainer, imgContainer)

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
} */