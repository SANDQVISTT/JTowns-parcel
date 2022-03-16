
const img = document.createElement('img')
document.body.append(img)
//detta funkar inte !
//img.src = './img/Dragon.jpg'

const imgUrl = new URL('./img/Dragon.jpg', import.meta.url);
img.src = imgUrl.href;
console.log(imgUrl)