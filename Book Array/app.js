const list = document.getElementById('list')

document.body.style.fontFamily = "Arial, sans-serif"
document.body.style.display = 'flex'
document.body.style.flexDirection = 'column'
document.body.style.alignItems = 'center'

var books = [
  {
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    img: `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.arksm8X4h-71zQvoVN2XAAHaLG%26pid%3DApi&f=1&ipt=9eeb459543f1bc7c1b35894dbd4d621904cde3d734eb68bf6ca41852737a5809&ipo=images`,
    alreadyRead: false
  }, 
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    img: `https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.kurzweilai.net%2Fimages%2FThe-Most-Human-Human-Paperback-Front-Cover.jpg&f=1&nofb=1&ipt=c4be9a2c23b556fabf682721fd12c74482e0144f4f485d3ae3541664c6101ccf&ipo=images`,
    alreadyRead: true
  }
  ];

for(i = 0; i < books.length; i++){
  var newBook = document.createElement('LI')
  let newImg = document.createElement('img')
  let newTitle = document.createElement('P')
  var textNode = document.createTextNode(`${books[i].title} \n By ${books[i].author}`)
  newImg.style.height = '250px'
  newImg.style.width = '175px'
  newImg.src = books[i].img
  newTitle.appendChild(textNode)
  newBook.style.display = 'flex'
  newBook.style.flexDirection = 'column'
  newBook.style.alignItems = 'center'
  newBook.style.fontSize = '20px'
  newBook.style.listStyle = 'none'
  if(books[i].alreadyRead === true){
    newBook.style.color = 'red'
    console.log(`You have already read "${books[i].title}"`)
  }
  else{
    console.log(`You haven't read "${books[i].title}"`)
  }
  newBook.appendChild(newImg)
  newBook.appendChild(newTitle)
  list.appendChild(newBook)
}