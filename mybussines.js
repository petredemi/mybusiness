
const homebtn = document.querySelector('div.home')
const servbtn = document.querySelector('div.serv')
const contactbtn = document.querySelector('div.contact')

const content = document.querySelector('.content')
const contactpage = document.querySelector('div.contactpage')

homebtn.addEventListener('click', (e) =>{
    content.setAttribute('style', 'display:flex')
    homebtn.setAttribute('style', 'background-color: green')
    contactbtn.setAttribute('style', 'background-color: none')
    contactpage.setAttribute('style', 'display: none')
})
contactbtn.addEventListener('click', (e) => {
    content.setAttribute('style', 'display: none')
    contactpage.setAttribute('style', 'display: block')
    homebtn.setAttribute('style', 'background-color: none')
    contactbtn.setAttribute('style', 'background-color: green')


})