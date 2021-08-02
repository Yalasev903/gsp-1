

let box = document.querySelector('#box');
window.addEventListener('click', function (event) {
    
    if (box.classList.contains('active')) {
          box.style.left = (event.clientX - box.offsetWidth/2) + 'px';
          box.style.top = (event.clientY - box.offsetHeight/2) + 'px';
          
          box.classList.remove('active');
}
});


window.box.addEventListener('click', function (event) {
 this.classList.add('active');
 event.stopPropagation();
});



