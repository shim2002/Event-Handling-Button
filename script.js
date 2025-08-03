let rectangle = document.getElementById('rectangle');
let button = document.getElementById('moveBtn');

let position = 0;
let colors = ['red', 'black', 'orange', 'green'];

button.onclick = function () {
  rectangle.style.top = '';
  rectangle.style.bottom = '';
  rectangle.style.left = '';
  rectangle.style.right = '';

  rectangle.style.backgroundColor = colors[position];

  if (position === 0) {
    rectangle.style.bottom = '20px';
    rectangle.style.left = '20px';
  } else if (position === 1) {
    rectangle.style.bottom = '20px';
    rectangle.style.right = '20px';
  } else if (position === 2) {
    rectangle.style.top = '20px';
    rectangle.style.right = '20px';
  } else if (position === 3) {
    rectangle.style.top = '20px';
    rectangle.style.left = '20px';
  }

  position = (position + 1) % 4;
};
