const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const cta = document.getElementById('cta')
const pixelSize = 10
let isPixelated = false


const img = new Image()
img.src = "./img/me.jpg"

function drawOriginal() {
    ctx.imageSmoothingEnabled = true
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

}

function pixelate() {
    const w = canvas.width / pixelSize
    const h = canvas.height / pixelSize

    ctx.imageSmoothingEnabled = false
    ctx.drawImage(img, 0, 0, w, h)
    ctx.drawImage(canvas, 0, 0, w, h, 0, 0, canvas.width, canvas.height)
}

img.onload = () => {
    canvas.width = img.width
    canvas.height = img.height

    drawOriginal()
}

if (cta) {
    cta.addEventListener('click', () => {
        if (isPixelated) {
            drawOriginal()
        } else {
            pixelate()
        }
        isPixelated = !isPixelated
    })
}
// function pixelate() {
//     const w = canvas.width / pixelSize
//     const h = canvas.height / pixelSize

//     ctx.imageSmoothingEnabled = false
//     ctx.drawImage(img, 0, 0, w, h)
//     ctx.drawImage(canvas, 0, 0, w, h, 0, 0, canvas.width, canvas.height)
// }

// img.onload = pixelate

// if (cta) cta.addEventListener('click', pixelate)

const grid = document.querySelector('.grid')
const totalPixels = 120
const timeoutIds = []

for (let i = 0; i < totalPixels; i++) {
    const pixel = document.createElement('div')
    pixel.classList.add('pixel')
    grid.appendChild(pixel)
}

grid.addEventListener('mouseenter', () => {
    const pixels = document.querySelectorAll('.pixel')
    pixels.forEach((pixel) => {
        const delay = Math.random() * 1000
        const timerId = setTimeout(() => {
            pixel.style.backgroundColor = '#4b0a0a'
        }, delay)
        timeoutIds.push(timerId)
    })   
})

grid.addEventListener('mouseleave', () => {
    timeoutIds.forEach((id) => clearTimeout(id))
    timeoutIds.length = 0

    const pixels = document.querySelectorAll('.pixel')
    pixels.forEach((pixel) => {
        pixel.style.backgroundColor = '#ccc'
    })
})