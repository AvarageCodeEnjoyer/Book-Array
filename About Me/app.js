const nickName = document.getElementById('nickname')
const favorites = document.getElementById('favorites')
const homeTown = document.getElementById('hometown')
const ul = document.querySelector('ul')
const imgCreate = document.createElement('img')

imgCreate.src = '../About Me/My_Photo.jpg'
imgCreate.style.height = '400px'
imgCreate.style.width = '300px'
imgCreate.style.borderRadius = '30px'

document.body.style.fontFamily = 'Arial, sans-serif'
document.body.style.fontSize = '20px'
document.body.style.display = 'flex'
document.body.style.flexDirection = 'column'
document.body.style.alignItems = 'center'
document.body.appendChild(imgCreate)

nickName.textContent = 'Niko Niko Nee'
favorites.textContent = 'Gym, Biking, Wolves'
homeTown.textContent = 'Goodyear AZ'

for(i = 0; i < ul.childElementCount;i++){
  ul.children[i].classList.add('list-item')
}
