//const finnhubPetru = new finnhub.DefaultApi('d2c3hr9r01qvh3vdtos0d2c3hr9r01qvh3vdtosg')
let simbol11 = document.querySelector('div.simbol11')
let simbol12 = document.querySelector('div.simbol12')

const socket = new WebSocket('wss://ws.finnhub.io?token=d2c3hr9r01qvh3vdtos0d2c3hr9r01qvh3vdtosg');

// Connection opened -> Subscribe
socket.addEventListener('open', function (event) {
   // socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'AAPL'}))
    socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'BINANCE:BTCUSDT'}))
    socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'BINANCE:ETHUSDT'}))
})

let btctrend = 100000;
let ethtrend = 4000;
// Listen for messages
socket.addEventListener('message', function (event) {
   // console.log('Message from server ', event.data);
  let ee = JSON.parse(event.data)
  let coin = ee.data[0].s
  let pp = ee.data[0].p.toFixed(2)
  let price = pp.toString()
  if (coin == 'BINANCE:BTCUSDT'){
        simbol11.textContent =' $'+ price.substr(0, 3) + ',' + price.substr(3)
        if (pp - btctrend > 0){ simbol11.style.backgroundColor = 'rgb(8, 200, 8)'}
        else if( pp - btctrend < 0) { simbol11.style.backgroundColor = 'rgba(251, 56, 56, 0.76)'}
        else{ simbol11.style.backgroundColor = 'white'}
        btctrend = pp
    } else if (coin == 'BINANCE:ETHUSDT'){
        simbol12.textContent = ' $'+ price//.substr(0, 3) + ',' + price.substr(3)
        if (pp - ethtrend > 0){ simbol12.style.backgroundColor = 'rgb(8, 200, 8)'}
        else if( pp - ethtrend < 0) { simbol12.style.backgroundColor = 'rgba(251, 56, 56, 0.76)'}
        else { simbol12.style.backgroundColor = 'white'}
            ethtrend = pp;
    }

})

// Unsubscribe
 var unsubscribe = function(symbol) {
    socket.send(JSON.stringify({'type':'unsubscribe','symbol': symbol}))
}



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

let marketstatus = document.querySelector('div.marketstatus')


let igr = './icons/trianglered.png'
let igg = './icons/trianglegreen.png'
let timedisplay = document.querySelector('div.time')

function localTime(){
        const dd = new Date()
        const hour = dd.getHours()
        let nyhour 
        if( hour == 0){nyhour = 19}
        else if( hour == 1){ nyhour = 20}
        else if ( hour ==2){ nyhour = 21}
        else if( hour == 3){ nyhour = 22}
        else if (hour == 4){ nyhour = 23}
        else{ nyhour =  hour - 5}
        const min = '0' + dd.getMinutes()
        timedisplay.textContent = 'NewYork time: ' + nyhour+ ' : ' + min.slice(-2)
}
 setInterval(localTime, 1000)

const symbols = [simbol1, simbol2, simbol3, simbol4, simbol5, simbol6, simbol7, simbol8, simbol9, simbol10 ]
const imgs = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]
const shares = ['AMZN', 'AAPL', 'GOOG', 'META', 'TSLA', 'NVDA', 'MSFT', 'AVGO', 'AMD', 'IBM']
 

async function finnhubPrice(x, n){
    try{
       const response = await fetch(`https://finnhub.io/api/v1/quote?symbol=${x}&exchange=US&token=d2c3hr9r01qvh3vdtos0d2c3hr9r01qvh3vdtosg`, {mode:'cors'});
       const openstatus = await fetch(`https://finnhub.io/api/v1/stock/market-status?exchange=US&token=d2c3hr9r01qvh3vdtos0d2c3hr9r01qvh3vdtosg`, {mode:'cors'});
       const stock = await response.json();
       const open = await openstatus.json()   
     //  console.log(open)   
        if(!response.ok || !openstatus){
            throw 'no data'
        }else{
          //  console.log(stock)
          let openclosed 
            if(open.isOpen == false){
                 openclosed = 'Closed'
            }else if(open.isOpen == true){
                openclosed = 'Open'
            }
            symbols[n].textContent = x + ': ' + stock.c + ' '+ ' '+ stock.dp.toFixed(2) + '%'
            marketstatus.textContent = 'US Markets: ' + openclosed
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
for (let i = 0; i < shares.length; i++){
    finnhubPrice(shares[i], i)
}
