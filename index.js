// const  generateRandomColor = () => {
//     const hexCodes = '0123456789ABCDEF'
//     let color = ''
//     for (let i = 0; i < 6; i++) {
//         color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
//     }
//     return '#' + color
// }
// const setRandomColor = () => document.body.style.backgroundColor = generateRandomColor()

const btn = document.getElementById('btn-change')
const btnCalc = document.getElementById('btn-calculate')
const clear = document.getElementById('clear')
const setRandomColor = () => {
    let randomColor = chroma.random()
    document.body.style.backgroundColor = randomColor
    if (randomColor.luminance() < 0.5) {
        document.body.style.color = 'white'
            btn.classList.remove('btn-outline-dark')
            btn.classList.add('btn-outline-light')
        clear.classList.remove('btn-outline-dark')
        clear.classList.add('btn-outline-light')
    } else {
        document.body.style.color = 'black'
        btn.classList.remove('btn-outline-light')
        btn.classList.add('btn-outline-dark')
        clear.classList.remove('btn-outline-light')
        clear.classList.add('btn-outline-dark')
    }
}

btn.addEventListener('click', () => setRandomColor())

const calculateLetters = text => text.split(/[A-Za-z]/).length - 1
const calculateWords = text => text.split(/\S+/).length - 1
const calculateSentences = text => text.split(/[/!?.]+/).length - 1

const input = document.getElementById('input')

const letterP = document.getElementById('letter')
const wordP = document.getElementById('word')
const sentenceP = document.getElementById('sentence')

const calculateAll = (v) => {
    letterP.innerHTML = calculateLetters(v)
    wordP.innerHTML = calculateWords(v)
    sentenceP.innerHTML = calculateSentences(v)
}

clear.onclick = () => {
    input.value = ''
    letterP.innerHTML = ''
    wordP.innerHTML = ''
    sentenceP.innerHTML = ''
}

input.addEventListener('beforeinput', () => calculateAll(input.value))



