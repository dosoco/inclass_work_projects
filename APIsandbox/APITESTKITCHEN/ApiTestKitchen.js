// Get DOM Elements
const button = document.getElementById('button')
const imageDiv = document.getElementById('img-div')
const dogImage = document.getElementById('dogImage')


// When button is pressed
button.addEventListener('click', ()=> {

    // Make an API request to get random dog photo
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => {
            const newImgEl = document.createElement("img")
            newImgEl.src = data.message
            imageDiv.appendChild(newImgEl)

            // addNewImages()
        })
})
// function addNewImages() {
//     const newImgEl = document.createElement("img")
//     newImgEl.src = dogImage
//     imageDiv.appendChild(newImgEl)
// }


// const imageContainerEl = document.querySelector('.image-container')
// const btnEl = document.querySelector('.btn')
// btnEl.addEventListener('click', () => {
//     addNewImages()
// })
// const getRandomNumber = function(max) {
//     const rand = Math.random();
//     const range = rand * max;
//     const result = Math.ceil(range);
//     return result;
// }
// function addNewImages() {
//     const newImgEl = document.createElement("img")
//     random = getRandomNumber(22)
//     newImgEl.src = `images/${random}.JPG`
//     imageContainerEl.appendChild(newImgEl)
// }