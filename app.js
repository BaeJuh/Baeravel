let mouseCursor = document.querySelector('.cursor');
let navLinks = document.querySelectorAll('.nav-links li')

window.addEventListener('mousemove', cursor);
// 마우스 커서 모양 바꾸기

let BK = document.getElementById('Bangkok');
let GN = document.getElementById('Gangneung');
let TK = document.getElementById('Tokyo');

function cursor(e) {
    mouseCursor.style.left = e.pageX + 'px';
    mouseCursor.style.top = e.pageY + 'px';
}