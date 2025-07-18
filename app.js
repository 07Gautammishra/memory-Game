const container = document.querySelector(".container")
const result=document.querySelector("#result")

const cardArray=[
    {
        name: "cheeseburger",
        img:'./img/cheeseburger.png'
    },
    {
        name: "fries",
        img:'./img/fries.png'
    },
    {
        name: "hotdog",
        img:'./img/hotdog.png'
    },
    {
        name: "ice-cream",
        img:'./img/ice-cream.png'
    },
    {
        name: "milkshake",
        img:"./img/milkshake.png"
    },
    {
        name: "pizza",
        img:"./img/pizza.png"
    },
    {
        name: "cheeseburger",
        img:'./img/cheeseburger.png'
    },
    {
        name: "fries",
        img:'./img/fries.png'
    },
    {
        name: "hotdog",
        img:'./img/hotdog.png'
    },
    {
        name: "ice-cream",
        img:'./img/ice-cream.png'
    },
    {
        name: "milkshake",
        img:"./img/milkshake.png"
    },
    {
        name: "pizza",
        img:"./img/pizza.png"
    }
]
let cardChoose=[]
let cardChosenId=[] 
let cardsWon=[] 
cardArray.sort(()=> 0.5-Math.random())


function createBoard(){
    for (let i = 0; i < 12; i++) {
        const card = document.createElement("img")      
        card.setAttribute("data-id", i)
        card.setAttribute('src', "./img/blank.png")
        card.addEventListener("click", flipCard)
        container.appendChild(card)
    }
}
createBoard()

function flipCard(){
    let card_id=this.getAttribute('data-id')
    cardChosenId.push(card_id)
    cardChoose.push(cardArray[card_id].name)
    this.setAttribute('src', cardArray[card_id].img)
    if(cardChoose.length===2){
        setTimeout(checkMatch, 500)
        
    }  
}
function checkMatch() {
    const cards=document.querySelectorAll("img")
    let optionOne=cardChosenId[0];
    let optionTwo=cardChosenId[1];
    if(optionOne==optionTwo){
        alert("you have clicked the same img")
    }else if (cardChoose[0]==cardChoose[1]) {
        // alert("You get a match")
        cards[optionOne].setAttribute("src", "./img/white.png")
        cards[optionTwo].setAttribute("src", "./img/white.png")
        cards[optionTwo].removeEventListener("click", flipCard)
        cards[optionOne].removeEventListener("click", flipCard)
        cardsWon.push(cardChoose)
        result.textContent=cardsWon.length
    }else{
        cards[optionOne].setAttribute("src", "./img/blank.png")
        cards[optionTwo].setAttribute("src", "./img/blank.png")
        
    }
    cardChoose=[]
    cardChosenId=[]

    if(cardsWon.length== (cardArray.length/2)){
        result.innerHTML='Congratulation you found them all'
    }
}