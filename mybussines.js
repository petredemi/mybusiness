
const homebtn = document.querySelector('div.home')
const servbtn = document.querySelector('div.serv')
const contactbtn = document.querySelector('div.contact')

const content = document.querySelector('.content')
const contactpage = document.querySelector('div.contactpage')
const servicespage = document.querySelector('div.servicespage') 

homebtn.addEventListener('click', (e) =>{
    content.setAttribute('style', 'display:flex')
    servicespage.setAttribute('style', 'display: none')
    contactpage.setAttribute('style', 'display: none')
    homebtn.setAttribute('style', 'color: red')
    servbtn.setAttribute('style', 'color: darkblue')
    contactbtn.setAttribute('style', 'color: darkblue')
})
servbtn.addEventListener('click', (e) => {
    content.setAttribute('style', 'display: none')
    servicespage.setAttribute('style', 'display: block')
    contactpage.setAttribute('style', 'display: none')
    homebtn.setAttribute('style', 'color: darkblue')
    servbtn.setAttribute('style', 'color: red')
    contactbtn.setAttribute('style', 'color: darkblue')
})



contactbtn.addEventListener('click', (e) => {
    content.setAttribute('style', 'display: none')
    servicespage.setAttribute('style', 'display: none')
    contactpage.setAttribute('style', 'display: block')
    homebtn.setAttribute('style', 'color: darkblue')
    servbtn.setAttribute('style', 'color: darkblue')
    contactbtn.setAttribute('style', 'color: red')
})
