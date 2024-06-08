const images = document.getElementsByTagName('img')
const listItem = document.querySelectorAll('li')
const h3Elements = document.querySelectorAll('h3')
const imageSources = [
  './assets/images/white-haven-beach.jpg',
  './assets/images/grace-bay.jpg',
  './assets/images/baia-do-sancho.jpg',
  './assets/images/navagio.jpg',
  './assets/images/playa.jpg',
  './assets/images/anse-source.jpg',
  './assets/images/seven-mile.jpg',
  './assets/images/bora.jpg',
  './assets/images/Lanikai.jpg',
  './assets/images/pink-sand.jpg',
]

//add div and an image tag for the first section of page
const pageDescription = () => {
  const section = document.getElementsByTagName('section')[0]
  const p = section.getElementsByTagName('p')[0]
  const imgTag = document.createElement('img')
  const divContainer = document.createElement('div')

  divContainer.appendChild(imgTag)
  divContainer.appendChild(p)

  section.appendChild(divContainer)
  imgTag.src = './assets/images/Person-at-the-beach.png'
}

//add images to beaches
const handleBeachImages = () => {
  listItem.forEach((list, index) => {
    const img = document.createElement('img')
    img.src = imageSources[index]
    list.insertBefore(img, h3Elements[index])
  })
}

//flip images
const flipImages = () => {
  const list = document.querySelectorAll('li')
  list.forEach(li => {
    const flipContainer = document.createElement('div')
    flipContainer.classList.add('flip-container')

    const flipInner = document.createElement('div')
    flipInner.classList.add('flip-inner')

    const flipFront = document.createElement('div')
    flipFront.classList.add('flip-front')

    const flipBack = document.createElement('div')
    flipBack.classList.add('flip-back')

    const img = li.querySelector('img')
    const h3 = li.querySelector('h3')
    const p = li.querySelector('p')
    const titleDiv = document.createElement('div')
    titleDiv.textContent = h3.textContent

    flipFront.appendChild(img)
    flipFront.appendChild(titleDiv)
    flipBack.appendChild(h3)
    flipBack.appendChild(p)

    flipInner.appendChild(flipFront)
    flipInner.appendChild(flipBack)

    flipContainer.appendChild(flipInner)

    li.appendChild(flipContainer)
  })
}

document.addEventListener('DOMContentLoaded', function () {
  handleBeachImages()
  pageDescription()
  flipImages()
})
