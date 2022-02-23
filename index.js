// met carte selectionner
let cart1 = document.querySelector('.cart1')
let cart2 = document.querySelector('.cart2')
let cart3 = document.querySelector('.cart3')
let cart4 = document.querySelector('.cart4')
let compteur = document.querySelector('.point')
// ma liste de personnage
let arrayImage = ["sangoku" , "vegeta"]

// mon compteur de point
let point = 0

//mon compteur html
compteur.textContent = point 

// j'assigne le nom des personnage au cart pour faire la comparaison
cart1.className= "cart1 " + arrayImage[0]
cart2.className= "cart2 " + arrayImage[1]
cart3.className= "cart3 " + arrayImage[0]
cart4.className= "cart4 " + arrayImage[1]

let toggle ;

// let interval1;
// let interval2

// function moveCard(card){
//     interval1 = setInterval(() => {
//     card.style.transform = "rotate(5deg)"
//     }, 1000);
//     interval2 = setInterval(() => {
//         card.style.transform = "rotate(-5deg)"
//     }, 1200);
// }
// //les function qui font bouger mes cartes
// function moveCard2(card) {
//     interval2 = setInterval(() => {
//         card.style.transform = "rotate(-5deg)"
//     }, 1000);
//     interval1 = setInterval(() => {
//     card.style.transform = "rotate(5deg)"
//     }, 1200);
// }
// if(!toggle){
//     moveCard(cart1)
//     moveCard2(cart2)
//     moveCard(cart3)
//     moveCard2(cart4)
// }

// function qui change le background de la carte
let changeImage = (cart, image) => {
    console.log("je clik" , toggle)
    toggle = false
    if (toggle) {
        // console.log("condi tru",toggle)
        cart.style.backgroundImage = "url(https://thumbs.coleka.com/media/rubrique/201803/28/cartes-de-collection-dragon-ball-super-jcc_300x300.webp)"
        setTimeout(() => {
            toggle = false
        }, 5000);
        // moveCard(cart)
    } else {
        // clearInterval(interval1)
        // clearInterval(interval2)
        cart.style.backgroundImage = `url(${image})`
        cardSelected(cart)
        setTimeout(() => {
            // console.log("dubut du time",toggle)
            toggle = true
            // console.log("dans mon time pse le toogle a tru",toggle)
        }, 3000);
        // console.log("condi false",toggle)
    }
}
// toggle = false
// met event onclik qui change la carte 
cart1.addEventListener("click",() =>{
    changeImage(cart1, "https://i.pinimg.com/474x/3b/7a/9b/3b7a9b76d75738cb83dd8e984a0fb44a.jpg")  
})

cart2.addEventListener("click", () => {
    changeImage(cart2, "https://downloadwap.com/thumbs2/wallpapers/p2/new/12/2uALs5Mh.jpg")
})

cart3.addEventListener("click" , () => {
    changeImage(cart3, "https://i.pinimg.com/474x/3b/7a/9b/3b7a9b76d75738cb83dd8e984a0fb44a.jpg")
})

cart4.addEventListener('click', () => {
    changeImage(cart4,"https://downloadwap.com/thumbs2/wallpapers/p2/new/12/2uALs5Mh.jpg" )
})

// les tableau qui contient mes classnam de cart pour comparé
let array =[]
// console.log(array.length)
// let cartselec1 = ""
// let cartselec2 = ""
let cart =[]

// function qui me dit quel cart est selectionner 
let firstCardSelected ;
let secondCardSelected ; 
let numSelected = 1
async function cardSelected(cart1){
    console.log(cart1, "ma carte sélectionner")
    if(numSelected === 1){
        // console.log(1)
        firstCardSelected = cart1
    }
    numSelected += 1
    if(numSelected === 3){
        // console.log(2)
        secondCardSelected = await cart1
        condition(firstCardSelected, secondCardSelected)
        numSelected -= 2
        // console.log("on remet a l'origin ",numSelected)

    }
    // console.log("premier carte",firstCardSelected)
    // console.log(" seconde carte",secondCardSelected)
    // if(firstCardSelected.classList.contains("sangoku") && secondCardSelected.classList.contains("sangoku")){
    //     console.log("je suis dans ma conparaison")
    //     // firstCardSelected.style.visibility = "hidden"
    //     // secondCardSelected.style.visibility = "hidden"
    // }
    // console.log("premier carte",firstCardSelected)
    // cart1.style.visibility = "hidden"
    // console.log("je suis dans cardselected")
    //push la valeur du click et après si mon array est egal a 2 je le vide 
    // console.log("log de ma carte",cart1)
    // array.unshift(cart1.classList[1])
    // cartselec1 = cart1.classList[1]

    // cart.push(cart1.classList[0])
    // console.log(cart)
    // // console.log("mon cart",cartselec1)
    
    // console.log(" mon tableau",array)
    
    // if(array[0] === array[1]) {
    //     console.log("ma condi de egal value")
    //     if(cart[0] == cart1.classList[0]) {
    //         cart1.style.visibility = "hidden"
    //     }
    //     point += 1
    //     compteur.textContent = point 
    //     array.splice(0,2)
    //     // cart[0].style.visibility = "hidden"
    //     // cart[1].style.visibility = "hidden"
    // }
    // if(cart1.classList.contains("sangoku") && cart2.classList.contains("sangoku")){
    // // console.log("log de cart",cart1,cart2)
    //     cart1.style.visibility = "hidden"
    //     cart2.style.visibility = "hidden"
    //     point += 1
    //     compteur.textContent = point 
    //     console.log(point)
    // }
}

// function ou sont toute mes condition si le joueur gagner / si les carte son pareil ou pas 
function condition( cart1 , cart2){
    // console.log("dans ma condi",cart1.classList[1])
    // console.log("dans ma condi" , cart2.classList[1])

    if(cart1.classList.contains("sangoku") && cart2.classList.contains("sangoku")){
        console.log("je suis dans ma conparaison")
        setTimeout(() => {
            cart1.style.visibility = "hidden"
            cart2.style.visibility = "hidden"
        }, 1000);
        toggle = false
        point += 1
        compteur.textContent = point
    }
    if(cart1.classList.contains("vegeta") && cart2.classList.contains("vegeta")){
        console.log("je suis dans ma conparaison")
        setTimeout(() => {
            cart1.style.visibility = "hidden"
            cart2.style.visibility = "hidden"
        }, 1000);
        toggle = false
        point += 1
        compteur.textContent = point
        console.log("le toggle dans ma condi",toggle)
    }
    if (cart1.classList[1] != cart2.classList[1]) {
        setTimeout(() => {
            cart1.style.backgroundImage = "url(https://thumbs.coleka.com/media/rubrique/201803/28/cartes-de-collection-dragon-ball-super-jcc_300x300.webp)"
            cart2.style.backgroundImage = "url(https://thumbs.coleka.com/media/rubrique/201803/28/cartes-de-collection-dragon-ball-super-jcc_300x300.webp)"
        },1000)

        console.log("dans ma condition diferent de ")
    }
    setTimeout(() => {
        if(point == arrayImage.length){
            alert("partie terminé")
        }
    }, 2000);
}

// si le array arrive a 2 element je le vide
// if(array.length == 2){
//     console.log("ok",array.length)
//     array.splice(0,2)
// }
// si les point son egal a ma liste de personnage j'arrete la partie