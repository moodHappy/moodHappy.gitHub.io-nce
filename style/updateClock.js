// 定义一个变量来存储当前的旋转角度，初始值为 0
var angle = 0;

function updateClock() {
var now = new Date();
var hour = now.getHours();
var minute = now.getMinutes();
var second = now.getSeconds();
if (hour < 10) {
hour = "0" + hour;
}
if (minute < 10) {
minute = "0" + minute;
}
if (second < 10) {
second = "0" + second;
}
var time = hour + ":" + minute + ":" + second;
var clock = document.getElementById("clock");
clock.textContent = time;

// 注释掉旋转角度的更新部分，不再自动旋转时钟
// --------------
angle += 6;

// 使用 transform 属性和 rotate 函数来设置时钟元素的旋转角度
clock.style.transform = "rotate(" + angle + "deg)";
}
// --------------

window.onload = updateClock;
window.setInterval(updateClock, 1000);

// 添加随机颜色效果的函数
function addEffects() {
// 获取页面中的所有元素
var elements = document.body.getElementsByTagName("*");
// 遍历所有元素
for (var i = 0; i < elements.length; i++) {
// 生成随机的 RGB 颜色值
var color =
"rgb(" +
Math.floor(Math.random() * 256) +
"," +
Math.floor(Math.random() * 256) +
"," +
Math.floor(Math.random() * 256) +
")";
// 将随机颜色应用到当前元素的 color 样式属性上
elements[i].style.color = color;
}
}

// 页面加载完成时，调用 addEffects 函数添加随机颜色效果
window.addEventListener("load", addEffects);

// 双击左下角进入Google
document.addEventListener('dblclick', function(event) {
var x = event.clientX;
var y = event.clientY;
if (window.innerWidth <= 768) { // Check if it's a mobile device
var bottomMargin = window.innerHeight - y;
var leftMargin = x;
if (bottomMargin < 50 && leftMargin < 50) { // Check if double click is within the bottom-left corner
window.location.href = 'https://www.google.com';
}
}
});

// 双击右下角进入LOL英雄秀

document.addEventListener('dblclick', function(event) {
  var x = event.clientX;
  var y = event.clientY;
  if (window.innerWidth <= 768) { // Check if it's a mobile device
    var bottomMargin = window.innerHeight - y;
    var rightMargin = window.innerWidth - x;
    if (bottomMargin < 50 && rightMargin < 50) { // Check if double click is within the bottom-right corner
      window.location.href = 'https://moodhappy.github.io/moodHappy.github.io-nce/image/LOL_hero_show.html';
    }
  }
});