function newgrid(){
    let number = prompt('Zadaj x pre rozmer x*x mriezky (max 100)')
    if(number>100)
        newgrid()
    else    
        generateGrid(number)
}
function generateGrid(number){
    const container = document.getElementById('container');
    container.innerText = ''
    for(let i=0; i<number*number; i++) {
        const newDiv = document.createElement('div')
        newDiv.setAttribute('class', 'grid-item')
        newDiv.addEventListener('mouseover', function(e){
            const computedStyle = window.getComputedStyle(e.target);
            const backgroundColor = computedStyle.backgroundColor;
            const regex = /rgba?\((\d+), (\d+), (\d+), ([\d.]+)\)/;
            const match = Math.min(Math.round((+backgroundColor.match(regex)[4] + 0.1)*10)/10, 0.99);

            e.target.style.backgroundColor="rgba(255, 0, 0, " + match + ")"
        })
        container.appendChild(newDiv)
    }
    var elements = document.querySelectorAll('.grid-item')
    elements.forEach(function(element) {
        element.style.paddingBottom = "calc(" + 100/number + "% - 0px)";
        element.style.flexBasis = "calc(" + 100/number + "% - 0px)";
      });
}