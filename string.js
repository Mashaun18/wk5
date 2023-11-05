//string method

//uppercase

let str = document.querySelector('h1').textContent
// alert(str)


const list = document.querySelectorAll('li')

//uppercase
list[0].textContent += str.toUpperCase()


list[1].textContent += str.toLowerCase()


list[2].innerHTML += `The number of characters is ${str.length}`

list[3].innerHTML += str[0]

list[4].innerHTML += str[str.length -1]


list[5].innerText += `Dog is located at index ${str.indexOf('dog')}`
list[6].innerText += `Dog is located at index ${str.indexOf('goat')}`

list[7].innerText += `The last index of 'the' is ${str.lastIndexOf('the')}`


list[8].innerHTML += `replace 'the' with 'that' <strong>${str.replace('the', 'that')}</strong>`

list[9].innerHTML += `replace 'the' with 'that' <strong>${str.replaceAll('the', 'that')}</strong>`


list[10].innerHTML += `find character at '6' <strong>${str.charAt(6)}</strong>`


list[11].innerHTML += `cut out from 1-5: <strong>${str.slice(1, 5)}</strong>`


list[12].innerHTML += `remove all spaces: <strong>${str.split("")}</strong>`

