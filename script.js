let rectangle = document.getElementById('rectangle');
let button = document.getElementById('moveBtn');

// ترتيب الزوايا: أسفل يسار → أسفل يمين → أعلى يمين → أعلى يسار
let position = 0;

// ألوان لكل زاوية
let colors = ['red', 'green', 'blue', 'orange'];

button.onclick = function() {
  // مسح جميع المواقع السابقة
  rectangle.style.top = '';
  rectangle.style.bottom = '';
  rectangle.style.left = '';
  rectangle.style.right = '';

  // تغيير الموقع حسب الرقم
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

  // تغيير اللون
  rectangle.style.backgroundColor = colors[position];

  // تحديث الموضع للمرة الجاي
  position = position + 1;
  if (position === 4) {
    position = 0;
  }
};
