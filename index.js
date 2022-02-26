// mes cartes selectionners et mon compteur de point etc..
let cart1 = document.querySelector('.cart1')
let cart2 = document.querySelector('.cart2')
let cart3 = document.querySelector('.cart3')
let cart4 = document.querySelector('.cart4')
let cart5 = document.querySelector('.cart5')
let cart6 = document.querySelector('.cart6')
let cart7 = document.querySelector('.cart7')
let cart8 = document.querySelector('.cart8')
let win   = document.querySelector('.win')
let timers = document.querySelector('.timer')
let compteur = document.querySelector('.point')
let restart = document.createElement('button')
let finish = document.createElement('button')
let infoJeux = document.querySelector('.condition')
let buttonMode = document.querySelector('.contain_button')
let buttonTimer = document.querySelector('.playTimer')
let buttonSurvival = document.querySelector('.buttonSurvival')
let allcart = document.querySelector('section')
let row1 = document.querySelector('.ok')
let row2 = document.querySelector(".oki")
let ptimer = document.querySelector(".timerone")
// ici j'enleve toute les carte 
allcart.style.visibility = 'hidden'

// ma liste de personnage
let characters = [
    {   
        id: 0,
        name: "sangoku",
        image: "https://i.pinimg.com/474x/3b/7a/9b/3b7a9b76d75738cb83dd8e984a0fb44a.jpg",
    },
    {
        id: 1,
        name: "vegeta",
        image: "https://downloadwap.com/thumbs2/wallpapers/p2/new/12/2uALs5Mh.jpg",
    },
    {
        id: 2,
        name: "krilin",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkM1WbrIpoJcly4XfzCigUm_q-iGFed2v6aA&usqp=CAU",
    },
    {
        id: 3,
        name: "bulma",
        image: "https://i.skyrock.net/6383/52976383/pics/2142262707_small_1.jpg",
    },
]
buttonTimer.addEventListener('click', () => {
    infoJeux.remove()
    buttonMode.remove()
    allcart.style.visibility = 'visible'
    let time = 25
    let myInterval
    
    if(time > 0){
        myInterval = setInterval(() => {
            time -= 1
            timers.textContent = time
            if(time < 10){
                timers.style.color = "red"
                }
            if(time <= 0){
                console.log("dans la condition")
                clearInterval(myInterval)
                time = 0
                if(time === 0 && point < 4) {
                    setTimeout(() => {
                        cart1.remove()
                        cart2.remove()
                        cart3.remove()
                        cart4.remove()
                        cart5.remove()
                        cart6.remove()
                        cart7.remove()
                        cart8.remove()
                        restart.className = "rejouer"
                        restart.textContent = "Rejouer"
                        document.querySelector('.win').after(restart)
                        win.textContent = 'Time out'
                        win.style.color = "red"
                        row1.remove()
                        row2.remove()
                        ptimer.remove()
                        // allcart.remove()
                    }, 1000);
                }
            }
        }, 1000);
    }
    
    // melange le tableau de cart
    const shuffle = cards => {
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
        return cards
    }
    
    // je créé mon tableu de cart en double et je pousse ce tableau dans shuffle
    const generateAllCards = (characters) => {
        let allCards = [...characters, ...characters]
        console.log("allCard", allCards)
        return allCards
    }
    let mesCarteEnDouble = generateAllCards(characters)
    let carteMelanger = shuffle(mesCarteEnDouble)
    // j'assigne le nom des personnage au cart pour faire la comparaison + url de l'image pour la pasé dans une function
    cart1.className = `cart1 ${carteMelanger[0].name} ${carteMelanger[0].image}`
    cart2.className = `cart2 ${carteMelanger[1].name} ${carteMelanger[1].image}`
    cart3.className = `cart3 ${carteMelanger[2].name} ${carteMelanger[2].image}`
    cart4.className = `cart4 ${carteMelanger[3].name} ${carteMelanger[3].image}`
    cart5.className = `cart5 ${carteMelanger[4].name} ${carteMelanger[4].image}`
    cart6.className = `cart6 ${carteMelanger[5].name} ${carteMelanger[5].image}`
    cart7.className = `cart7 ${carteMelanger[6].name} ${carteMelanger[6].image}`
    cart8.className = `cart8 ${carteMelanger[7].name} ${carteMelanger[7].image}`
    // mon compteur de point
    let point = 0
    // pour changer mes carte d'endroit a chaque partie
    let imageNumRandom 
    let numRandom 
    
    compteur.textContent = point 
    
    let toggle ;
    
    let interval1;
    let interval2
    // function qui change le background de la carte
    let changeImage = (cart, image) => {
        toggle = false
        if (toggle) {
            cart.style.backgroundImage = "url(https://thumbs.coleka.com/media/rubrique/201803/28/cartes-de-collection-dragon-ball-super-jcc_300x300.webp)"
            setTimeout(() => {
                toggle = false
            }, 3000);
            // moveCard(cart)
        } else {
            // clearInterval(interval1)
            // clearInterval(interval2)
            cart.style.backgroundImage = `url(${image})`
            cardSelected(cart)
            setTimeout(() => {
                toggle = true
            }, 3000);
        }
    }
    // met event onclik qui change la carte 
    cart1.addEventListener("click",() =>{
        changeImage(cart1, cart1.classList[2])  
    })
    cart2.addEventListener("click", () => {
        changeImage(cart2, cart2.classList[2])
    })
    cart3.addEventListener("click" , () => {
        changeImage(cart3, cart3.classList[2])
    })
    cart4.addEventListener('click', () => {
        changeImage(cart4, cart4.classList[2])
    })
    cart5.addEventListener('click', () => {
        changeImage(cart5, cart5.classList[2])
    })
    cart6.addEventListener('click', () => {
        changeImage(cart6, cart6.classList[2])
    })
    cart7.addEventListener('click', () => {
        changeImage(cart7, cart7.classList[2])
    })
    cart8.addEventListener('click', () => {
        changeImage(cart8, cart8.classList[2])
    })
    // function qui me dit quel cart est selectionner et les deux variable stock la premier carte selected et la deuxième
    let firstCardSelected ;
    let secondCardSelected ; 
    let numSelected = 1
    async function cardSelected(cart1){
        if (numSelected === 1) {
            firstCardSelected = cart1
        }
        numSelected += 1
        if (numSelected === 3) {
            secondCardSelected = await cart1
            condition(firstCardSelected, secondCardSelected)
            numSelected -= 2
        }
    }
    function rejouer(valeur) {
        return console.log(valeur,"je suis dans la function au click")
    }
    
    
    // function ou sont toute mes condition si le joueur gagner / si les carte son pareil ou pas 
    function condition( cart1 , cart2){
        if (cart1.classList.contains("sangoku") && cart2.classList.contains("sangoku")) {
            // console.log("je suis dans ma conparaison")
            setTimeout(() => {
                cart1.style.visibility = "hidden"
                cart2.style.visibility = "hidden"
            }, 1000);
            toggle = false
            point += 1
            compteur.textContent = point
        }
        if (cart1.classList.contains("vegeta") && cart2.classList.contains("vegeta")) {
            // console.log("je suis dans ma conparaison")
            setTimeout(() => {
                cart1.style.visibility = "hidden"
                cart2.style.visibility = "hidden"
            }, 1000);
            toggle = false
            point += 1
            compteur.textContent = point
            console.log("le toggle dans ma condi",toggle)
        }
        if (cart1.classList.contains("krilin") && cart2.classList.contains("krilin")) {
            // console.log("je suis dans ma conparaison")
            setTimeout(() => {
                cart1.style.visibility = "hidden"
                cart2.style.visibility = "hidden"
            }, 1000);
            toggle = false
            point += 1
            compteur.textContent = point
            // console.log("le toggle dans ma condi",toggle)
        }
        if (cart1.classList.contains("bulma") && cart2.classList.contains("bulma")) {
            // console.log("je suis dans ma conparaison")
            setTimeout(() => {
                cart1.style.visibility = "hidden"
                cart2.style.visibility = "hidden"
            }, 1000);
            toggle = false
            point += 1
            compteur.textContent = point
            // console.log("le toggle dans ma condi",toggle)
        }
    
        if (cart1.classList[1] != cart2.classList[1]) {
            setTimeout(() => {
                cart1.style.backgroundImage = "url(https://thumbs.coleka.com/media/rubrique/201803/28/cartes-de-collection-dragon-ball-super-jcc_300x300.webp)"
                cart2.style.backgroundImage = "url(https://thumbs.coleka.com/media/rubrique/201803/28/cartes-de-collection-dragon-ball-super-jcc_300x300.webp)"
            },1000)
    
            // console.log("dans ma condition diferent de ")
        }
        
    
        setTimeout(() => {
            if(point == characters.length){
                clearInterval(myInterval)
                win.textContent = "You win"
                win.style.color = "green"
                restart.className = "rejouer"
                restart.textContent = "Rejouer"
                row1.remove()
                row2.remove()
                document.querySelector('.win').after(restart)
                // alert("partie terminé")
            }
        }, 1000);
    }
    //function qui relance le jeu
    restart.addEventListener("click", () =>{
        location.reload()
    })
} )

//les function qui font bouger mes cartes
// function moveCard(card){
//     interval1 = setInterval(() => {
//     card.style.transform = "rotate(5deg)"
//     }, 1000);
//     interval2 = setInterval(() => {
//         card.style.transform = "rotate(-5deg)"
//     }, 1200);
// }
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
//     moveCard(cart5)
//     moveCard2(cart6)
//     moveCard(cart7)
//     moveCard2(cart8)
// }

