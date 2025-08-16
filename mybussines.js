//const finnhubPetru = new finnhub.DefaultApi('d2c3hr9r01qvh3vdtos0d2c3hr9r01qvh3vdtosg')

//finnhubPetru.stockTick("AAPL", "2025-08-08", 500, 0, (error, data, response) => {
    //console.log(data);
//});
const homebtn = document.querySelector('div.home')
const servbtn = document.querySelector('div.serv')
const contactbtn = document.querySelector('div.contact')
const formbtn = document.querySelector('div.form')
const dropbtn = document.querySelector('.drop')
//let apikey = GZ525I3MQ8WMVOXK  //alpha vantage.co 
// finnhab apikey = d2c3hr9r01qvh3vdtos0d2c3hr9r01qvh3vdtosg
//finnhab secret : d2c3hr9r01qvh3vdtotg
let myimage = document.querySelector('#myimage')
const a = './pictures/designerdesk.jpg';
const b = './pictures/laptopondesk.jpg';
const c = './pictures/laptoppink.jpg';
const d = './pictures/laptopgraph.jpg';

const a0 = './pictures/2appledesktops.jpg'
const a1 = './pictures/designroom1.jpg'
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
            navbar.setAttribute('style', 'width:160px; transition: width 1s; z-index:3;')
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

async function stockPrice(){
    try{
       const response = await fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=GOOG&interval=5min&apikey=GZ525I3MQ8WMVOXK&datatype=json', {mode:'cors'});
       const stock = await response.json();
       //let ss = JSON.parse(stock);
       console.log(stock)
       const met = stock['Meta Data']['2. Symbol']
       console.log(met)
       let ss = Object.values(stock)
       let aa = Object.values(ss[1])
     //  console.log(aa[1])
        if(!response.ok){
            throw 'no data'
        }else{
           // console.log(stock);
            console.log(typeof stock)
         //   console.log(ss)
        }
    }catch(error){
        console.log(error)
    };
}
let simbol1 = document.querySelector('div.simbol1')
let img1 = document.querySelector('#img1')

let simbol2 = document.querySelector('div.simbol2')
let img2 = document.querySelector('#img2')

let simbol3 = document.querySelector('div.simbol3')
let img3 = document.querySelector('#img3')

let simbol4 = document.querySelector('div.simbol4')
let img4 = document.querySelector('#img4')

let simbol5 = document.querySelector('div.simbol5')
let img5 = document.querySelector('#img5')

let simbol6 = document.querySelector('div.simbol6')
let img6 = document.querySelector('#img6')

let simbol7 = document.querySelector('div.simbol7')
let img7 = document.querySelector('#img7')

let simbol8 = document.querySelector('div.simbol8')
let img8 = document.querySelector('#img8')

let simbol9 = document.querySelector('div.simbol9')
let img9 = document.querySelector('#img9')

let simbol10 = document.querySelector('div.simbol10')
let img10 = document.querySelector('#img10')




let igr = './icons/trianglered.png'
let igg = './icons/trianglegreen.png'


const symbols = [simbol1, simbol2, simbol3, simbol4, simbol5, simbol6, simbol7, simbol8, simbol9, simbol10 ]
const imgs = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]

 

async function finnhubPrice(x, n){
    try{
       const response = await fetch(`https://finnhub.io/api/v1/quote?symbol=${x}&exchange=US&token=d2c3hr9r01qvh3vdtos0d2c3hr9r01qvh3vdtosg`, {mode:'cors'});
       const stock = await response.json();      
        if(!response.ok){
            throw 'no data'
        }else{
            console.log(stock)
        //    console.log(stock.c)
       // console.log(close)
            let trend = stock.dp
            symbols[n].textContent = x + ': ' + stock.c + ' '+ ' '+ stock.dp.toFixed(2) + '%'
           // prices[n].textContent = stock.c;
           // procent[n].textContent = stock.dp.toFixed(2) + '%'
            console.log(trend)
            if(stock.dp >= 0){
            imgs[n].src = igg
            }else if (stock.dp < 0){
                imgs[n].src = igr
            }
        }
    }catch(error){
        console.log(error)
    };
}
finnhubPrice('AMZN', 0)
finnhubPrice('AAPL', 1)
finnhubPrice('GOOG', 2)
finnhubPrice('META', 3)
finnhubPrice('TSLA', 4)
finnhubPrice('NVDA', 5)
finnhubPrice('MSFT', 6)
finnhubPrice('AVGO', 7)
finnhubPrice('AMD', 8)
finnhubPrice('IBM', 9)
