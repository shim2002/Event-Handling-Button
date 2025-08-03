let rectangle = document.getElementById('rectangle');
let button = document.getElementById('moveBtn');

let position = 0; // 0: bottom-left, 1: bottom-right, 2: top-right, 3: top-left
let colors = ['red', 'black', 'orange', 'green'];

button.onclick = function () {
  // مسح جميع القيم القديمة
  rectangle.style.top = '';
  rectangle.style.bottom = '';
  rectangle.style.left = '';
  rectangle.style.right = '';

  // تغيير اللون حسب الزاوية
  rectangle.style.backgroundColor = colors[position];

  // تحديد الزاوية
  if (position === 0) {
    // أسفل يسار
    rectangle.style.bottom = '20px';
    rectangle.style.left = '20px';
  } else if (position === 1) {
    // أسفل يمين
    rectangle.style.bottom = '20px';
    rectangle.style.right = '20px';
  } else if (position === 2) {
    // أعلى يمين
    rectangle.style.top = '20px';
    rectangle.style.right = '20px';
  } else if (position === 3) {
    // أعلى يسار
    rectangle.style.top = '20px';
    rectangle.style.left = '20px';
  }

  // نزيد الرقم حتى يتحرك للزاوية اللي بعدها
  position = (position + 1) % 4; // بيرجع للصفر بعد 3
};

