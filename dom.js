const heading = document.getElementById('title')

heading.textContent = 'Fundamentals of JS'

const list1 = document.querySelector('li')
const list2 = document.querySelector('ul :nth-child(2)')
const list = document.querySelectorAll('li')
const title2 = document.querySelector('#title')
title2.style.background = '#00f'
title2.style.textTransform = '#uppercase'

document.querySelector('p').style.color = '#4dd'
list1.innerText = 'pepsi'
list2.textContent = 'coke'
list[2].textContent = 'water'
list[3].textContent = 'smirnoff'
list[4].textContent = 'beer'

const para = document.querySelectorAll('p')

para[0].innerText = `<strong>mohammed Ali</strong> said 



<q>suffer now and live the rest of your life a champion</q>`



para[1].textContent = '<strong>mohammed Ali</strong> said <q>suffer now and live the rest of your life a champion</q>'

para[2].innerHTML = '<strong>mohammed Ali</strong> said <q>suffer now and live the rest of your life a champion</q>'


document.getElementsByClassName('para')[0].style.fontSize = '2rem'
document.getElementsByClassName('para')[2].style.border = '2rem double blue'
document.querySelector('.para').style.border = '30px dashed green'
document.getElementsByTagName('p')[0].innerHTML = 'alcohol'