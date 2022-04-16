const body = document.querySelector('body')
const againBtn = document.querySelector('.again')
const number = document.querySelector('.number')
const guessInput = document.querySelector('.guess')
const checkBtn = document.querySelector('.check')
const message = document.querySelector('.message')
const scoreEl = document.querySelector('.score')
const labelHighscore = document.querySelector('.label-highscore')
const highscoreEl = document.querySelector('.highscore')
const values = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20',]
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const closemodal = document.querySelector('#close-modal')

let score = 20
let highscore = 0

let random = Math.floor(Math.random() * 20 ) + 1
    console.log(random)

checkBtn.addEventListener('click', () => {
    if (guessInput.value){
        if(guessInput.value == random){
            message.textContent = 'you are win'
            number.textContent = random
            body.style.background = '#62dd6d'
            modal.classList.remove('hidden')
            overlay.classList.remove('hidden')
            if (score > highscore){
                highscore = score
                highscoreEl.textContent = highscore
            }
        }else if(guessInput.value > random){
            message.textContent = 'To height🎁'
            score--
            scoreEl.textContent = score
        }else if(guessInput.value < random){
            message.textContent = 'To Low🎁'
            score--
            scoreEl.textContent = score
        } else {
            message.textContent = 'No number'
        }
    }
        
})
againBtn.addEventListener('click', ()=>{
    body.style.background = '#222'
    score = 20
    message.textContent = 'Start guessing..'
    scoreEl.textContent = 20
    number.textContent = '?'
    guessInput.value = ''
    random = Math.floor(Math.random() * 20 ) + 1

})

closemodal.addEventListener('click', ()=>{
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
    body.style.background = '#222'
    score = 20
    message.textContent = 'Start guessing..'
    scoreEl.textContent = 20
    number.textContent = '?'
    guessInput.value = ''
    random = Math.floor(Math.random() * 20 ) + 1
})
overlay.addEventListener('click', ()=>{
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
    body.style.background = '#222'
    score = 20
    message.textContent = 'Start guessing..'
    scoreEl.textContent = 20
    number.textContent = '?'
    guessInput.value = ''
    random = Math.floor(Math.random() * 20 ) + 1
})