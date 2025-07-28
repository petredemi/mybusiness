const homebtn = document.querySelector('div.home')
const servbtn = document.querySelector('div.serv')
const contactbtn = document.querySelector('div.contact')
const formbtn = document.querySelector('div.form')
const dropbtn = document.querySelector('.drop')

let myimage = document.querySelector('#myimage')
const aa = './pictures/designerdesk.jpg';
const b = './pictures/laptopondesk.jpg';
const c = './pictures/laptoppink.jpg';
const d = './pictures/laptopgraph.jpg';
const laptop = [aa, b, c, d]
let run = 0;
function changeimg(){
    if( run == 4){ run = 0}
    myimage.src = laptop[run]
    run += 1
}
setInterval(changeimg, 4000);

const firstpage = document.querySelector('.firstpage')
const contactpage = document.querySelector('div.contactpage')
const servicespage = document.querySelector('div.servicespage') 
const formpage = document.querySelector('div.formpage')
const navbar = document.querySelector('nav')
const dropmenu = document.querySelector('.dropmenu') 
const toppage = document.querySelector('.toppage')
const menuicon = document.querySelector('.b')

let divwidth = toppage.offsetWidth //width of div - unused

function mediaQ(x){
    if(x.matches){
        navbar.style.display = 'flex';
        navbar.style.color = 'white'
    }else{
        navbar.style.display = 'none'
        navbar.style.color = 'white'
    }
}
let x = window.matchMedia("(min-width: 551px")
mediaQ(x)

x.addEventListener('change', (e) => {
    mediaQ(x)
})

let menu = 0
dropbtn.addEventListener('click', (e) => {
    divwidth = toppage.offsetWidth
    if(divwidth < 550){
        if(menu == 0){
            navbar.setAttribute('style', 'display:flex')
            menu = 1
        }else{
            navbar.setAttribute('style', 'display:none')
            menu = 0
        }
    }
})
navbar.addEventListener('click', (e) => {
    divwidth = toppage.offsetWidth
    if(divwidth < 550){
        navbar.setAttribute('style', 'display:none')
    }
})
dropmenu.addEventListener('mouseleave', (e) => {
    divwidth = toppage.offsetWidth
    if(divwidth < 550){
    navbar.setAttribute('style', 'display:none')
    }
})
//checkWidth()

homebtn.addEventListener('click', (e) =>{
    divwidth = toppage.offsetWidth
    firstpage.setAttribute('style', 'display:flex')
    servicespage.setAttribute('style', 'display: none')
    contactpage.setAttribute('style', 'display: none')
    formpage.setAttribute('style', 'display: none')

    homebtn.setAttribute('style', 'color: red')
    servbtn.setAttribute('style', 'color: white')
    contactbtn.setAttribute('style','color:white')
    formbtn.setAttribute('style', 'color: white')
})
servbtn.addEventListener('click', (e) => {
    firstpage.setAttribute('style', 'display: none')
    servicespage.setAttribute('style', 'display: block')
    contactpage.setAttribute('style', 'display: none')
    formpage.setAttribute('style', 'display: none')

    servbtn.setAttribute('style', 'color: red')
    homebtn.setAttribute('style', 'color: white')
    contactbtn.setAttribute('style', 'color:white')
    formbtn.setAttribute('style', 'color: whitee')
})

contactbtn.addEventListener('click', (e) => {
    firstpage.setAttribute('style', 'display: none')
    servicespage.setAttribute('style', 'display: none')
    contactpage.setAttribute('style', 'display: block')
    formpage.setAttribute('style', 'display: none')

    contactbtn.setAttribute('style', 'color: red')
    homebtn.setAttribute('style', 'color: white')
    servbtn.setAttribute('style', 'color: white')
    formbtn.setAttribute('style', 'color: white')
})
formbtn.addEventListener('click', (e) => {
    firstpage.setAttribute('style', 'display: none')
    servicespage.setAttribute('style', 'display: none')
    contactpage.setAttribute('style', 'display: none')
    formpage.setAttribute('style', 'display: flex;')

    formbtn.setAttribute('style', 'color: red')
    homebtn.setAttribute('style', 'color: white')
    servbtn.setAttribute('style', 'color: white')
    contactbtn.setAttribute('style', 'color:white')
})
