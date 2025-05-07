
const homebtn = document.querySelector('div.home')
const servbtn = document.querySelector('div.serv')
const contactbtn = document.querySelector('div.contact')
const formbtn = document.querySelector('div.form')


const firstpage = document.querySelector('.firstpage')
const contactpage = document.querySelector('div.contactpage')
const servicespage = document.querySelector('div.servicespage') 
const formpage = document.querySelector('div.formpage') 

homebtn.addEventListener('click', (e) =>{
    firstpage.setAttribute('style', 'display:flex')
    servicespage.setAttribute('style', 'display: none')
    contactpage.setAttribute('style', 'display: none')
    formpage.setAttribute('style', 'display: none')

    homebtn.setAttribute('style', 'color: red')
    servbtn.setAttribute('style', 'color: darkblue')
    contactbtn.setAttribute('style', 'color: darkblue')
    formbtn.setAttribute('style', 'color: darkblue')
})
servbtn.addEventListener('click', (e) => {
    firstpage.setAttribute('style', 'display: none')
    servicespage.setAttribute('style', 'display: block')
    contactpage.setAttribute('style', 'display: none')
    formpage.setAttribute('style', 'display: none')

    homebtn.setAttribute('style', 'color: darkblue')
    servbtn.setAttribute('style', 'color: red')
    contactbtn.setAttribute('style', 'color: darkblue')
    formbtn.setAttribute('style', 'color: darkblue')

})

contactbtn.addEventListener('click', (e) => {
    firstpage.setAttribute('style', 'display: none')
    servicespage.setAttribute('style', 'display: none')
    contactpage.setAttribute('style', 'display: block')
    formpage.setAttribute('style', 'display: none')


    homebtn.setAttribute('style', 'color: darkblue')
    servbtn.setAttribute('style', 'color: darkblue')
    contactbtn.setAttribute('style', 'color: red')
    formbtn.setAttribute('style', 'color: darkblue')

})
formbtn.addEventListener('click', (e) => {
    firstpage.setAttribute('style', 'display: none')
    servicespage.setAttribute('style', 'display: none')
    contactpage.setAttribute('style', 'display: none')
    formpage.setAttribute('style', 'display: block')


    homebtn.setAttribute('style', 'color: darkblue')
    servbtn.setAttribute('style', 'color: darkblue')
    contactbtn.setAttribute('style', 'color: darkblue')
    formbtn.setAttribute('style', 'color: red')

})
