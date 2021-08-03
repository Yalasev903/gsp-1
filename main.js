

let boxes = document.querySelectorAll('.box');

     for(i = 0; i < boxes.length; i++) {
          boxes[i].addEventListener('click', function (event) {
               deactivateActiveBox();

               this.classList.add('active');
               event.stopPropagation();
              });
     }

function deactivateActiveBox() {
     let activeBox = getActivateBox();
     if (activeBox) {
          deactivateBox(activeBox);
     }
}

function deactivateBox(box) {
     box.classList.remove('active');
}

function getActivateBox() {
     return document.querySelector('.active');
}

window.addEventListener('click', function (event) {
    let activeBox = getActivateBox();
    if (activeBox) {
          activeBox.style.left = (event.clientX - activeBox.offsetWidth/2) + 'px';
          activeBox.style.top = (event.clientY - activeBox.offsetHeight/2) + 'px';

          deactivateBox(activeBox);
}

});





