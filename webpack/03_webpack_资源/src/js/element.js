import "../style/style.css"
import "../style/demo.less"
import "../style/img.css"
import "../font/iconfont.css"

import imgSrc from "../img/200313114545-2.jpg"

const divEl = document.createElement("div")
divEl.className = "title"
divEl.innerHTML = "hello word"
document.body.appendChild(divEl)

const imgDiv = document.createElement("div")
imgDiv.className = "imgClass"
document.body.appendChild(imgDiv)

const imgEle = document.createElement("img")
imgEle.src = imgSrc
imgEle.className="imgEleClass"
document.body.appendChild(imgEle)

console.log(a.b);
console.log('test')

const iEl=document.createElement("i")
iEl.className="iconfont icon-ashbin"
document.body.appendChild(iEl)
