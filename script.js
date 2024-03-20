const container = document.getElementById('container');
for(let i=0; i<16*16; i++) {
    const newDiv = document.createElement('div')
    newDiv.setAttribute('class', 'grid-item')
    container.appendChild(newDiv)
}