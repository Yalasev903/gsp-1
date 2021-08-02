

let box = document.querySelector('#box');
window.addEventListener('click', function (event) {
    
     box.style.left = (event.clientX - box.offsetWidth/2) + 'px';
     box.style.top = (event.clientY - box.offsetHeight/2) + 'px';
     console.log(event.clientY);
});




