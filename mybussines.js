const homebtn = document.querySelector('div.home')
const servbtn = document.querySelector('div.serv')
const contactbtn = document.querySelector('div.contact')
const formbtn = document.querySelector('div.form')
const dropbtn = document.querySelector('.drop')

let myimage = document.querySelector('#myimage')
const a = './pictures/designerdesk.jpg';
const b = './pictures/laptopondesk.jpg';
const c = './pictures/laptoppink.jpg';
const d = './pictures/laptopgraph.jpg';

const a0 = './pictures/2appledesktops.jpg'
const a1 = './pictures/designroom.jpg'
const a2 = './pictures/flowersondesck.jpg'
const a3 = './pictures/interiordesign11.jpg'
const a4 = './pictures/ligthonwall.jpg'
const a5 = './pictures/iconsmediaapps.jpg'
const a6 = './pictures/plumberworking.jpg'
const a7 = './pictures/renewablepannels.jpg'
const a8 = './pictures/restaurantplateswithfood.jpg'
const a9 = './pictures/painterroll.jpg'
const a10 = './pictures/hairstylewoman.jpg'
const a11 = './pictures/drone.jpg';
const a12 = './pictures/cameras.jpg'

const laptop = [a, b, c, d]
const picturemix = [a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12]
let run = 0;
function changeimg(){
    if( run == 13){ run = 0}
    myimage.src = picturemix[run]
  //  myimage.setAttribute('style', 'max-width: 450px; transition: width 1s')
    run += 1
}
setInterval(changeimg, 4000)

const firstpage = document.querySelector('.firstpage')
const contactpage = document.querySelector('div.contactpage')
const servicespage = document.querySelector('div.servicespage') 
const formpage = document.querySelector('div.formpage')
const navbar = document.querySelector('nav')
const dropmenu = document.querySelector('.dropmenu') 
const toppage = document.querySelector('.toppage')
const menuicon = document.querySelector('.b')

let divwidth = toppage.offsetWidth //width of div - unused
//function mediaQ(x){
//    divwidth = toppage.offsetWidth 
//    if(x.matches){
//        navbar.style.display = 'flex';
//        navbar.style.color = 'white'
//    }else{
//        navbar.style.display = 'none'
//        navbar.style.color = 'white'
//    }
//    console.log(x)
//}
//let x = window.matchMedia("(min-width: 551px")
//mediaQ(x)
//
//toppage.addEventListener('change', (e) => {
//    divwidth = toppage.offsetWidth 
//    console.log('sdwsdwe')
//
//  //  mediaQ(x)
//})
//console.log(divwidth)
let menu = 0
dropbtn.addEventListener('click', (e) => {
    divwidth = toppage.offsetWidth
    if(divwidth < 550){
        if(menu == 0){
            navbar.setAttribute('style', 'width:160px; transition: width 1s;')
            menu = 1
        }else{
            navbar.setAttribute('style', 'width: 0px; transition: width 1s;')
            menu = 0
        }
    }
})
navbar.addEventListener('click', (e) => {
    divwidth = toppage.offsetWidth;
    if(divwidth < 550){
        navbar.setAttribute('style', 'display:flex; width:0px; transition: width 1s;')
    }
})
dropmenu.addEventListener('mouseleave', (e) => {
    divwidth = toppage.offsetWidth
    if(divwidth < 550){
    navbar.setAttribute('style', 'width:0px; transition: width 1s;')
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
