const container1 = document.querySelector(".container1")
const container2 = document.querySelector(".container2")
const rgbcode = document.querySelector(".rgbcode")
const hexcode = document.querySelector(".hexcode")
const btn1 = document.querySelector(".btn1")
const btn2 = document.querySelector(".btn2")
const bothchange = document.getElementById("bothchange")

btn1.addEventListener("click", function() {
    let r = (Math.random() * 255).toFixed(0)
    let g = (Math.random() * 255).toFixed(0)
    let b = (Math.random() * 255).toFixed(0)

    let rgb = `rgb(${r}, ${g}, ${b})`;
    container1.style.background = rgb;
    rgbcode.textContent = `rgb(${r}, ${g}, ${b})`
})

btn2.addEventListener("click", function() {
    let randomColor = (Math.floor(Math.random()*16777216)).toString(16)
    container2.style.background = '#' + randomColor
    hexcode.textContent = `#${randomColor}`
})

bothchange.addEventListener("click", function() {
    let r = (Math.random() * 255).toFixed(0)
    let g = (Math.random() * 255).toFixed(0)
    let b = (Math.random() * 255).toFixed(0)

    let rgb = `rgb(${r}, ${g}, ${b})`;
    container1.style.background = rgb;
    rgbcode.textContent = `rgb(${r}, ${g}, ${b})`

    let randomColor = (Math.floor(Math.random()*16777216)).toString(16)
    container2.style.background = '#' + randomColor
    hexcode.textContent = `#${randomColor}`
})
