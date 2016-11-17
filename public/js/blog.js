const ICON = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 490 490" style="enable-background:new 0 0 490 490;" xml:space="preserve" width="512px" height="512px">
<path d="M463.383,27.507C416.65-18.151,362.832,2.481,342.27,22.056L95.791,237.297c-2.107,1.844-3.379,4.47-3.525,7.275  L51.87,366.91L0,420.834L102.596,490l34.265-35.614l117.468-41.924c2.831-0.205,5.453-1.567,7.244-3.784L468.61,152.441  C498.522,115.418,497.318,60.661,463.383,27.507z M99.772,463.161l-67.845-45.735L60.903,387.3l31.44,32.688l24.478,25.45  L99.772,463.161z M133.943,433.454l-55.607-57.812l-5.697-5.923l34.255-103.742l126.839,131.861L133.943,433.454z M452.637,139.375  l-199.72,247.182L117.495,245.772L355.77,37.701c13.944-14.589,57.664-31.155,92.815,4.206  C474.246,67.722,475.598,110.958,452.637,139.375z" fill="#FFFFFF"/>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>`

const BUBBLE_HEIGHT = 35

const highlights = []
const img = new Image()
img.src = 'data:image/svg+xml;utf8,' + ICON
img.style.height = '25px'
img.style.width = 'auto'
const bubble = document.createElement('div')
bubble.className = 'bubble'
bubble.style.left = '100px'
bubble.style.top = '100px'
bubble.appendChild(img)
document.body.appendChild(bubble)

function wrapText(text) {
    const span = document.createElement('span')
    span.id = Math.random().toString(36).substring(7)
    span.style.backgroundColor = 'yellow'
    span.innerText = text
    return span.outerHTML
}

function hightlightText(node, text) {
    const inner = node.innerText
    const index = inner.indexOf(text)
    const newstr = inner.substr(0, index) + wrapText(inner.substr(index, text.length)) + inner.substr(index + text.length)
    console.log(node.innerHTML)
    node.innerHTML = newstr
    console.log(newstr)
}


function handleMouseUp(event) {
    const rect = event.target.getBoundingClientRect()
    console.log(event, getSelection(), rect)
    bubble.style.left = (rect.left) + 'px'
    bubble.style.top = (window.pageYOffset + rect.top - BUBBLE_HEIGHT) + 'px'
    hightlightText(event.target, getSelection().toString().trim())
}


document.onmouseup = handleMouseUp
