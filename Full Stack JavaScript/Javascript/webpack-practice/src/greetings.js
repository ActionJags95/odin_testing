import testImage from './image.png'

const image = document.createElement('img');
image.src = testImage
document.body.appendChild(image);

export const greeting = "Hello, Odinite!";
console.log("Hello");